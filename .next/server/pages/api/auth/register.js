"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
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

/***/ 8806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1693);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const { email , password  } = req.body;
    const exists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findUnique */ .Z.user.findUnique({
        where: {
            email
        }
    });
    if (exists) {
        res.status(400).send("User already exists");
    } else {
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.create */ .Z.user.create({
            data: {
                email,
                password: await (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash)(password, 10)
            }
        });
        res.status(200).json(user);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8806));
module.exports = __webpack_exports__;

})();