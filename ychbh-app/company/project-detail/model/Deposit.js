function Deposit(params) {
    this.projectID = "";
    this.depositVolume = "";
    this.depositStatus = "";
    this.depositName = "";
    this.depositID = "";
    this.depositOprationTime = "";
    this.depositLocationy = "";
    this.depositOnUnder = "";
    this.depositLocationx = "";
    this.depositDrainOutlet = "";
    this.depositFlocculation = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Deposit.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Deposit.prototype.domMap = [
    {
        key: "depositID",
        name: "沉淀池设施ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "depositName",
        name: "沉淀池名称",
        type: "text",
        hidden: false
    },{
        key: "depositStatus",
        name: "设施现状",
        type: "text",
        hidden: false
    },{
        key: "depositLocationx",
        name: "经度",
        type: "number",
        hidden: false
    },{
        key: "depositLocationy",
        name: "纬度",
        type: "number",
        hidden: false
    },{
        key: "depositOprationTime",
        name: "投运时间",
        type: "date",
        hidden: false
    },{
        key: "depositVolume",
        name: "容积（立方米）",
        type: "number",
        hidden: false
    },{
        key: "depositFlocculation",
        name: "凝絮措施",
        type: "text",
        hidden: false
    },{
        key: "depositDrainOutlet",
        name: "排水出口",
        type: "text",
        hidden: false
    },{
        key: "depositOnUnder",
        name: "井内地面",
        type: "text",
        hidden: false
    }
]