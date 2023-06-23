"use strict";
exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
// import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const router = useRouter();
//     useEffect(() => {
//       async function checkAuth() {
//         const session = await getSession();
//         // If the user is not authenticated, redirect to the login page
//         if (!session) {
//           router.push('/admin/login');
//         }
//       }
//       checkAuth();
//     }, []);
//     // If the user is authenticated, render the protected page
//     return <WrappedComponent {...props} />;
//   };
// };
// export default withAuth;




const withAuth = (WrappedComponent)=>{
    return (props)=>{
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            async function checkAuth() {
                const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
                // If the user is not authenticated, redirect to the login page
                if (!session) {
                    // Store the current route before redirecting
                    router.push({
                        pathname: "/admin/login",
                        query: {
                            returnUrl: router.asPath
                        }
                    });
                }
            }
            checkAuth();
        }, []);
        // If the user is authenticated, render the protected page
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
            ...props
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);


/***/ })

};
;