"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./global-setting.type");
var EditorManager = require("../../../gaea-editor-manager/gaea-editor-manager");
var index_1 = require('nt-auto-bind');
var index_2 = require('nt-web-modal');
var color_component_1 = require("../../../components/color/color.component");
var action_1 = require("./action");
var store_1 = require("./store");
require("./global-setting.css");
var GlobalSetting = function (_React$Component) {
    (0, _inherits3.default)(GlobalSetting, _React$Component);

    function GlobalSetting() {
        (0, _classCallCheck3.default)(this, GlobalSetting);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GlobalSetting.__proto__ || Object.getPrototypeOf(GlobalSetting)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(GlobalSetting, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.GlobalSettingAction.setDefaultSetting(this.props.ApplicationStore.editorProps.defaultSetting);
        }
    }, {
        key: "handleShowModal",
        value: function handleShowModal() {
            this.setState({
                show: true
            });
        }
    }, {
        key: "handleOk",
        value: function handleOk() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "handleCancel",
        value: function handleCancel() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "handleBackgroundColorChange",
        value: function handleBackgroundColorChange(color) {
            this.props.GlobalSettingAction.setBackgroundColor("rgba(" + color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b + ", " + color.rgb.a + ")", color.rgb.a);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { onClick: this.handleShowModal }, "全局设置", React.createElement(index_2.Modal, { title: "全局设置", className: "nt-editor-gaea-editor-gaea_editor-components-global_setting modal", show: this.state.show, onOk: this.handleOk, onCancel: this.handleCancel }, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col" }, "画布背景颜色"), React.createElement("div", { className: "col-right" }, React.createElement(color_component_1.default, { color: this.props.ApplicationStore.viewportStyle.backgroundColor || 'transparent', onChange: this.handleBackgroundColorChange })))));
        }
    }]);
    return GlobalSetting;
}(React.Component);
GlobalSetting.defaultProps = new typings.Props();
GlobalSetting.position = 'navbarLeft';
GlobalSetting.Action = action_1.default;
GlobalSetting.Store = store_1.default;
__decorate([index_1.autoBindMethod], GlobalSetting.prototype, "handleShowModal", null);
__decorate([index_1.autoBindMethod], GlobalSetting.prototype, "handleOk", null);
__decorate([index_1.autoBindMethod], GlobalSetting.prototype, "handleCancel", null);
__decorate([index_1.autoBindMethod], GlobalSetting.prototype, "handleBackgroundColorChange", null);
GlobalSetting = __decorate([EditorManager.observer(['ApplicationStore', 'GlobalSettingAction'])], GlobalSetting);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GlobalSetting;