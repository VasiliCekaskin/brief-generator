exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 8919:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading-dots_loading__3HYzm",
	"spacer": "loading-dots_spacer__3kGlG",
	"blink": "loading-dots_blink__mTR28"
};


/***/ }),

/***/ 1737:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9797, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5059))

/***/ }),

/***/ 8592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/vasilicekaskin/priv/ezwebs/brief-generator/components/form.tsx");


/***/ }),

/***/ 5059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Form)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(3370);
// EXTERNAL MODULE: ./components/loading-dots.module.css
var loading_dots_module = __webpack_require__(8919);
var loading_dots_module_default = /*#__PURE__*/__webpack_require__.n(loading_dots_module);
;// CONCATENATED MODULE: ./components/loading-dots.tsx


const LoadingDots = ({ color ="#000"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: (loading_dots_module_default()).loading,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    backgroundColor: color
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    backgroundColor: color
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    backgroundColor: color
                }
            })
        ]
    });
};
/* harmony default export */ const loading_dots = (LoadingDots);

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(3518);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./components/form.tsx







function Form({ type  }) {
    const [loading, setLoading] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            setLoading(true);
            if (type === "login") {
                (0,react.signIn)("credentials", {
                    redirect: false,
                    email: e.currentTarget.email.value,
                    password: e.currentTarget.password.value
                }).then(({ ok , error  })=>{
                    setLoading(false);
                    if (ok) {
                        router.push("/protected");
                    } else {
                        dist/* default.error */.ZP.error(error);
                    }
                });
            } else {
                fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: e.currentTarget.email.value,
                        password: e.currentTarget.password.value
                    })
                }).then(async (res)=>{
                    setLoading(false);
                    if (res.status === 200) {
                        dist/* default.success */.ZP.success("Account created! Redirecting to login...");
                        setTimeout(()=>{
                            router.push("/login");
                        }, 2000);
                    } else {
                        dist/* default.error */.ZP.error(await res.text());
                    }
                });
            }
        },
        className: "flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "email",
                        className: "block text-xs text-gray-600 uppercase",
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        placeholder: "panic@thedis.co",
                        autoComplete: "email",
                        required: true,
                        className: "mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "email",
                        className: "block text-xs text-gray-600 uppercase",
                        children: "Password"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        required: true,
                        className: "mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: loading,
                className: `${loading ? "cursor-not-allowed border-gray-200 bg-gray-100" : "border-black bg-black text-white hover:bg-white hover:text-black"} flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`,
                children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(loading_dots, {
                    color: "#808080"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: type === "login" ? "Sign In" : "Sign Up"
                })
            }),
            type === "login" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center text-sm text-gray-600",
                children: [
                    "Don't have an account?",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/register",
                        className: "font-semibold text-gray-800",
                        children: "Sign up"
                    }),
                    " ",
                    "for free."
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center text-sm text-gray-600",
                children: [
                    "Already have an account?",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        className: "font-semibold text-gray-800",
                        children: "Sign in"
                    }),
                    " ",
                    "instead."
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2919)


/***/ }),

/***/ 9483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2575)


/***/ })

};
;