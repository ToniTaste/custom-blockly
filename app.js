const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml>
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="math_number"></block>
            <block type="text"></block>
        </xml>
		
		<xml>
    <category name="Basics">
        <block type="math_number"></block>
        <block type="text"></block>
    </category>
    <category name="Custom">
        <block type="print_message"></block>
    </category>
</xml>

    `,
});

// Blockdefinition
Blockly.defineBlocksWithJsonArray([
    {
        "type": "print_message",
        "message0": "Print %1",
        "args0": [
            {
                "type": "input_value",
                "name": "TEXT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Print a message",
        "helpUrl": ""
    }
]);

// Generator
Blockly.JavaScript['print_message'] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    return `console.log(${text});\n`;
};
