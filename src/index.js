import * as Blockly from 'blockly';
import loadBlocks from './blocks.js';
import loadGenerator from './regexGenerator.js';

document.addEventListener("DOMContentLoaded", function () {
	loadBlocks();
	const generator = loadGenerator();	
	
    const workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: document.getElementById('toolbox'),
            media: 'media/'
        });
	
	var xml = '<xml><block type="regex_main" deletable="false"></block></xml>';
	Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
	workspace.addChangeListener(Blockly.Events.disableOrphans);

    const button = document.getElementById('blocklyButton');
    button.addEventListener('click', function () {
        const code = generator.workspaceToCode(workspace);
        document.getElementById('resultField').value = code;
    })
});