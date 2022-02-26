"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-jsx@5.0.0_react@17.0.2/node_modules/styled-jsx/style.js
var style = __webpack_require__(618);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./routes/index.ts
const routes = [
    {
        title: 'Главная',
        path: '/'
    },
    {
        title: 'Пост',
        path: '/post'
    },
    {
        title: 'Счётчик',
        path: '/counter'
    }, 
];

// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.1.0_react-dom@17.0.2+react@17.0.2/node_modules/next/link.js
var next_link = __webpack_require__(9369);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Navbar.tsx





const Navbar = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar fixed-top navbar-expand navbar-dark bg-dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ms-2 collapse navbar-collapse",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "navbar-nav mb-2 m-auto mb-lg-0",
                    children: routes.map(({ title , path  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: router.pathname === path ? 'nav-link text-white' : 'nav-link',
                                    children: title
                                })
                            })
                        }, index)
                    )
                })
            })
        })
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.tsx



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./store/index.ts + 2 modules
var store = __webpack_require__(4262);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx










const WrappedApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-8c715d902d8df71c",
                        /*#__PURE__*/ children: "Next Extensive Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index,follow",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "googlebot",
                        content: "index,follow",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "The most extensive template for NEXT.js",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "NEXT.js, template, next-redux, redux-toolkit",
                        className: "jsx-8c715d902d8df71c"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: "jsx-8c715d902d8df71c"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    className: "jsx-8c715d902d8df71c" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "8c715d902d8df71c",
                children: "body{background:#4b4c4c}"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                defer: true,
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
                crossOrigin: "anonymous"
            })
        ]
    }));
};
/* harmony default export */ const _app = (store/* wrapper.withRedux */.Y.withRedux(WrappedApp));


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

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [618,419,184], () => (__webpack_exec__(5760)));
module.exports = __webpack_exports__;

})();