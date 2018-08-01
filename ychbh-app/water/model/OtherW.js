function OtherW(param) {
	this.tx_id = "scjxx-" + new Date().toString("yyyyMMddHHmmss");
	this.wperson = "";
	this.date = Date.today().toString("yyyy-MM-dd");
	this.yearm = "";
	this.year = Date.today().toString("yyyy");
	this.month = Date.today().toString("M");
	this.xun = "";
	this.riverZshus = [];
	if (param) {
		this.tx_id = param.hasOwnProperty("tx_id") ? param.tx_id : this.tx_id;
		this.wperson = param.hasOwnProperty("wperson") ? param.wperson : this.wperson;
		this.date = param.hasOwnProperty("date") ? param.date : this.date;
		this.yearm = param.hasOwnProperty("yearm") ? param.yearm : this.yearm;
		this.xun = param.hasOwnProperty("xun") ? param.xun : this.xun;
		if (param.hasOwnProperty("riverZshus") && param.riverZshus instanceof Array) {
			this.riverZshus = param.riverZshus.map(function (item) {
				return new River(item);
			})
		}
	}
}

OtherW.prototype.toForm = function() {
	var data = "";
    for (var key in this) {
        if (this.hasOwnProperty(key) && (typeof this[key] !== "function")) {
            var element = this[key];
            switch (key) {
                case "riverZshus":
                    for (var i = 0; i < this.riverZshus.length; i++) {
                        data += (this.riverZshus[i].toForm(i + 1))
                    }
                    break;
                case "yearm":
                    data += ("&" + "yearm" + "=" + this.year + "年" + this.month + "月");
                    break;
                case "year":
                    break;
                case "month":
                    break;
                case "date":
                    data += ("&" + key + "=" + Date.parse(this.date).toString("yyyy年MM月dd日"));
                    break;
                default:
                    data += ("&" + key + "=" + element);
                    break;
            }
        }
    }
    return data;
}


OtherW.prototype.xunList = (function() {
	return ["上旬", "中旬", "下旬"]
})();
