function Indicator(param) {
	this.sz_id = "";
	this.xh = "";
	this.zs = "";
	this.value = "";
	this.stand = "";
	if (param) {
		this.sz_id = (param.hasOwnProperty("sz_id")) ? param.sz_id : this.sz_id;
		this.xh = (param.hasOwnProperty("xh")) ? param.xh : this.xh;
		this.zs = (param.hasOwnProperty("zs")) ? param.zs : this.zs;
		this.value = (param.hasOwnProperty("value")) ? param.value : this.value;
		this.stand = (param.hasOwnProperty("stand")) ? param.stand : this.stand;
	}
}

Indicator.prototype.toFormData = function() {
	return {
		xh: this.xh,
		zs: this.zs,
		value: this.value,
		stand: this.stand
	}
}

Indicator.prototype.toForm = function(index) {
	var data = ""
	for (key in this) {
		if (this.hasOwnProperty(key) && (typeof this[key] !== "function")) {
			switch (key) {
				case "sz_id":
					break;
				case "xh":
					data += ("&" + key + "=" + index);
					break;
				default:
					data += ("&" + key + "=" + this[key]);
					break;
			}
		}
	}
	return data;
}
