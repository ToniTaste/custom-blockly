const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
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
