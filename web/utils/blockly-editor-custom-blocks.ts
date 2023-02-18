import * as Blockly from 'blockly';
import { FieldGridDropdown } from '@blockly/field-grid-dropdown';

Blockly.Blocks['print'] = {
  init: function () {
    this.appendValueInput("val")
      .appendField('print')

    this.setNextStatement(true)
    this.setPreviousStatement(true)
    this.setColour(170);
  }
};

Blockly.JavaScript['print'] = function (block) {
  var varID = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `console.log(${varID})` + '\n';
  return code;
};



Blockly.Blocks['exec'] = {
  init: function () {
    this.appendValueInput("command")
      .setCheck(null)
      .appendField("run command")

    this.setNextStatement(true)
    this.setPreviousStatement(true)
    this.setColour(180);
    this.setOutput(true, 'String');

  }
};

Blockly.JavaScript['exec'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `await exec(${cmd})` + '\n';
  return code;
};


Blockly.Blocks['my_get_env'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('get env')
      .appendField(new FieldGridDropdown([
        ['device_name', 'device_name'],
        ['platform', 'platform'],
      ]), 'env');

    this.setNextStatement(true)
    this.setPreviousStatement(true)
    this.setColour(180);
    this.setOutput(true);
  }
};

Blockly.JavaScript['my_get_env'] = function (block) {
  var env = block.getFieldValue('env');
  var code = `getEnv('${env}')` + '\n';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


