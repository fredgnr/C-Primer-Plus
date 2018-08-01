/**
 * 当场行政处罚决定书
 * @param {Object} params 初始化参数
 */
function DecisionPunishmentInSpot(caseinfo, registercase, commoncase, decisionpunishmentinspot) {
    this.caseId = null;
    this.objectName = null;
    this.address = null;
    this.occurDate = null;
    this.event = null;
    this.violatePolicy = null;
    this.punishment = null;
    this.methodAndLimit = null;
    this.overDateMethod = null;
    this.government = null;
    this.department = null;
    this.court = null;
    this.excutor1 = null;
    this.excutor2 = null;
    this.excuteDate = null;
    this.documentId = null;
    this.accordpolicy = null;
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key];
            }
        }
    }
    if (registercase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = registercase[key];
            }
        }
    }
    if (commoncase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = commoncase[key];
            }
        }
    }
    if (decisionpunishmentinspot) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = decisionpunishmentinspot[key];
            }
        }
    }
}

DecisionPunishmentInSpot.prototype.domMap = [
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