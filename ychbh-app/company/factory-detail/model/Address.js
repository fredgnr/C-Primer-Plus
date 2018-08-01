function Address(params) {
    this.projectID = "";
	this.personID = "";
	this.personName = "";
	this.personJob = "";
	this.personTEL = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Address.prototype.toForm = function (project_id) {
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

Address.prototype.domMap = [
    {
        key: "projectID",
        name: "项目ID",
        type: "text",
        hidden: true
    },{
        key: "personID",
        name: "联系人ID",
        type: "text",
        hidden: true
    },{
        key: "personName",
        name: "姓名",
        type: "text",
        hidden: false
    },{
        key: "personJob",
        name: "职务",
        type: "text",
        hidden: false
    },{
        key: "personTEL",
        name: "电话",
        type: "tel",
        hidden: false
    }
]