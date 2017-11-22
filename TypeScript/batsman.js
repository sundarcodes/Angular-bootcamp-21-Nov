var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var player_1 = require('./player');
var Batsman = (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name) {
        _super.call(this, name);
        this._runs = 0;
    }
    Batsman.prototype.runs = function () {
        return this._runs;
    };
    Batsman.prototype.incrementRunsBy = function (num) {
        this._runs += num;
    };
    return Batsman;
})(player_1.Player);
exports.Batsman = Batsman;
