function Application(params) {
    this.projectID = "";
	this.applicationID = "";
	this.applicationName = "";
	this.applicationNumber = "";
	this.applicationArea = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Application.prototype.toForm = function (project_id) {
    var data = "&ProjectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            var saveKey = key.substr(0, 1).toUpperCase() + key.substr(1);
            data += ("&" + saveKey + "=" + element);
        }
    }
    return data;
}

Application.prototype.domMap = [
    {
        key: "projectID",
        name: "项目ID",
        type: "text",
        hidden: true
    },{
        key: "applicationID",
        name: "设施ID",
        type: "text",
        hidden: true
    },{
        key: "applicationName",
        name: "设施名称",
        type: "text",
        hidden: false
    },{
        key: "applicationNumber",
        name: "设施数量",
        type: "number",
        hidden: false
    },{
        key: "applicationArea",
        name: "设施面积",
        type: "text",
        hidden: false
    }
]