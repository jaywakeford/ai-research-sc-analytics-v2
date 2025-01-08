"use strict";
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 2703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PA: () => (/* binding */ getPdfPath),
/* harmony export */   Yo: () => (/* binding */ getVideoPath),
/* harmony export */   al: () => (/* binding */ getImagePath),
/* harmony export */   bv: () => (/* binding */ getBasePath),
/* harmony export */   lq: () => (/* binding */ getAudioPath)
/* harmony export */ });
/* unused harmony export getMediaPath */
const getBasePath = ()=>{
    if (false) {}
    if (true) {
        return  false || "";
    }
    const baseElement = document.querySelector("base");
    return baseElement ? baseElement.getAttribute("href")?.replace(/\/$/, "") || "" :  false || "";
};
const getMediaPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/${cleanPath}`;
};
const getImagePath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/images/${cleanPath}`;
};
const getPdfPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/pdfs/${cleanPath}`;
};
const getAudioPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/audio/${cleanPath}`;
};
const getVideoPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/videos/${cleanPath}`;
};


/***/ })

};
;