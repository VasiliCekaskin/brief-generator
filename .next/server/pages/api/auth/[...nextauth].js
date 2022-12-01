"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

const prisma = global.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 3647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(1693);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        credentials_default()({
            credentials: {},
            // @ts-ignore
            async authorize (credentials, _) {
                const { email , password  } = credentials;
                if (!email || !password) {
                    throw new Error("Missing username or password");
                }
                const user = await prisma/* default.user.findUnique */.Z.user.findUnique({
                    where: {
                        email
                    }
                });
                // if user doesn't exist or password doesn't match
                if (!user || !await (0,external_bcrypt_.compare)(password, user.password)) {
                    throw new Error("Invalid username or password");
                }
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt"
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3647));
module.exports = __webpack_exports__;

})();