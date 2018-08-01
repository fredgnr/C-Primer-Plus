function TailMine(params) {
    this.projectID = "";
    this.tailMineName = "";
    this.tailMineRiver = "";
    this.tailMineID = "";
    this.tailMineStatus = "";
    this.tailMineLocationy = "";
    this.tailMineMeasure = "";
    this.tailMineTreatment = "";
    this.tailMineLocationx = "";
    this.tailMineDesign = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

TailMine.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            key = key[0].substr(0, 1).toUpperCase() + key.substr(1);
            data += ("&" + key + "=" + element);
        }
    }
    return data;
}

TailMine.prototype.domMap = [
    {
        key: "tailMineID",
        name: "选矿区ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "tailMineName",
        name: "名称",
        type: "text",
        hidden: false
    },{
        key: "tailMineStatus",
        name: "现状",
        type: "text",
        hidden: false
    },{
        key: "tailMineLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "tailMineLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "tailMineRiver",
        name: "流域",
        type: "text",
        hidden: false
    },{
        key: "tailMineDesign",
        name: "设计容积（立方米）",
        type: "number",
        hidden: false
    },{
        key: "tailMineTreatment",
        name: "水污染防治措施",
        type: "text",
        hidden: false
    },{
        key: "tailMineMeasure",
        name: "水土保持措施",
        type: "text",
        hidden: false
    }
]