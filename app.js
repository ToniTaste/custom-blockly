const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml>
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="math_number"></block>
            <block type="text"></block>
        </xml>
    `,
});
