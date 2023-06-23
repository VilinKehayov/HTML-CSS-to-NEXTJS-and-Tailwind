"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth.js

// import Providers from 'next-auth/providers';

const options = {
    providers: [
        credentials_default()({
            name: "Admin Panel",
            credentials: {
                username: {
                    label: "Username",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            authorize: async (credentials)=>{
                const { username, password } = credentials;
                // Replace the condition with your actual authentication logic
                if (username === "admin" && password === "password") {
                    return {
                        id: 1,
                        name: "Admin"
                    }; // Sample user data
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        jwt: true
    }
};
/* harmony default export */ const auth = ((req, res)=>external_next_auth_default()(req, res, options));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(355));
module.exports = __webpack_exports__;

})();