function Mine(params) {
    this.mineID = "";
    this.minePurpose = "";
    this.mineLocationx = "";
    this.porjectID = "";
    this.mineName = "";
    this.mineLocationy = "";
    this.mineStatus = "";
    this.mineRiver = "";
    this.mineWaterYield = "";
    this.mineDrainOutlet = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Mine.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var element = object[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Mine.prototype.domMap = [
    {
        key: "mineID",
        name: "矿洞ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "mineName",
        name: "矿洞名称",
        type: "text",
        hidden: false
    },{
        key: "minePurpose",
        name: "矿洞用途",
        type: "text",
        hidden: false
    },{
        key: "mineStatus",
        name: "矿洞现状",
        type: "text",
        hidden: false
    },{
        key: "mineLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "mineLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "mineRiver",
        name: "河域",
        type: "text",
        hidden: false
    },{
        key: "mineWaterYield",
        name: "出水量",
        type: "number",
        hidden: false
    },{
        key: "mineDrainOutlet",
        name: "排水出口",
        type: "text",
        hidden: false
    }
]