function River(param) {
	this.id = "";
	this.xh = "";
	this.sk = "";
	this.hl = "";
	this.point = "";
	this.lon = "";
	this.lat = "";
	this.sz = "";
	this.kmo = "";
	this.nhn = "";
	this.sp = "";
	this.xfw = "";
	if (param) {
		this.id = param.hasOwnProperty("id") ? param.id : this.id;
		this.xh = param.hasOwnProperty("xh") ? param.xh : this.xh;
		this.sk = param.hasOwnProperty("sk") ? param.sk : this.sk;
		this.hl = param.hasOwnProperty("hl") ? param.hl : this.hl;
		this.point = param.hasOwnProperty("point") ? param.point : this.point;
		this.lon = param.hasOwnProperty("lon") ? param.lon : this.lon;
		this.lat = param.hasOwnProperty("lat") ? param.lat : this.lat;
		this.sz = param.hasOwnProperty("sz") ? param.sz : this.sz;
		this.kmo = param.hasOwnProperty("kmo") ? param.kmo : this.kmo;
		this.nhn = param.hasOwnProperty("nhn") ? param.nhn : this.nhn;
		this.sp = param.hasOwnProperty("sp") ? param.sp : this.sp;
		this.xfw = param.hasOwnProperty("xfw") ? param.xfw : this.xfw;
	}
}

River.prototype.toForm = function (index) {
	var data = "&xh=" + index;
	for (var key in this) {
		if (this.hasOwnProperty(key) && (typeof this[key] !== "function")) {
			var element = this[key];
			switch (key) {
				case "id":
				case "xh":
					break;
				default:
					data += ("&" + key + "=" + element);
					break;
			}
		}
	}
	return data;
}

/**
 * 河流名称列表
 */
River.prototype.nameList = (function() {
	return [
		"管家河",
		"董家河",
		"西岔河",
		"黄马河",
		"栗林河",
		"东支干流",
		"玄庙观水库",
		"黑沟",
		"晒旗河",
		"东支干流",
		"天福庙水库",
		"神龙河",
		"干沟河",
		"盐池河",
		"栗林河",
		"杉木溪",
		"西河",
		"柳林沟",
		"西北口水库",
		"牌渡河",
		"水木溪",
		"风洞河",
		"官庄水库",
		"尚家河水库",
		"东山运河"
	]
})();

/**
 * 河流指标列表
 */
River.prototype.indicateList = (function() {
	return ["I","II","III","IV","V"]
})();

/**
 * 湖泊列表
 */
River.prototype.poolList = (function() {
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
