//=============================================================================
// aaaaaaaaaa
//=============================================================================

/*:
* @target MZ
* @plugindesc bbbbbbbbbb
* @author me
* @url xxxxxxxxxx
*
* @help game exit button
*/

(() => {
    
    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function () {
        _Window_TitleCommand_makeCommandList.apply(this, arguments);
        this.addCommand(TextManager.gameEnd, "exit");
    };

    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function () {
        _Scene_Title_createCommandWindow.apply(this, arguments);
        this._commandWindow.setHandler("exit", this.commandExit.bind(this));
    };

    Scene_Title.prototype.commandExit = function () {
        SceneManager.exit();
    };

})();