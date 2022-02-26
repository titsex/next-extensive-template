"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 9208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ fetchPost)
});

;// CONCATENATED MODULE: ./types/reducers/post.type.ts
var PostActionTypes;
(function(PostActionTypes) {
    PostActionTypes["FETCH_POSTS"] = 'posts/fetchPosts';
    PostActionTypes["RESET_POSTS"] = 'posts/resetPosts';
})(PostActionTypes || (PostActionTypes = {}));

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./store/actions-creators/post.ts



const fetchPost = (0,toolkit_.createAsyncThunk)(PostActionTypes.FETCH_POSTS, async ()=>{
    const response = await external_axios_default().get(`https://jsonplaceholder.typicode.com/posts/1`);
    return response.data;
});


/***/ }),

/***/ 8741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J5": () => (/* binding */ counterActions),
/* harmony export */   "jX": () => (/* binding */ counterReducer)
/* harmony export */ });
/* unused harmony export counterSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    count: 0
};
const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.count++;
        },
        decrement: (state)=>{
            state.count--;
        },
        resetCounter: (state)=>{
            state.count = 0;
        }
    }
});
const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;


/***/ }),

/***/ 4311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rZ": () => (/* binding */ postActions),
/* harmony export */   "sZ": () => (/* binding */ postReducer)
/* harmony export */ });
/* unused harmony export postSlice */
/* harmony import */ var _store_actions_creators_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9208);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    post: {},
    isHave: false,
    error: ''
};
const postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'post',
    initialState,
    reducers: {
        resetPosts: (state)=>{
            state.post = {};
            state.isHave = false;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_store_actions_creators_post__WEBPACK_IMPORTED_MODULE_0__/* .fetchPost.fulfilled */ .S.fulfilled, (state, action)=>{
            state.post = action.payload;
            state.isHave = true;
            state.error = '';
        }).addCase(_store_actions_creators_post__WEBPACK_IMPORTED_MODULE_0__/* .fetchPost.rejected */ .S.rejected, (state, action)=>{
            state.error = action.payload || 'Неизвестная ошибка';
        });
    }
});
const postActions = postSlice.actions;
const postReducer = postSlice.reducer;


/***/ })

};
;