function Person(params) {
    this.projectID = "";
    this.personTEL = "";
    this.personID = "";
    this.personMobile = "";
    this.personPost = "";
    this.personName = "";
    this.personAddress = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

Person.prototype.toForm = function (project_id) {
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            switch (key) {
                case "personTEL":
                    data += ("&" + "personTEL" + "=" + element);
                    break;
                default:
                    data += ("&" + key.toLowerCase() + "=" + element);
                    break;
            }
        }
    }
    return data;
}

Person.prototype.domMap = [
    {
        key: "personID",
        name: "措施ID",
        type: "text",
        hidden: true
    },{
        key: "projectID",
        name: "所属项目ID",
        type: "text",
        hidden: true
    },{
        key: "personName",
        name: "姓名",
        type: "text",
        hidden: false
    },{
        key: "personPost",
        name: "职务",
        type: "number",
        hidden: false
    },{
        key: "personMobile",
        name: "手机",
        type: "tel",
        hidden: false
    },{
        key: "personTEL",
        name: "办公电话",
        type: "tel",
        hidden: false
    },{
        key: "personAddress",
        name: "办公地址",
        type: "p",
        hidden: false
    }
]