function OtherBg(param) {
	this.sz_id = "szjc-" + new Date().toString("yyyyMMddHHmmss");
	this.type = "";
	this.dcom = "宜昌市黄柏河流域水资源保护综合执法支队";
	this.hcom = "";
	this.hcom_other = "";
	this.date = new Date().toString("yyyy-MM-dd");
	this.address = "";
	this.points = "";
	this.hz = "";
	this.wperson = "";
	this.cperson = "";
	this.wInsRecordZs = [];
	if(param) {
		this.sz_id = (param.hasOwnProperty('sz_id')) ? param.sz_id : this.sz_id
		this.type = (param.hasOwnProperty('type')) ? param.type : this.type
		this.dcom = (param.hasOwnProperty('dcom')) ? param.dcom : this.dcom
		this.hcom = (param.hasOwnProperty('hcom')) ? param.hcom : this.hcom
		this.date = (param.hasOwnProperty('date')) ? param.date : this.date
		this.address = (param.hasOwnProperty('address')) ? param.address : this.address
		this.points = (param.hasOwnProperty('points')) ? param.points : this.points
		this.hz = (param.hasOwnProperty('hz')) ? param.hz : this.hz
		this.wperson = (param.hasOwnProperty('wperson')) ? param.wperson : this.wperson
		this.cperson = (param.hasOwnProperty('cperson')) ? param.cperson : this.cperson
		if (param.hasOwnProperty("wInsRecordZs") && param.wInsRecordZs instanceof Array) {
			this.wInsRecordZs = param.wInsRecordZs.map(function(item) {
				return new Indicator(item)
			})
		}
	}
}

OtherBg.prototype.toFormData = function() {
	return {
		sz_id: this.sz_id,
		type: this.type,
		dcom: this.dcom,
		hcom: (this.hcom === "其他") ? this.hcom_other : this.hcom,
		date: this.date,
		address: this.address,
		points: this.points,
		hz: this.hz,
		wperson: this.wperson,
		cperson: this.cperson,
		xh: this.wInsRecordZs.map(function(item, index) {
			return (index + 1);
		}),
		zs: this.wInsRecordZs.map(function (item) {
			return item.zs;
		}),
		value: this.wInsRecordZs.map(function (item) {
			return item.value;
		}),
		stand: this.wInsRecordZs.map(function (item) {
			return item.stand;
		})
	}
}

OtherBg.prototype.toForm = function() {
	var data = ""
	for (key in this) {
		if (this.hasOwnProperty(key) && (typeof this[key] !== "function")) {
			switch (key) {
				case "wInsRecordZs":
					for (var i = 0; i < this.wInsRecordZs.length; i++) {
						data += (this.wInsRecordZs[i].toForm(i + 1))
					}
					break;
				case "hcom":
					if (this.hcom === "其他") {
						data += ("&" + key + "=" + this.hcom_other);
					} else {
						data += ("&" + key + "=" + this.hcom);
					}
					break;
				case "date":
				case "enddate":
				case "startdate":
					data += ("&" + key + "=" + Date.parse(this[key]).toString("yyyy年MM月dd日"));
					break;
				case "hcom_other":
					break;
				default:
					data += ("&" + key + "=" + this[key]);
					break;						
			}
		}
	}
	return data
}

OtherBg.prototype.clean = function() {
	this.sz_id = "szjc-" + new Date().toString("yyyyMMddHHmmss");
	this.type = "";
	this.dcom = "";
	this.hcom = "";
	this.date = new Date().toString("yyyy-MM-dd");
	this.address = "";
	this.points = "";
	this.hz = "";
	this.wperson = "";
	this.cperson = "";
	this.wInsRecordZs = [];
}

OtherBg.prototype.typeOptions = (function() {
	return [
		"监督检测",
		"应急监测",
		"其他检测"
	]
})();

OtherBg.prototype.hcomOptions = [];
