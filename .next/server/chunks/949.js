"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useTypedSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3285);
/* harmony import */ var _store_actions_creators_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9208);
/* harmony import */ var _hook_useTypedActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(134);
/* harmony import */ var _hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4954);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






const Post = ()=>{
    const { error , post , isHave  } = (0,_hook_useTypedSelector__WEBPACK_IMPORTED_MODULE_1__/* .useTypedSelector */ .i)((state)=>state.post
    );
    const { resetPosts  } = (0,_hook_useTypedActions__WEBPACK_IMPORTED_MODULE_3__/* .useTypedActions */ .f)((actions)=>actions.post
    );
    const dispatch = (0,_hook_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card mb-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "m-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-center",
                    children: "Пример махинаций с асинхронными запросами"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-center",
                    children: "Всё строго типизировано и в коде у Вас уже будут подсказки"
                }),
                isHave ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-4 w-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "list-group",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "list-group-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-1 text-center",
                                    children: post.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-1 text-center",
                                    children: post.body
                                })
                            ]
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-center mb-4",
                    children: "Пост не найден"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "btn-group w-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: async ()=>await dispatch((0,_store_actions_creators_post__WEBPACK_IMPORTED_MODULE_2__/* .fetchPost */ .S)())
                            ,
                            disabled: isHave,
                            className: "btn btn-outline-success",
                            children: "Получить пост"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>resetPosts()
                            ,
                            disabled: !isHave,
                            className: "btn btn-outline-danger",
                            children: "Удалить пост"
                        })
                    ]
                }),
                error.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-center text-danger",
                            children: error
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ }),

/***/ 4954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()
;


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ useTypedActions)
});

// UNUSED EXPORTS: useActions

// EXTERNAL MODULE: ./store/reducers/counterReducer.ts
var counterReducer = __webpack_require__(8741);
// EXTERNAL MODULE: ./store/reducers/postReducer.ts
var postReducer = __webpack_require__(4311);
;// CONCATENATED MODULE: ./store/actions-creators/index.ts


/* harmony default export */ const actions_creators = ({
    counter: counterReducer/* counterActions */.J5,
    post: postReducer/* postActions */.rZ
});

// EXTERNAL MODULE: ./hooks/useAppDispatch.ts
var useAppDispatch = __webpack_require__(4954);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./hooks/useTypedActions.ts



const useActions = (callback)=>{
    const actions = callback(actions_creators);
    const dispatch = (0,useAppDispatch/* useAppDispatch */.T)();
    return (0,external_redux_.bindActionCreators)(actions, dispatch);
};
const useTypedActions = useActions;


/***/ }),

/***/ 3285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useTypedSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;