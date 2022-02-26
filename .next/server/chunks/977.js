"use strict";
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 4977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useTypedSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3285);
/* harmony import */ var _hook_useTypedActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Counter = ()=>{
    const { count  } = (0,_hook_useTypedSelector__WEBPACK_IMPORTED_MODULE_1__/* .useTypedSelector */ .i)((state)=>state.counter
    );
    const { increment , decrement , resetCounter  } = (0,_hook_useTypedActions__WEBPACK_IMPORTED_MODULE_2__/* .useTypedActions */ .f)((actions)=>actions.counter
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card mb-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "m-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center",
                    children: "Пример махинаций с числами"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-center",
                    children: "Всё строго типизировано и в коде у Вас уже будут подсказки"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: "text-center",
                    children: [
                        "Счетчик: ",
                        count
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "btn-group w-100 mt-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>increment()
                            ,
                            className: "btn btn-outline-primary",
                            children: "Инкремент"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>decrement()
                            ,
                            className: "btn btn-outline-success",
                            children: "Декремент"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>resetCounter()
                    ,
                    disabled: count === 0,
                    className: "btn btn-danger mt-3 w-100",
                    children: "Сбросить"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ })

};
;