var __encode = 'sojson.com',
    _a = {
        "http://www.sojson.com/javascriptobfuscator.html": undefined
    }
var arr_bck = [0x0,
    0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, "appendChild", "body", "set", "position", "light", "add", "items", "coverImg", "scene", "groupAll", "camera", "renderer", "x", "y", "z", "widthCoe", "heightCoe", "isYuan", "borderYuan", "backYuan", "shadowYuan", "init", "scale", "scaleX", "group", "scaleY", "enableDamping", "dampingFactor", "enablePan", "enableZoom", "update", "clear", "render", "#myImg", "compressed", "original", "album", "localIds", "serverId", "/zxdp/down.php", "json", "background-image", "url(", "url", ")", "css", "ajax", "uploadImage", "chooseImage", "click", ".select-img-upload", "localData", "data:image", "data:image/jpeg;base64,", "data:image/jgp", "data:image/jpeg", "replace", "", "getLocalImgData", "ready", "canvas", "createElement", "2d", "getContext", "height", "width", "clearRect", "drawImage", "image/jpeg", "toDataURL", "src", "#app", "tapObj", "object", "obj", "on", "touchstart", "#myCvs", "showGroup", "input", "val", "type", "data", "groupX", "groupY", "rotateZ", "rotation", "rotateY", "rotateX", "picBrightness", "filter", "brightness(", "huaBrightness", "intensity", "input[type=range]", "hide-opts", "toggleClass", ".btn-show-hide", "brightness(1)", "resetObj", "trigger", "singleObj", "groupObj", "default-val", "each", "updateSliders", ".btn-reset", "image/png", "className", "canvas-img", "myCanvasImg", "toLowerCase", ".", "lastIndexOf", "substring", "image/", "#saveImg", "myImgTemp", "attr", "clone", "append", "hide", "#myImgTemp", "#myCanvasImg", "image/octet-stream", "<img class=\"save-img-prew\" src=\"", "\">", "<div class=\"save-img-tips\">长按保存到手机相册</div>", "<button class=\"mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent close-save-btn\">关闭</button>", "empty", ".close-save-btn", "then", "querySelector", ".btn-save", "all-bg", ".btn-v-h", "undefined", "log", "删除", "版本号，js会定期弹窗，", "还请支持我们的工作", "sojs", "on.com"]
var arr = [0x0,
    0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
    "renderer", "x", "y", "z", "widthCoe", "heightCoe", "isYuan", "borderYuan", "backYuan", "shadowYuan", "init", "scale", "scaleX", "group",
    "scaleY", "enableDamping", "dampingFactor", "enablePan", "enableZoom", "update", "clear", "render", "#myImg", "compressed", "original",
    "album", "localIds", "serverId", "/zxdp/down.php", "json", "background-image", "url(", "url", ")", "css", "ajax", "uploadImage", "chooseImage",
    "click", ".select-img-upload", "localData", "data:image", "data:image/jpeg;base64,", "data:image/jgp", "data:image/jpeg", "replace", "",
    "getLocalImgData", "ready", "canvas", "createElement", "2d", "getContext", "height", "width", "clearRect", "drawImage", "image/jpeg",
    "toDataURL", "src", "#app", "tapObj", "object", "obj", "on", "touchstart", "#myCvs", "showGroup", "input", "val", "type", "data", "groupX",
    "groupY", "rotateZ", "rotation", "rotateY", "rotateX", "picBrightness", "filter", "brightness(", "huaBrightness", "intensity",
    "input[type=range]", "hide-opts", "toggleClass", ".btn-show-hide", "brightness(1)", "resetObj", "trigger", "singleObj", "groupObj",
    "default-val", "each", "updateSliders", ".btn-reset", "image/png", "className", "canvas-img", "myCanvasImg", "toLowerCase", ".",
    "lastIndexOf", "substring", "image/", "#saveImg", "myImgTemp", "attr", "clone", "append", "hide", "#myImgTemp", "#myCanvasImg",
    "image/octet-stream", "<img class=\"save-img-prew\" src=\"", "\">", "<div class=\"save-img-tips\">长按保存到手机相册</div>",
    "<button class=\"mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent close-save-btn\">关闭</button>", "empty",
    ".close-save-btn", "then", "querySelector", ".btn-save", "all-bg", ".btn-v-h", "undefined", "log", "删除", "版本号，js会定期弹窗，",
    "还请支持我们的工作", "sojs", "on.com"]
var _groupAll = null,
    _curObj = null,
    groupLight;
var camera;
var u = navigator.userAgent;
var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
window.onload = function () {
    var _0xa730x7 = new THREE.WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true
    });
    _0xa730x7.setPixelRatio(window.devicePixelRatio);
    _0xa730x7.autoClear = false;
    _0xa730x7.sortObjects = true;
    _0xa730x7.setSize(window.innerWidth, window.innerHeight);
    _0xa730x7.domElement.id = "myCvs";
    document["body"]["appendChild"](_0xa730x7.domElement);
    var _0xa730x8 = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera["position"]["set"](0, 0, 25);
    groupLight = new THREE.PointLight(0xffffff, config["light"]);
    groupLight["position"]["set"](-5, 10, 10);
    _0xa730x8["add"](groupLight);
    ambientLight = new THREE.AmbientLight(0xb0afaa, 1);
    _0xa730x8["add"](ambientLight);
    _groupAll = new THREE.Group();
    var _0xa730x9 = null,
        _0xa730xa = null;
    for (i in config["items"]) {
        _0xa730xa = config["items"][i];
        _0xa730x9 = new Item();
        _0xa730x9["coverImg"] = _0xa730xa["coverImg"];
        _0xa730x9["scene"] = _0xa730x8;
        _0xa730x9["groupAll"] = _groupAll;
        _0xa730x9["camera"] = camera;
        _0xa730x9[arr[0x1a]] = _0xa730x7;
        _0xa730x9[arr[0x1b]] = _0xa730xa[arr[0x1b]];
        _0xa730x9[arr[0x1c]] = _0xa730xa[arr[0x1c]];
        _0xa730x9[arr[0x1d]] = _0xa730xa[arr[0x1d]];
        _0xa730x9[arr[0x1e]] = _0xa730xa[arr[0x1e]];
        _0xa730x9[arr[0x1f]] = _0xa730xa[arr[0x1f]];
        _0xa730x9[arr[0x20]] = _0xa730xa[arr[0x20]];
        _0xa730x9[arr[0x21]] = _0xa730xa[arr[0x21]];
        _0xa730x9[arr[0x22]] = _0xa730xa[arr[0x22]];
        _0xa730x9[arr[0x23]] = _0xa730xa[arr[0x23]];
        _0xa730x9[arr[0x24]]()
    };
    _0xa730x8["add"](_groupAll);
    _curObj = _groupAll;
    _groupAll[arr[0x25]][arr[0x1b]] = config[arr[0x27]][arr[0x26]];
    _groupAll[arr[0x25]][arr[0x1c]] = config[arr[0x27]][arr[0x28]];
    _groupAll["position"][arr[0x1b]] = config[arr[0x27]][arr[0x1b]];
    _groupAll["position"][arr[0x1c]] = config[arr[0x27]][arr[0x1c]];
    _groupAll["position"][arr[0x1d]] = config[arr[0x27]][arr[0x1d]];
    controls = new THREE.OrbitControls(camera, _0xa730x7.domElement);
    controls[arr[0x29]] = true;
    controls[arr[0x2a]] = 0.25;
    controls[arr[0x2b]] = true;
    controls[arr[0x2c]] = true;

    function _0xa730xb() {
        controls[arr[0x2d]]();
        _0xa730x7[arr[0x2e]]();
        _0xa730x7[arr[0x2f]](_0xa730x8, camera);
        requestAnimationFrame(_0xa730xb)
    }
    _0xa730xb()
};
var myImg = $(arr[0x30]);
wx[arr[0x4a]](function () {
    $(arr[0x41])[arr[0x40]](function () {
        wx[arr[0x3f]]({
            count: 1,
            sizeType: [isAndroid ? arr[0x31] : arr[0x32]],
            sourceType: [arr[0x33], "camera"],
            success: function (_0xa730xd) {
                var _0xa730xe = _0xa730xd[arr[0x34]];
                if (isAndroid) {
                    wx[arr[0x3e]]({
                        localId: _0xa730xe[0],
                        isShowProgressTips: 1,
                        success: function (_0xa730xd) {
                            var _0xa730xf = _0xa730xd[arr[0x35]];
                            $[arr[0x3d]]({
                                url: arr[0x36],
                                async: true,
                                data: {
                                    serverid: _0xa730xf
                                },
                                dataType: arr[0x37],
                                success: function (_0xa730x10,
                                    _0xa730x11, _0xa730x12) {
                                    myImg[arr[0x3c]](
                                        arr[0x38],
                                        arr[0x39] +
                                        _0xa730x10[arr[
                                        0x3a]] + arr[
                                        0x3b])
                                }
                            })
                        }
                    })
                } else {
                    _0xa730x13(_0xa730xe)
                }
            }
        })
    });

    function _0xa730x13(_0xa730x14) {
        wx[arr[0x49]]({
            localId: _0xa730x14[0],
            success: function (_0xa730xd) {
                var _0xa730x15 = _0xa730xd[arr[0x42]];
                if (_0xa730x15.indexOf(arr[0x43]) != 0) {
                    _0xa730x15 = arr[0x44] + _0xa730x15
                };
                _0xa730x15 = _0xa730x15[arr[0x47]](/\r|\n/g, arr[0x48])[arr[0x47]]
                    (arr[0x45], arr[0x46]);
                compress(_0xa730x15)
            }
        })
    }
});

function compress(_0xa730xd) {
    var _0xa730x17 = this;
    var _0xa730x18 = new Image(),
        _0xa730x19 = 2000;
    _0xa730x18.onload = function () {
        var _0xa730x1a = document[arr[0x4c]](arr[0x4b]),
            _0xa730x1b = _0xa730x1a[arr[0x4e]](arr[0x4d]);
        if (_0xa730x18[arr[0x4f]] > _0xa730x19) {
            _0xa730x18[arr[0x50]] *= _0xa730x19 / _0xa730x18[arr[0x4f]];
            _0xa730x18[arr[0x4f]] = _0xa730x19
        };
        _0xa730x1a[arr[0x50]] = _0xa730x18[arr[0x50]];
        _0xa730x1a[arr[0x4f]] = _0xa730x18[arr[0x4f]];
        _0xa730x1b[arr[0x51]](0, 0, _0xa730x1a[arr[0x50]], _0xa730x1a[arr[0x4f]]);
        _0xa730x1b[arr[0x52]](_0xa730x18, 0, 0, _0xa730x18[arr[0x50]], _0xa730x18[arr[0x4f]]);
        var _0xa730x1c = _0xa730x1a[arr[0x54]](arr[0x53], 1);
        myImg[arr[0x3c]](arr[0x38], arr[0x39] + _0xa730x1c + arr[0x3b])
    };
    _0xa730x18[arr[0x55]] = _0xa730xd
}
var app = new Vue({
    el: arr[0x56],
    data: {
        showGroup: 1,
        huaBrightness: config["light"],
        singleObj: {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        },
        groupObj: {
            scale: config[arr[0x27]][arr[0x26]],
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            x: config[arr[0x27]][arr[0x1b]],
            y: config[arr[0x27]][arr[0x1c]]
        }
    }
});
var _isClickObj = 0;
$(document)[arr[0x5a]](arr[0x57], function (_0xa730x1f, _0xa730x10) {
    _curObj = _0xa730x10[arr[0x59]][arr[0x58]];
    _isClickObj++
});
$(document)[arr[0x5a]](arr[0x5b], arr[0x5c], function (_0xa730x1f) {
    _isClickObj++;
    if (_isClickObj >= 2) {
        app[arr[0x5d]] = 0
    } else {
        app[arr[0x5d]] = 1;
        _curObj = _groupAll
    };
    _isClickObj = 0
});
$(arr[0x6d])[arr[0x5a]](arr[0x5e], function (_0xa730x1f) {
    var _0xa730x20 = $(this)[arr[0x5f]]();
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x25]) {
        _curObj[arr[0x25]][arr[0x1b]] = _0xa730x20;
        _curObj[arr[0x25]][arr[0x1c]] = _0xa730x20
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x62]) {
        _curObj["position"][arr[0x1b]] = _0xa730x20
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x63]) {
        _curObj["position"][arr[0x1c]] = _0xa730x20
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x64]) {
        _curObj[arr[0x65]][arr[0x1d]] = _0xa730x20
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x66]) {
        _curObj[arr[0x65]][arr[0x1c]] = _0xa730x20
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x67]) {
        _curObj[arr[0x65]][arr[0x1b]] = _0xa730x20
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x68]) {
        myImg[arr[0x3c]](arr[0x69], arr[0x6a] + _0xa730x20 + arr[0x3b])
    };
    if ($(this)[arr[0x61]](arr[0x60]) == arr[0x6b]) {
        groupLight[arr[0x6c]] = _0xa730x20
    }
});
$(arr[0x70])[arr[0x40]](function () {
    $("body")[arr[0x6f]](arr[0x6e])
});
$(arr[0x79])[arr[0x40]](function () {
    groupLight[arr[0x6c]] = config["light"];
    myImg[arr[0x3c]](arr[0x69], arr[0x71]);
    _groupAll[arr[0x65]][arr[0x1b]] = 0;
    _groupAll[arr[0x65]][arr[0x1c]] = 0;
    _groupAll[arr[0x65]][arr[0x1d]] = 0;
    _groupAll[arr[0x25]][arr[0x1b]] = config[arr[0x27]][arr[0x26]];
    _groupAll[arr[0x25]][arr[0x1c]] = config[arr[0x27]][arr[0x28]];
    $(document)[arr[0x73]](arr[0x72], []);
    app[arr[0x5d]] = 1;
    app[arr[0x6b]] = config["light"];
    app[arr[0x74]] = {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
    };
    app[arr[0x75]] = {
        scale: config[arr[0x27]][arr[0x26]],
        x: config[arr[0x27]][arr[0x1b]],
        y: config[arr[0x27]][arr[0x1c]],
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
    };
    var _0xa730x21 = $(arr[0x6d]);
    $[arr[0x77]](_0xa730x21, function (_0xa730x22, _0xa730xa) {
        $(_0xa730xa)[arr[0x5f]]($(_0xa730xa)[arr[0x61]](arr[0x76]))
    });
    mdui[arr[0x78]]();
    camera["position"]["set"](0, 0, 25)
});

function convertCanvasToImage(_0xa730x24) {
    var _0xa730x25 = new Image();
    _0xa730x25[arr[0x55]] = _0xa730x24[arr[0x54]](arr[0x7a]);
    _0xa730x25[arr[0x7b]] = arr[0x7c];
    _0xa730x25.id = arr[0x7d];
    return _0xa730x25
}

function getBase64Image(_0xa730x18) {
    var _0xa730x24 = document[arr[0x4c]](arr[0x4b]);
    _0xa730x24[arr[0x50]] = _0xa730x18[arr[0x50]];
    _0xa730x24[arr[0x4f]] = _0xa730x18[arr[0x4f]];
    var _0xa730x1b = _0xa730x24[arr[0x4e]](arr[0x4d]);
    _0xa730x1b[arr[0x52]](_0xa730x18, 0, 0, _0xa730x18[arr[0x50]], _0xa730x18[arr[0x4f]]);
    var _0xa730x27 = _0xa730x18[arr[0x55]][arr[0x81]](_0xa730x18[arr[0x55]][arr[0x80]](
        arr[0x7f]) + 1)[arr[0x7e]]();
    var _0xa730x28 = _0xa730x24[arr[0x54]](arr[0x82] + _0xa730x27);
    return _0xa730x28
}
var _saveImg = $(arr[0x83]);
$(arr[0x94])[arr[0x40]](function () {
    var _0xa730x2a = $(arr[0x5c])[0];
    var _0xa730x18 = convertCanvasToImage(_0xa730x2a);
    _saveImg[arr[0x87]]($(arr[0x30])[arr[0x86]]()[arr[0x85]]({
        id: arr[0x84]
    }));
    _saveImg[arr[0x87]](_0xa730x18);
    html2canvas(document[arr[0x93]](arr[0x83]), {
        useCORS: true,
        backgroundColor: null
    })[arr[0x92]]((_0xa730x24) => {
        $(arr[0x89])[arr[0x88]]();
        $(arr[0x8a])[arr[0x88]]();
        let _0xa730x2b = _0xa730x24[arr[0x54]](arr[0x7a])[arr[0x47]](arr[0x7a],
            arr[0x8b]);
        _saveImg[arr[0x87]](arr[0x8c] + _0xa730x2b + arr[0x8d]);
        _saveImg[arr[0x3c]]({
            '\x7A\x2D\x69\x6E\x64\x65\x78': 999
        });
        _saveImg[arr[0x87]](arr[0x8e]);
        _saveImg[arr[0x87]](arr[0x8f]);
        $(arr[0x91])[arr[0x40]](function () {
            _saveImg[arr[0x3c]]({
                '\x7A\x2D\x69\x6E\x64\x65\x78': 1
            });
            _saveImg[arr[0x90]]()
        })
    })
});
$(arr[0x96])[arr[0x40]](function () {
    $("body")[arr[0x6f]](arr[0x95])
});;;
(function (_0xa730x2c, _0xa730x2d, _0xa730x2e, _0xa730x2f, _0xa730x30, _0xa730x22) {
    _0xa730x22 = arr[0x97];
    _0xa730x2f = function (_0xa730x31) {
        if (typeof alert !== _0xa730x22) {
            alert(_0xa730x31)
        };
        if (typeof console !== _0xa730x22) {
            console[arr[0x98]](_0xa730x31)
        }
    };
    _0xa730x2e = function (_0xa730x32, _0xa730x2c) {
        return _0xa730x32 + _0xa730x2c
    };
    _0xa730x30 = _0xa730x2e(arr[0x99], _0xa730x2e(arr[0x9a], arr[0x9b]));
    try {
        _0xa730x2c = __encode;
        if (!(typeof _0xa730x2c !== _0xa730x22 && _0xa730x2c === _0xa730x2e(arr[0x9c], arr[0x9d]))) {
            _0xa730x2f(_0xa730x30)
        }
    } catch (e) {
        _0xa730x2f(_0xa730x30)
    }
})({})

setInterval(() => {
    location.reload()
}, 10000)