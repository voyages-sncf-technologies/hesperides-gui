const assert = require('../../helpers/assert');
const send = require('../../helpers/send');
var { Given } = require('cucumber');

When('I add the existing module to this logic group', /** @this CustomWorld */ async function () {
    await send.mouseOnById('e2e-tree-renderer-edit-logic-group-ABC');
    await send.clickById(`e2e-tree-renderer-add-module-button-${ this.deployedModuleBuilder.logicGroup }`);
    await send.searchAndSelectFirstByCss('md-autocomplete input#e2e-search-module-input-module-autocomplete', this.moduleBuilder.name);
    await send.clickById('e2e-search-module-add-module-button');
});

Then('the module is successfully added to the logic group', /** @this CustomWorld */ async function () {
    const box = this.deployedModuleBuilder.modulePath.split('#')[1];
    await assert.isPresentById(`e2e-tree-renderer-edit-module-button-${ box }-${ this.moduleBuilder.name }`);
});

Given('I add the existing module named {string} to logic group {string}', async function (moduleName, logicGroup) {
    await send.mouseOnById(`e2e-tree-renderer-edit-logic-group-${ logicGroup }`);
    await send.clickById(`e2e-tree-renderer-add-module-button-${ logicGroup }`);
    await send.searchAndSelectFirstByCss('md-autocomplete input#e2e-search-module-input-module-autocomplete', moduleName);
    await send.clickById('e2e-search-module-add-module-button');
});
