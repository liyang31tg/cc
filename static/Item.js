
var arr_bck = ["scene", "camera", "renderer", "groupAll", "coverImg", "",
    "x", "y", "z", "isYuan", "borderYuan", "backYuan", "shadowYuan", "widthCoe",
    "heightCoe_0xe", "init", "widthPencent", "heightPencent", "加载成功", "width", "image",
    "height", "log", "load", "spineTexture", "texture", "minFilter", "LinearFilter",
    "rotation", "add", "DoubleSide", "set", "position", "shadow", "backTexture", "border",
    "pagesTexture", "pagesTopBottomTexture", "push", "resetObj", "scale", "on", "domElement",
    "transformGroup", "dragstart", "enabled", "tapObj", "trigger", "addEventListener", "dragend",
    "undefined", "删除", "版本号，js会定期弹窗，", "还请支持我们的工作", "sojs", "on.com"]


var Item = function () {
    if (!(this instanceof Item)) {
        return
    };
    var Obj = {};
    Obj.scene = null;
    Obj.camera = null;
    Obj.renderer = null;
    Obj.groupAll = null;
    Obj.coverImg = "";
    Obj.x = 0;
    Obj.y = 2;
    Obj.z = 0;
    Obj.isYuan = 0;
    Obj.borderYuan = ""
    Obj.backYuan = "";
    Obj.shadowYuan = "";
    Obj.widthCoe = 3;
    Obj.heightCoe = 5;
    Obj.init = function () {
        Obj.widthPencent = Obj.widthCoe / 3;
        Obj.heightPencent = Obj.heightCoe / 5;
        var _0x2197x6 = new THREE.Group();
        var _0x2197x7 = new THREE.TextureLoader();
        var _0x2197x8 = _0x2197x7.load(Obj.coverImg, function (_0x2197x9) {
            console.log("加载成功", _0x2197x9["image"]["width"],
                _0x2197x9["image"]["height"])
        });
        if (Obj.isYuan == 1) {
            console["log"](config["texture"]["spineTexture"]);
            var _0x2197xa = _0x2197x7.load(Obj.shadowYuan);
            var _0x2197xb = _0x2197x7.load(config["texture"]["spineTexture"]);
            var _0x2197xc = _0x2197x7.load(Obj.backYuan);
            var _0x2197xd = _0x2197x7.load(Obj.borderYuan);
            var _0x2197xe = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197x8
            });
            var _0x2197xf = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197xb
            });
            var _0x2197x10 = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197xc
            });
            _0x2197x8["minFilter"] = _0x2197xb["minFilter"] = _0x2197xc["minFilter"] = THREE["LinearFilter"];
            var _0x2197x11 = new THREE.CylinderGeometry(Obj.widthCoe, Obj.widthCoe, 0.15,
                32);
            var _0x2197x12 = [_0x2197xf, _0x2197xe, _0x2197x10];
            var _0x2197x13 = new THREE.Mesh(_0x2197x11, _0x2197x12);
            _0x2197x13["rotation"]["x"] = 1.7;
            _0x2197x13["rotation"]["y"] = 1.58;
            _0x2197x13["rotation"]["z"] = -0.12;
            _0x2197x6.add(_0x2197x13);
            var _0x2197x14 = new THREE.MeshLambertMaterial({
                color: 0xFFFFFF,
                transparent: true,
                map: _0x2197xa,
                side: THREE["DoubleSide"]
            });
            var _0x2197x15 = new THREE.Mesh(new THREE.CircleGeometry(parseFloat(Obj.widthCoe) +
                parseFloat(Obj.widthCoe) / 3, 32), _0x2197x14);
            _0x2197x15.position.set(0, 0, -0.082);
            var _0x2197x16 = new THREE.MeshLambertMaterial({
                color: 0xFFFFFF,
                transparent: true,
                map: _0x2197xd
            });
            var _0x2197x17 = new THREE.Mesh(new THREE.CircleGeometry(Obj.widthCoe, 32), _0x2197x16);
            _0x2197x17.position.set(0, 0, 0.080);
            _0x2197x17.rotation.x = 0.01
        } else {
            var _0x2197xa = _0x2197x7.load(config["texture"]["shadow"]);
            var _0x2197xb = _0x2197x7.load(config["texture"]["spineTexture"]);
            var _0x2197xc = _0x2197x7.load(config["texture"]["backTexture"]);
            var _0x2197xd = _0x2197x7.load(config["texture"]["border"]);
            var _0x2197x18 = _0x2197x7.load(config["texture"]["pagesTexture"]);
            var _0x2197x19 = _0x2197x7.load(config["texture"]["pagesTopBottomTexture"]);
            var _0x2197xe = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197x8
            });
            var _0x2197xf = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197xb
            });
            var _0x2197x10 = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197xc
            });
            _0x2197x18["minFilter"] = _0x2197x19["minFilter"] = THREE["LinearFilter"];
            _0x2197x8["minFilter"] = _0x2197xb["minFilter"] = _0x2197xc["minFilter"] = THREE["LinearFilter"];
            var _0x2197x1a = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197x18
            });
            var _0x2197x1b = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                map: _0x2197x19
            });
            var _0x2197x12 = [_0x2197x1a, _0x2197xf, _0x2197x1b, _0x2197x1b, _0x2197xe, _0x2197x10];
            var _0x2197x1c = new THREE.Mesh(new THREE.BoxGeometry(Obj.widthCoe, Obj.heightCoe, 0.15, 32, 32, 32), _0x2197x12);
            _0x2197x1c.position.set(0, 0, 0);
            var _0x2197x14 = new THREE.MeshLambertMaterial({
                color: 0xFFFFFF,
                transparent: true,
                map: _0x2197xa,
                side: THREE["DoubleSide"]
            });
            var _0x2197x15 = new THREE.Mesh(new THREE.PlaneGeometry(4.01 * Obj.widthPencent, 6.75 *
                Obj.heightPencent, 1), _0x2197x14);
            _0x2197x15.position.set(0, 0, -0.082);
            var _0x2197x16 = new THREE.MeshLambertMaterial({
                color: 0xFFFFFF,
                transparent: true,
                map: _0x2197xd
            });
            var _0x2197x17 = new THREE.Mesh(new THREE.PlaneGeometry(3.02 * Obj.widthPencent, 5.05 *
                Obj.heightPencent, 1), _0x2197x16);
            _0x2197x17.position.set(0, 0, 0.080);
            _0x2197x6.add(_0x2197x1c)
        };
        _0x2197x6.add(_0x2197x15);
        _0x2197x6.add(_0x2197x17);
        Obj.groupAll.add(_0x2197x6);
        _0x2197x6.position.set(Obj.x, Obj.y, Obj.z);
        var _0x2197x1d = [];
        _0x2197x1d.push(_0x2197x6);
        $(document)["on"]("resetObj", function () {
            _0x2197x6.rotation.set(0, 0, 0);
            _0x2197x6.position.set(Obj.x, Obj.y, Obj.z);
            _0x2197x6.scale.x = 1;
            _0x2197x6.scale.y = 1
        });
        var _0x2197x1e = new THREE.DragControls(_0x2197x1d, Obj.camera, Obj.renderer["domElement"]);
        _0x2197x1e["transformGroup"] = true;
        _0x2197x1e.addEventListener("dragstart", function (_0x2197x1f) {
            controls["enabled"] = false;
            $(document)["trigger"]("tapObj", [{
                obj: _0x2197x1f
            }])
        }, false);
        _0x2197x1e.addEventListener("dragend", function (_0x2197x1f) {
            controls["enabled"] = true
        })
    }
    return Obj
};;;