"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactLoaderSpinner = require("react-loader-spinner");

require("react-loader-spinner/dist/loader/css/react-spinner-loader.css");

require("./tabs.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Index file that queries for cases 
 */
// get our fontawesome imports

/**
* Internal dependencies.
*/
const Tabs = props => {
  var _currentData$, _currentData$2, _currentData$3, _currentData$4, _currentData$5, _currentData$6, _currentData$7, _currentData$8;

  const [currentTab, SetCurrentTab] = (0, _react.useState)(0);
  const [data, SetData] = (0, _react.useState)(props.data);
  const [currentData, SetCurrentData] = (0, _react.useState)([]);
  const [currentTabs, SetCurrentTabs] = (0, _react.useState)(0);

  function handleClick(value) {
    SetCurrentTab(value);
  }

  function handleClicks(val) {
    if (val === currentTabs) {
      SetCurrentTabs(-1);
    } else {
      SetCurrentTabs(val);
    }
  }

  function filterData() {
    const currentData = data === null || data === void 0 ? void 0 : data.filter((item, i) => {
      if (item.index === currentTab) return item;
    });
    SetCurrentData(currentData);
  }

  (0, _react.useEffect)(() => {
    filterData();
  }, [currentTab, currentTabs]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tab"
  }, data && data.map((button, i) => {
    const currentClass = (button === null || button === void 0 ? void 0 : button.index) === currentTab ? ' tablinks active' : 'tablinks';
    const currentIcon = currentClass === ' tablinks active' ? _freeSolidSvgIcons.faMinus : _freeSolidSvgIcons.faPlus;
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      key: button === null || button === void 0 ? void 0 : button.id,
      className: currentClass,
      onClick: () => handleClick(button === null || button === void 0 ? void 0 : button.index)
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: button.icon,
      className: "icon-img",
      alt: "Image not found"
    }), /*#__PURE__*/_react.default.createElement("span", null, " ", button === null || button === void 0 ? void 0 : button.title, " "), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: currentIcon
    }));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabcontent"
  }, currentData.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-content-inner"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "content-title text-center"
  }, (_currentData$ = currentData[0]) === null || _currentData$ === void 0 ? void 0 : _currentData$.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-sub-heading text-center"
  }, (_currentData$2 = currentData[0]) === null || _currentData$2 === void 0 ? void 0 : _currentData$2.subTitle), /*#__PURE__*/_react.default.createElement("p", {
    className: "spacer"
  }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mobi-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-body",
    dangerouslySetInnerHTML: {
      __html: "<img src=".concat((_currentData$3 = currentData[0]) === null || _currentData$3 === void 0 ? void 0 : _currentData$3.img, " class=\"rounded-img fadeRight\" alt=\"Image not found\"/>") + ((_currentData$4 = currentData[0]) === null || _currentData$4 === void 0 ? void 0 : _currentData$4.body)
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-links-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "links"
  }, ((_currentData$5 = currentData[0]) === null || _currentData$5 === void 0 ? void 0 : _currentData$5.link1) && /*#__PURE__*/_react.default.createElement("a", {
    href: (_currentData$6 = currentData[0]) === null || _currentData$6 === void 0 ? void 0 : _currentData$6.link1,
    className: "links-btn link-1",
    target: "_blank"
  }, "Learn More"), ((_currentData$7 = currentData[0]) === null || _currentData$7 === void 0 ? void 0 : _currentData$7.link2) && /*#__PURE__*/_react.default.createElement("a", {
    href: (_currentData$8 = currentData[0]) === null || _currentData$8 === void 0 ? void 0 : _currentData$8.link2,
    className: "links-btn link-2",
    target: "_blank"
  }, "Free Evaluation"))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react.default.createElement(_reactLoaderSpinner.TailSpin, {
    color: "#00BFFF",
    height: 80,
    width: 80
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-main mobile"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tab"
  }, data && data.map((button, i) => {
    var _data$i, _data$i2, _data$i3, _data$i4, _data$i5, _data$i6, _data$i7, _data$i8;

    const currentClass = (button === null || button === void 0 ? void 0 : button.index) === currentTabs ? ' tablinks active' : 'tablinks';
    const currentIcon = currentClass === ' tablinks active' ? _freeSolidSvgIcons.faMinus : _freeSolidSvgIcons.faPlus;
    const fadeClass = (button === null || button === void 0 ? void 0 : button.index) === currentTabs ? "rounded-img fadeRight" : "rounded-img";
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      key: button === null || button === void 0 ? void 0 : button.id,
      className: currentClass,
      onClick: () => handleClicks(button === null || button === void 0 ? void 0 : button.index)
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: button.icon,
      className: "icon-img",
      alt: "Image not found"
    }), /*#__PURE__*/_react.default.createElement("span", null, " ", button === null || button === void 0 ? void 0 : button.title, " "), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: currentIcon
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "tabcontent ".concat((button === null || button === void 0 ? void 0 : button.index) === currentTabs ? ' open' : 'close')
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-content-inner"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: "content-title text-center"
    }, (_data$i = data[i]) === null || _data$i === void 0 ? void 0 : _data$i.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-sub-heading text-center"
    }, (_data$i2 = data[i]) === null || _data$i2 === void 0 ? void 0 : _data$i2.subTitle), /*#__PURE__*/_react.default.createElement("p", {
      className: "spacer"
    }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
      className: "mobi-flex"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "content-body",
      dangerouslySetInnerHTML: {
        __html: "<img src=".concat((_data$i3 = data[i]) === null || _data$i3 === void 0 ? void 0 : _data$i3.img, " class=\"").concat(fadeClass, "\" alt=\"Image not found\"/>") + ((_data$i4 = data[i]) === null || _data$i4 === void 0 ? void 0 : _data$i4.body)
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "content-links-container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "links"
    }, ((_data$i5 = data[i]) === null || _data$i5 === void 0 ? void 0 : _data$i5.link1) && /*#__PURE__*/_react.default.createElement("a", {
      href: (_data$i6 = data[i]) === null || _data$i6 === void 0 ? void 0 : _data$i6.link1,
      className: "links-btn link-1",
      target: "_blank"
    }, "Learn More"), ((_data$i7 = data[i]) === null || _data$i7 === void 0 ? void 0 : _data$i7.link2) && /*#__PURE__*/_react.default.createElement("a", {
      href: (_data$i8 = data[i]) === null || _data$i8 === void 0 ? void 0 : _data$i8.link2,
      className: "links-btn link-2",
      target: "_blank"
    }, "Free Evaluation")))))));
  }))));
}; // export default Tabs


var _default = Tabs;
exports.default = _default;