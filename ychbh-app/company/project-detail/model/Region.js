function Region(params) {
    this.projectID = "";
    this.regionName = "";
    this.regionID = "";
    this.regionPopleNumber = "";
    this.regionMinPollutant = "";
    this.regionLocationx = "";
    this.regionCntrolMeasure = "";
    this.regionLocationy = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Region.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Region.prototype.domMap = [
    {
        key: "regionID",
        name: "区域ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "regionName",
        name: "名称",
        type: "number",
        hidden: false
    },{
        key: "regionLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "regionLocationy",
        name: "纬度",
        type: "text",
        hidden: false
    },{
        key: "regionPopleNumber",
        name: "人数",
        type: "number",
        hidden: false
    },{
        key: "regionMinPollutant",
        name: "主要污染物",
        type: "date",
        hidden: false
    },{
        key: "regionCntrolMeasure",
        name: "治污措施",
        type: "text",
        hidden: false
    }
]