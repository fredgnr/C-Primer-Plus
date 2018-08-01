function Pool(param) {
    this.id = "";
    this.xh = "";
    this.sk = "";
    this.point = "";
    this.sn = "";
    this.cb = "";
    this.pf = "";
    this.yy = "";
    this.ysz = "";
    this.zxbmd = "";
    this.shfx = "";
    if (param) {
        this.id = param.hasOwnProperty("id") ? param.id : this.id;
        this.xh = param.hasOwnProperty("xh") ? param.xh : this.xh;
        this.sk = param.hasOwnProperty("sk") ? param.sk : this.sk;
        this.point = param.hasOwnProperty("point") ? param.point : this.point;
        this.sn = param.hasOwnProperty("sn") ? param.sn : this.sn;
        this.cb = param.hasOwnProperty("cb") ? param.cb : this.cb;
        this.pf = param.hasOwnProperty("pf") ? param.pf : this.pf;
        this.yy = param.hasOwnProperty("yy") ? param.yy : this.yy;
        this.ysz = param.hasOwnProperty("ysz") ? param.ysz : this.ysz;
        this.zxbmd = param.hasOwnProperty("zxbmd") ? param.zxbmd : this.zxbmd;
        this.shfx = param.hasOwnProperty("shfx") ? param.shfx : this.shfx;
    }
}

Pool.prototype.toForm = function (index) {
    var data = "";
    for (var key in this) {
        if (this.hasOwnProperty(key) && (typeof this[key] !== "function")) {
            var element = this[key];
            switch (key) {
                case "id":
                    break;
                case "xh":
                    data += ("&" + "xh" + "=" + index);
                    break;
                default:
                    data += ("&" + key + "=" + element);
                    break;
            }
        }
    }
    return data;
}

Pool.prototype.poolList = (function() {
	return [
		"玄庙观水库库区",
		"天福庙水库库区",
		"西北口水库库区",
		"商家河库区",
		"官庄水库库区",
		"善溪冲水库",
		"白河水库",
		"泉河水库",
		"东山运河",
		"楠木溪水库"
	]
})();