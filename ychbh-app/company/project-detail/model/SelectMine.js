function SelectMine(params) {
    this.projectID = "";
    this.selectMineArt = "";
    this.selectMineID = "";
    this.selectMineStatus = "";
    this.selectMineRiver = "";
    this.selectMineName = "";
    this.selectMineWaste = "";
    this.selectMineWater = "";
    this.selectMineLocationx = "";
    this.selectMineLocationy = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

SelectMine.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID" && key !== "projectID") {
            var element = this[key];
            key = key[0].substr(0, 1).toUpperCase() + key.substr(1);
            data += ("&" + key + "=" + element);
        }
    }
    return data;
}

SelectMine.prototype.domMap = [
    {
        key: "selectMineID",
        name: "选矿区ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "selectMineName",
        name: "名称",
        type: "text",
        hidden: false
    },{
        key: "selectMineArt",
        name: "工艺",
        type: "text",
        hidden: false
    },{
        key: "selectMineStatus",
        name: "现状",
        type: "text",
        hidden: false
    },{
        key: "selectMineLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "selectMineLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "selectMineRiver",
        name: "流域",
        type: "text",
        hidden: false
    },{
        key: "selectMineWater",
        name: "废水排放情况",
        type: "text",
        hidden: false
    },{
        key: "selectMineWaste",
        name: "废渣处理情况",
        type: "text",
        hidden: false
    }
]