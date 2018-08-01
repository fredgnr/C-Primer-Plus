function Photo(params) {
    this.projectID = "";
	this.photoName = "";
	this.photoID = "";
	this.photoPath = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Photo.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Photo.prototype.domMap = [
    {
        key: "projectID",
        name: "项目ID",
        type: "text",
        hidden: false
    },{
        key: "photoName",
        name: "照片名称",
        type: "text",
        hidden: false
    },{
        key: "photoID",
        name: "照片ID",
        type: "text",
        hidden: false
    },{
        key: "photoPath",
        name: "照片路径",
        type: "text",
        hidden: false
    }
]