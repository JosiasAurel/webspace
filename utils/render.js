"use strict";
exports.__esModule = true;
exports.Renderer = void 0;
var markdown_it_1 = require("markdown-it");
var katex_1 = require("katex");
var fs_1 = require("fs");
var Renderer = /** @class */ (function () {
    function Renderer(renderer) {
        this.currentRenderer = renderer ? renderer : "markdown";
        this.katexOptions = {
            output: "mathml"
        };
    }
    Renderer.prototype.switchToMarkdown = function () {
        this.currentRenderer = "markdown";
    };
    Renderer.prototype.switchToKatex = function () {
        this.currentRenderer = "katex";
    };
    Renderer.prototype.render = function (text) {
        if (this.currentRenderer === "markdown") {
            return new markdown_it_1["default"]().render(text);
        }
        return katex_1["default"].renderToString(text, this.katexOptions);
    };
    Renderer.prototype.splitBlocksWithLabels = function (document) {
        var seps = document.split("\n");
        console.log(seps);
    };
    Renderer.prototype.parse = function (document) {
        var lineBlocks = document.split("\n");
        for (var lineIdx = 0; lineIdx < lineBlocks.length; lineIdx++) {
            console.log(lineBlocks[lineIdx]);
        }
    };
    return Renderer;
}());
exports.Renderer = Renderer;
var render = new Renderer("markdown");
var content = fs_1.readFileSync("./sample.md").toString();
var result = render.parse(content);
console.log(result);
