"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./store/index.ts + 2 modules
var store = __webpack_require__(4262);
// EXTERNAL MODULE: ./store/actions-creators/post.ts + 1 modules
var post = __webpack_require__(9208);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Warning.tsx


const Warning = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card mb-3 p-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "text-center mt-1",
                children: "Шапка сделана в целях демонстрации динамической навигации"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "bi bi-exclamation-circle-fill text-warning fw-bold"
                    }),
                    " Если Вы перешли на страницу поста и нажали \xabудалить пост\xbb, а вернувшись назад, обнаружили что пост цел, то советуем Вам посмотреть на файл главной страницы — ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-info",
                        children: "\xabpages/index\xbb"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Warning = (Warning);

// EXTERNAL MODULE: ./components/Counter.tsx
var Counter = __webpack_require__(4977);
// EXTERNAL MODULE: ./components/Post.tsx
var Post = __webpack_require__(949);
;// CONCATENATED MODULE: ./pages/index.tsx






const Home = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "position-absolute start-50 top-50 translate-middle w-75 h-75",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Warning, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Counter/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Post/* default */.Z, {})
        ]
    }));
};
/*
    @ru Функция ниже подгружает пост при каждом переходе на главную страницу.
    @en The function below loads the post every time you go to the main page.
 */ Home.getInitialProps = store/* wrapper.getInitialPageProps */.Y.getInitialPageProps((store)=>async ()=>{
        const dispatch = store.dispatch;
        await dispatch((0,post/* fetchPost */.S)());
    }
);
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 4262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./store/reducers/counterReducer.ts
var counterReducer = __webpack_require__(8741);
// EXTERNAL MODULE: ./store/reducers/postReducer.ts
var postReducer = __webpack_require__(4311);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./store/reducers/index.ts




const rootReducer = (0,external_redux_.combineReducers)({
    counter: counterReducer/* counterReducer */.jX,
    post: postReducer/* postReducer */.sZ
});
const reducer = (state, action)=>{
    if (action.type === external_next_redux_wrapper_namespaceObject.HYDRATE) return {
        ...state,
        ...action.payload
    };
    else return rootReducer(state, action);
};

;// CONCATENATED MODULE: ./store/index.ts



const makeStore = ()=>(0,toolkit_.configureStore)({
        reducer: reducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
    })
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [184,949,977], () => (__webpack_exec__(468)));
module.exports = __webpack_exports__;

})();