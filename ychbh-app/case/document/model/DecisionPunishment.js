/**
 * 行政处罚决定书
 * @param {Object} registercase 立案呈批表
 * @param {Object} invastigate 
 * @param {Object} commoncase 
 * @param {Object} punishment 
 * @param {Object} ghearing 
 * @param {Object} decision 
 */
function DecisionPunishment(caseinfo, registercase, commoncase, invastigate, punishment, ghearing, decision) {
    this.case_id = null;
    this.document_id = null;
    this.object_name = null;
    this.object_id = null;
    this.responsible = null;
    this.address = null;
    this.occur_date = null;
    this.occur_place = null;
    this.case_name = null;
    this.event = null;
    this.violate_policy = null;decision
    this.evidence = null;
    this.pretell_date = null;
    this.pretell_document_id = null;
    this.notice_hearing_date = null;
    this.notice_hearing_document_id = null;
    this.solution = null;
    this.solution2 = null;
    this.solution2 = null;
    this.solution3time = null;
    this.solution3 = null;
    this.solution3 = null;
    this.accord_policy = null;
    this.justification = null;
    this.punishment = null;
    this.publish_date = null;
    this.contact = null;
    this.contact_phone = null;
    if (caseinfo) {
        this.case_name = caseinfo.caseDescription;
    }
    if (registercase) {
        this.object_name = registercase.objectName;
        this.object_id = registercase.informantID;
        this.responsible = registercase.informantName;
        this.occur_place = registercase.occurPlace;
        this.brief = registercase.brief;
    }
    if (commoncase) {
        this.violate_policy = commoncase.rows.case_clause;
    }
    if (invastigate) {
        this.occur_date = punishment.endDate;
        this.address = punishment.object_address;
        this.event = punishment.event;
        this.evidence = punishment.evidence;
    }
    if (punishment) {
        this.pretell_date = ghearing.publish_date;
        this.pretell_document_id = ghearing.document_id;
    }
    if (ghearing) {
        this.notice_hearing_date = ghearing.publish_date;
        this.notice_hearing_document_id = ghearing.document_id;
    }
    if (decision) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = decision[key];
            }
        }
    }
}

DecisionPunishment.prototype.domMap = [
    {
        name: "文书编号",
        key: "documentId",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "当事人（单位）",
        key: "objectName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "地址",
        key: "address",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "事发日期",
        key: "occurDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "具体行为",
        key: "event",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "根据规定",
        key: "accordpolicy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "违反规定",
        key: "violatePolicy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "行政处罚",
        key: "punishment",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "履行方式和期限",
        key: "methodAndLimit",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "逾期措施",
        key: "overDateMethod",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "人民政府",
        key: "government",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "部门",
        key: "department",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "法院",
        key: "court",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "执法人员",
        key: "excutor1",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "执法人员",
        key: "excutor2",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "发布日期",
        key: "excuteDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    }
]