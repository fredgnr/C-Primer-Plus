function Branch(params) {
    this.branchName = "";
	this.branchProject = "";
	this.branchTEL = "";
	this.branchID = "";
	this.branchCharger = "";
	this.companyID = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Branch.prototype.toForm = function (company_id) {
    var data = "&companyID=" + company_id;
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            var element = this[key];
            switch (key) {
                case "companyID":
                    break;
                case "branchTEL":
                    data += ("&branchTEL=" + element)
                    break;
                default:
                    data += ("&" + key.toLowerCase() + "=" + element);
                    break;
            }
        }
    }
    return data;
}

Branch.prototype.domMap = [
    {
        key: "branchID",
        name: "分公司ID",
        type: "text",
        hidden: true
    },{
        key: "branchName",
        name: "分公司名称",
        type: "textarea",
        hidden: false
    },{
        key: "branchProject",
        name: "负责项目",
        type: "textarea",
        hidden: false
    },{
        key: "branchCharger",
        name: "负责人",
        type: "text",
        hidden: false
    },{
        key: "branchTEL",
        name: "联系方式",
        type: "text",
        hidden: false
    }
]