"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repoter = /** @class */ (function () {
    function Repoter(RepoterConfig) {
        this.PostUrl = '';
        Object.assign(this, RepoterConfig);
    }
    Repoter.prototype.sendLog = function () {
    };
    return Repoter;
}());
