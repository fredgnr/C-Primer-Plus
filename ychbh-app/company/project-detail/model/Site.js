function Site(params) {
    this.projectID = "";
    this.siteName = "";
    this.siteLocationy = "";
    this.siteStatus = "";
    this.slagSiteID = "";
    this.siteRiver = "";
    this.siteLocationx = "";
    this.siteDesignVolume = "";
    this.siteProtectMeasure = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Site.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Site.prototype.domMap = [
    {
        key: "slagSiteID",
        name: "渣场ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "siteName",
        name: "渣场名称",
        type: "text",
        hidden: false
    },{
        key: "siteStatus",
        name: "渣场现状",
        type: "text",
        hidden: false
    },{
        key: "siteLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "siteLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "siteRiver",
        name: "河域",
        type: "text",
        hidden: false
    },{
        key: "siteDesignVolume",
        name: "设计容积",
        type: "number",
        hidden: false
    },{
        key: "siteProtectMeasure",
        name: "保护措施",
        type: "text",
        hidden: false
    }
]