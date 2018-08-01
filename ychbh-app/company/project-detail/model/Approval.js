function Approval(params) {
    this.projectID = "";
    this.approvalName = "";
    this.approvalID = "";
    this.approvalTime = "";
    this.approvalType = "";
    this.approvalNumber = "";
    this.approvalContent = "";
    this.approvalCompany = "";
    this.approvalEndline = "";
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
    var data = "&projectID=" + project_id;
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Approval.prototype.domMap = [
    {
        key: "approvalID",
        name: "行政审批及许可ID",
        type: "text",
        hidden: true
    },{
        key: "approvalType",
        name: "审批类型",
        type: "text",
        hidden: false
    },{
        key: "approvalName",
        name: "名称",
        type: "textarea",
        hidden: false
    },{
        key: "approvalContent",
        name: "审批内容",
        type: "text",
        hidden: false
    },{
        key: "approvalCompany",
        name: "审批公司",
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
        key: "approvalEndline",
        name: "审批时限",
        type: "date",
        hidden: false
    }
]