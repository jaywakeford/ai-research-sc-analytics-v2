"use strict";
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_ImageCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/ImagePlaceholder.tsx


const ImagePlaceholder = ({ title, subtitle, aspectRatio = "16/9", className = "" })=>{
    const aspectRatioClass = {
        "square": "aspect-square",
        "16/9": "aspect-[16/9]",
        "4/3": "aspect-[4/3]"
    }[aspectRatio];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `placeholder-gradient rounded-lg relative overflow-hidden ${aspectRatioClass} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 hero-pattern opacity-20"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-xl font-semibold mb-2 text-white",
                        children: title
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-gray-300",
                        children: subtitle
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ImagePlaceholder = (ImagePlaceholder);

// EXTERNAL MODULE: ./src/utils/paths.ts
var paths = __webpack_require__(2703);
;// CONCATENATED MODULE: ./src/components/ImageCard.tsx





const ImageCard = ({ imagePath, title, description, onClick, priority = false })=>{
    const isPlaceholder = !imagePath || imagePath === "";
    const fullImagePath = isPlaceholder ? "" : (0,paths/* getImagePath */.al)(imagePath);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "image-card cursor-pointer",
        onClick: onClick,
        children: isPlaceholder ? /*#__PURE__*/ jsx_runtime_.jsx(components_ImagePlaceholder, {
            title: title,
            subtitle: description,
            aspectRatio: "16/9",
            className: "w-full h-full"
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative w-full aspect-[16/9]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: fullImagePath,
                    alt: title,
                    fill: true,
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                    priority: priority,
                    quality: 85,
                    className: "object-cover rounded-lg transition-transform duration-300 hover:scale-105",
                    loading: priority ? "eager" : "lazy"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end rounded-lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-xl font-semibold mb-2 text-white",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-200",
                            children: description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_ImageCard = (ImageCard);


/***/ })

};
;