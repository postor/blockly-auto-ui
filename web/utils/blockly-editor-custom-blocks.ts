import Blockly from 'blockly';

Blockly.Blocks['print'] = {
  init: function () {
    this.appendStatementInput("Content")
      .setCheck(null);
    this.setInputsInline(true);
    this.setColour(315);
    this.setTooltip("console.log");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['print'] = function (block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'Content');
  // TODO: Assemble Python into code variable.
  var code = `console.log(${statements_content})` + '\n';
  return code;
};

