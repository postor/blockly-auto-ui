import Blockly from 'blockly';

export class FieldImageInput extends Blockly.FieldTextInput {
  constructor(value, validator, config) {
    super(value, validator, config);
  }

}

Blockly.fieldRegistry.register('my_custom_text_field', FieldImageInput);


Blockly.Blocks['print'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('print')
      .appendField(new Blockly.FieldVariable("VAR_NAME"), "val")
    this.setNextStatement(true)
    this.setPreviousStatement(true)
    this.setColour(170);

  }
};

Blockly.JavaScript['print'] = function (block) {
  var varID = block.getFieldValue('val');
  // var statements_content = Blockly.JavaScript(block, 'arg0');
  var variable_var = Blockly.JavaScript.nameDB_.getName(varID, 'VARIABLE');
  var code = `console.log(${variable_var})` + '\n';
  return code;
};



Blockly.Blocks['start_pkg'] = {
  init: function () {
    this.appendValueInput("pkg")
      .setCheck('String')
      .appendField("open package")

    this.setNextStatement(true)
    this.setPreviousStatement(true)
    this.setColour(180);

  }
};

Blockly.JavaScript['start_pkg'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'pkg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `startPkg(${value_name})` + '\n';
  return code;
};


