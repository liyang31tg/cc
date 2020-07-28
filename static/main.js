_a = {
    "http://www.sojson.com/javascriptobfuscator.html": undefined
}
var arr_bck = [0x0,
    0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, "appendChild", "body", "set",
    "position", "light", "add", "items", "coverImg", "scene", "groupAll", "camera", "renderer", "x", "y",
    "z", "widthCoe", "heightCoe", "isYuan", "borderYuan", "backYuan", "shadowYuan", "init", "scale",
    "scaleX", "group", "scaleY", "enableDamping", "dampingFactor", "enablePan", "enableZoom", "update",
    "clear", "render", "#myImg", "compressed", "original", "album", "localIds", "serverId", "/zxdp/down.php",
    "json", "background-image", "url(", "url", ")", "css", "ajax", "uploadImage", "chooseImage",
    "click", ".select-img-upload", "localData", "data:image",
    "data:image/jpeg;base64,", "data:image/jgp", "data:image/jpeg", "replace", "",
    "getLocalImgData", "ready", "canvas", "createElement", "2d", "getContext", "height", "width", "clearRect", "drawImage", "image/jpeg", "toDataURL", "src", "#app", "tapObj", "object", "obj", "on", "touchstart", "#myCvs", "showGroup", "input", "val", "type", "data", "groupX", "groupY", "rotateZ", "rotation", "rotateY", "rotateX", "picBrightness", "filter", "brightness(", "huaBrightness", "intensity", "input[type=range]", "hide-opts", "toggleClass", ".btn-show-hide", "brightness(1)", "resetObj", "trigger", "singleObj", "groupObj", "default-val", "each", "updateSliders", ".btn-reset", "image/png", "className", "canvas-img", "myCanvasImg", "toLowerCase", ".", "lastIndexOf", "substring", "image/", "#saveImg", "myImgTemp", "attr", "clone", "append", "hide", "#myImgTemp", "#myCanvasImg", "image/octet-stream", "<img class=\"save-img-prew\" src=\"", "\">", "<div class=\"save-img-tips\">长按保存到手机相册</div>", "<button class=\"mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent close-save-btn\">关闭</button>", "empty", ".close-save-btn", "then", "querySelector", ".btn-save", "all-bg", ".btn-v-h", "undefined", "log", "删除", "版本号，js会定期弹窗，", "还请支持我们的工作", "sojs", "on.com"]

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
        _0xa730x9["renderer"] = _0xa730x7;
        _0xa730x9["x"] = _0xa730xa["x"];
        _0xa730x9["y"] = _0xa730xa["y"];
        _0xa730x9["x"] = _0xa730xa["x"];
        _0xa730x9["widthCoe"] = _0xa730xa["widthCoe"];
        _0xa730x9["heightCoe"] = _0xa730xa["heightCoe"];
        _0xa730x9["isYuan"] = _0xa730xa["isYuan"];
        _0xa730x9["borderYuan"] = _0xa730xa["borderYuan"];
        _0xa730x9["backYuan"] = _0xa730xa["backYuan"];
        _0xa730x9["shadowYuan"] = _0xa730xa["shadowYuan"];
        _0xa730x9.init()
    };
    _0xa730x8["add"](_groupAll);
    _curObj = _groupAll;
    _groupAll["scale"]["x"] = config["group"]["scaleX"];
    _groupAll["scale"]["y"] = config["group"]["scaleY"];
    _groupAll["position"]["x"] = config["group"]["x"];
    _groupAll["position"]["y"] = config["group"]["y"];
    _groupAll["position"]["x"] = config["group"]["x"];
    controls = new THREE.OrbitControls(camera, _0xa730x7.domElement);
    controls["enableDamping"] = true;
    controls["dampingFactor"] = 0.25;
    controls["enablePan"] = true;
    controls["enableZoom"] = true;

    function _0xa730xb() {
        controls["update"]();
        _0xa730x7["clear"]();
        _0xa730x7["render"](_0xa730x8, camera);
        requestAnimationFrame(_0xa730xb)
    }
    _0xa730xb()
};
var myImg = $("#myImg");
wx["ready"](function () {
    $(".select-img-upload").click(function () {
        wx["chooseImage"]({
            count: 1,
            sizeType: [isAndroid ? "compressed" : "original"],
            sourceType: ["album", "camera"],
            success: function (_0xa730xd) {
                var _0xa730xe = _0xa730xd["localIds"];
                if (isAndroid) {
                    wx["uploadImage"]({
                        localId: _0xa730xe[0],
                        isShowProgressTips: 1,
                        success: function (_0xa730xd) {
                            var _0xa730xf = _0xa730xd["serverId"];
                            $["ajax"]({
                                url: "/zxdp/down.php",
                                async: true,
                                data: {
                                    serverid: _0xa730xf
                                },
                                dataType: "json",
                                success: function (_0xa730x10,
                                    _0xa730x11, _0xa730x12) {
                                    myImg["css"](
                                        "background-image",
                                        "url(" +
                                        _0xa730x10["url"] + ")")
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
        wx["getLocalImgData"]({
            localId: _0xa730x14[0],
            success: function (_0xa730xd) {
                var _0xa730x15 = _0xa730xd["localData"];
                if (_0xa730x15.indexOf("data:image") != 0) {
                    _0xa730x15 = "data:image/jpeg;base64," + _0xa730x15
                };
                _0xa730x15 = _0xa730x15["replace"](/\r|\n/g, "")["replace"]
                    ("data:image/jgp", "data:image/jpeg");
                compress(_0xa730x15)
            }
        })
    }
});

function compress(_0xa730xd) {
    var _0xa730x18 = new Image(),
        _0xa730x19 = 2000;
    _0xa730x18.onload = function () {
        var _0xa730x1a = document.createElement("canvas"),
            _0xa730x1b = _0xa730x1a["getContext"]("2d");
        if (_0xa730x18["height"] > _0xa730x19) {
            _0xa730x18["width"] *= _0xa730x19 / _0xa730x18["height"];
            _0xa730x18["height"] = _0xa730x19
        };
        _0xa730x1a["width"] = _0xa730x18["width"];
        _0xa730x1a["height"] = _0xa730x18["height"];
        _0xa730x1b["clearRect"](0, 0, _0xa730x1a["width"], _0xa730x1a["height"]);
        _0xa730x1b["drawImage"](_0xa730x18, 0, 0, _0xa730x18["width"], _0xa730x18["height"]);
        var _0xa730x1c = _0xa730x1a["toDataURL"]("image/jpeg", 1);
        myImg["css"]("background-image", "url(" + _0xa730x1c + ")")
    };
    _0xa730x18["src"] = _0xa730xd
}
var app = new Vue({
    el: "#app",
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
            scale: config["group"]["scaleX"],
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            x: config["group"]["x"],
            y: config["group"]["y"]
        }
    }
});
var _isClickObj = 0;
$(document)["on"]("tapObj", function (_0xa730x1f, _0xa730x10) {
    _curObj = _0xa730x10["obj"]["object"];
    _isClickObj++
});
$(document)["on"]("touchstart", "#myCvs", function (_0xa730x1f) {
    _isClickObj++;
    if (_isClickObj >= 2) {
        app["showGroup"] = 0
    } else {
        app["showGroup"] = 1;
        _curObj = _groupAll
    };
    _isClickObj = 0
});
$("input[type=range]")["on"]("input", function (_0xa730x1f) {
    var _0xa730x20 = $(this)["val"]();
    if ($(this)["data"]("type") == "scale") {
        _curObj["scale"]["x"] = _0xa730x20;
        _curObj["scale"]["y"] = _0xa730x20
    };
    if ($(this)["data"]("type") == "groupX") {
        _curObj["position"]["x"] = _0xa730x20
    };
    if ($(this)["data"]("type") == "groupY") {
        _curObj["position"]["y"] = _0xa730x20
    };
    if ($(this)["data"]("type") == "rotateZ") {
        _curObj["rotation"]["x"] = _0xa730x20
    };
    if ($(this)["data"]("type") == "rotateY") {
        _curObj["rotation"]["y"] = _0xa730x20
    };
    if ($(this)["data"]("type") == "rotateX") {
        _curObj["rotation"]["x"] = _0xa730x20
    };
    if ($(this)["data"]("type") == "picBrightness") {
        myImg["css"]("filter", "brightness(" + _0xa730x20 + ")")
    };
    if ($(this)["data"]("type") == "huaBrightness") {
        groupLight["intensity"] = _0xa730x20
    }
});
$(".btn-show-hide")["click"](function () {
    $("body")["toggleClass"]("hide-opts")
});
$(".btn-reset")["click"](function () {
    groupLight["intensity"] = config["light"];
    myImg["css"]("filter", "brightness(1)");
    _groupAll["rotation"]["x"] = 0;
    _groupAll["rotation"]["y"] = 0;
    _groupAll["rotation"]["x"] = 0;
    _groupAll["scale"]["x"] = config["group"]["scaleX"];
    _groupAll["scale"]["y"] = config["group"]["scaleY"];
    $(document)["trigger"]("resetObj", []);
    app["showGroup"] = 1;
    app["huaBrightness"] = config["light"];
    app["singleObj"] = {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
    };
    app["groupObj"] = {
        scale: config["group"]["scaleX"],
        x: config["group"]["x"],
        y: config["group"]["y"],
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
    };
    var _0xa730x21 = $("input[type=range]");
    $["each"](_0xa730x21, function (_0xa730x22, _0xa730xa) {
        $(_0xa730xa)["val"]($(_0xa730xa)["data"]("default-val"))
    });
    mdui["updateSliders"]();
    camera["position"]["set"](0, 0, 25)
});

function convertCanvasToImage(_0xa730x24) {
    var _0xa730x25 = new Image();
    _0xa730x25["src"] = _0xa730x24["toDataURL"]("image/png");
    _0xa730x25["className"] = "canvas-img";
    _0xa730x25.id = "myCanvasImg";
    return _0xa730x25
}

function getBase64Image(_0xa730x18) {
    var _0xa730x24 = document["createElement"]("canvas");
    _0xa730x24["width"] = _0xa730x18["width"];
    _0xa730x24["height"] = _0xa730x18["height"];
    var _0xa730x1b = _0xa730x24["getContext"]("2d");
    _0xa730x1b["drawImage"](_0xa730x18, 0, 0, _0xa730x18["width"], _0xa730x18["height"]);
    var _0xa730x27 = _0xa730x18["src"]["substring"](_0xa730x18["src"]["lastIndexOf"](
        ".") + 1)["toLowerCase"]();
    var _0xa730x28 = _0xa730x24["toDataURL"]("image/" + _0xa730x27);
    return _0xa730x28
}
var _saveImg = $("#saveImg");
$(".btn-save")["click"](function () {
    var _0xa730x2a = $("#myCvs")[0];
    var _0xa730x18 = convertCanvasToImage(_0xa730x2a);
    _saveImg["append"]($("#myImg")["clone"]()["attr"]({
        id: "myImgTemp"
    }));
    _saveImg["append"](_0xa730x18);
    html2canvas(document["querySelector"]("#saveImg"), {
        useCORS: true,
        backgroundColor: null
    })["then"]((_0xa730x24) => {
        $("#myImgTemp")["hide"]();
        $("#myCanvasImg")["hide"]();
        let _0xa730x2b = _0xa730x24["toDataURL"]("image/png")["replace"]("image/png",
            "image/octet-stream");
        _saveImg["append"]("<img class=\"save-img-prew\" src=\"" + _0xa730x2b + "\">");
        _saveImg["css"]({
            'z-index': 999
        });
        _saveImg["append"]("<div class=\"save-img-tips\">长按保存到手机相册</div>");
        _saveImg["append"]("<button class=\"mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent close-save-btn\">关闭</button>");
        $(".close-save-btn")["click"](function () {
            _saveImg["css"]({
                'z-index': 1
            });
            _saveImg["empty"]()
        })
    })
});
$(".btn-v-h")["click"](function () {
    $("body")["toggleClass"]("all-bg")
});;;


// setInterval(() => {
//     location.reload()
// }, 10000)