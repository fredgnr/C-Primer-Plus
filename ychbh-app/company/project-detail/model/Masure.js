function Masure(params) {
    this.masureID = "";
    this.masureVlume = "";
    this.masureOtlet = "";
    this.pojectID = "";
    this.masureSatus = "";
    this.masureName = "";
    this.masureLocationx = "";
    this.masureLocationy = "";
    this.masureOprationTime = "";
    this.masurePlluteArea = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Masure.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Masure.prototype.domMap = [
    {
        key: "masureID",
        name: "措施ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "masureName",
        name: "名称",
        type: "text",
        hidden: false
    },{
        key: "masureLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "masureLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "masureOprationTime",
        name: "投运时间",
        type: "date",
        hidden: false
    },{
        key: "masureVlume",
        name: "容量",
        type: "number",
        hidden: false
    },{
        key: "masurePlluteArea",
        name: "收集污水范围",
        type: "text",
        hidden: false
    },{
        key: "masureOtlet",
        name: "排污出口",
        type: "text",
        hidden: false
    },{
        key: "masureSatus",
        name: "运行现状",
        type: "text",
        hidden: false
    }
]