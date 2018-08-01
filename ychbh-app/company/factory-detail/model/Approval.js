function Approval(params) {
    this.projectID = "";
	this.approvalID = "";
	this.approvalType = "";
	this.approvalName = "";
	this.approvalCompany = "";
	this.approvalNumber = "";
	this.approvalTime = "";
	this.approvalRemarks = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Approval.prototype.toForm = function (project_id) {
    var data = "&ProjectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            var saveKey = key.substr(0, 1).toUpperCase() + key.substr(1);
            data += ("&" + saveKey + "=" + element);
        }
    }
    return data;
}

Approval.prototype.domMap = [
    {
        key: "projectID",
        name: "项目ID",
        type: "text",
        hidden: true
    },{
        key: "approvalID",
        name: "审批ID",
        type: "text",
        hidden: true
    },{
        key: "approvalType",
        name: "审批类型",
        type: "text",
        hidden: false
    },{
        key: "approvalName",
        name: "审批名称",
        type: "text",
        hidden: false
    },{
        key: "approvalCompany",
        name: "审批单位",
        type: "text",
        hidden: false
    },{
        key: "approvalNumber",
        name: "审批数量",
        type: "number",
        hidden: false
    },{
        key: "approvalTime",
        name: "审批时间",
        type: "date",
        hidden: false
    },{
        key: "approvalRemarks",
        name: "备注",
        type: "text",
        hidden: false
    }
]