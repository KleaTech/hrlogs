import * as Blockly from 'blockly';

let regex_flags = '';

export default function loadGenerator() {
	const regexGenerator = new Blockly.Generator('Regex');
	regexGenerator.INDENT = '';
	setInit(regexGenerator);
	setScrub(regexGenerator);
	setFinish(regexGenerator);
	loadBlockGenerators(regexGenerator);	
	return regexGenerator;
}

function setScrub(generator) {
	generator.scrub_ = function(block, code, opt_thisOnly) {
		var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
		var nextCode = opt_thisOnly ? '' : generator.blockToCode(nextBlock);
		return code + nextCode;
	};
}

function setFinish(generator) {
	generator.finish = function(str) {
		str = trimTrailing(str, '|');
		if(!str) return str;
		str = '/' + str + '/' + regex_flags;
		return str;
	}
}

function setInit(generator) {
	generator.init = function(_workspace) {
		regex_flags = '';
	}
}

function trimTrailing(str, charToTrim) {
	var regExp = new RegExp(escapeRegex(charToTrim) + '+$');
	return str.replace(regExp, '');
}

function escapeRegex(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function loadBlockGenerators(regexGenerator) {
	regexGenerator['regex_or'] = function(block) {
		var code = regexGenerator.statementToCode(block, 'Logical AND statements');
		return code + '|';
	};

	regexGenerator['regex_match_string'] = function(block) {
		var text_str = block.getFieldValue('str');
		return escapeRegex(text_str);
	};

	regexGenerator['regex_match_digit'] = function(block) {
		var value_name = regexGenerator.valueToCode(block, 'NAME', 0);
		return '\\d' + value_name;
	};

	regexGenerator['regex_match_anycharacter'] = function(block) {
		var value_name = regexGenerator.valueToCode(block, 'NAME', 0);
		return '.' + value_name;
	};
	
	regexGenerator['regex_quantifier_any'] = function(block) {
		return ['*', 0];
	};
	
	regexGenerator['regex_main'] = function(block) {
		var value_initializer = regexGenerator.valueToCode(block, 'initializer', 0);
		return '';
	};
}
