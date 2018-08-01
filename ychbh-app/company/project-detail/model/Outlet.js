function Outlet(params) {
    this.projectID = "";
    this.outletRiver = "";
    this.outletName = "";
    this.outletID = "";
    this.outletOnline = "";
    this.outletLocationx = "";
    this.outletLocationy = "";
    this.outletControlIndex = "";
    this.outletPermitVolume = "";
    this.outletFactVolume = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Outlet.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Outlet.prototype.domMap = [
    {
        key: "outletID",
        name: "排污口设施ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "outletName",
        name: "排污口名称",
        type: "text",
        hidden: false
    },{
        key: "outletLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "outletLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "outletRiver",
        name: "河域",
        type: "text",
        hidden: false
    },{
        key: "outletOnline",
        name: "在线监测",
        type: "text",
        hidden: false
    },{
        key: "outletControlIndex",
        name: "污染控制指标",
        type: "text",
        hidden: false
    },{
        key: "outletFlocculation",
        name: "凝絮措施",
        type: "text",
        hidden: false
    },{
        key: "outletPermitVolume",
        name: "许可排污量",
        type: "number",
        hidden: false
    },{
        key: "outletFactVolume",
        name: "实际排污量",
        type: "number",
        hidden: false
    }
]