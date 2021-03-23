import * as Blockly from 'blockly';

export default function loadBlocks() {
	const blockDefinitions = [
	{
		"type": "regex_or",
		"message0": "OR %1 %2",
		"args0": [
		{
			"type": "input_dummy"
		},
		{
			"type": "input_statement",
			"name": "Logical AND statements"
		}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 230,
		"tooltip": "A logical OR block",
		"helpUrl": ""
	},
	{
		"type": "regex_match_string",
		"message0": "Match string (escaped) %1",
		"args0": [
		{
			"type": "field_input",
			"name": "str",
			"text": "abc"
		}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 120,
		"tooltip": "Match the string exactly",
		"helpUrl": ""
	},
	{
		"type": "regex_match_digit",
		"message0": "digit (\\d) %1",
		"args0": [
		{
			"type": "input_value",
			"name": "NAME"
		}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "regex_match_anycharacter",
		"message0": "any character (.) %1",
		"args0": [
		{
			"type": "input_value",
			"name": "NAME"
		}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 120,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "regex_quantifier_any",
		"message0": "0 or more (*)",
		"output": "quantifier",
		"colour": 290,
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "regex_main",
		"message0": "Regex %1",
		"args0": [
		{
			"type": "input_value",
			"name": "initializer",
			"check": "flag"
		}
		],
		"nextStatement": null,
		"colour": 65,
		"tooltip": "",
		"helpUrl": ""
	}
	];

	Blockly.defineBlocksWithJsonArray(blockDefinitions);
}
