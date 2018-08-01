/**
 * 行政处罚决定审批表
 * @param {Object} params 初始化参数
 */
function PunishmentExam(caseinfo, registercase, common, punishment) {
    this.case_id = null;
    this.brief = null;
    this.event = null;
    this.violate_policy = null;
    this.accord_policy = null;
    this.punishment = null;
    this.excutor = null;
    this.excuteDate = Date.today().toString("yyyy-MM-dd");
    this.examResponsible = null;
    this.examSuggestion = null;
    this.examDate = Date.today().toString("yyyy-MM-dd");
    this.leader = null;
    this.reExamSuggestion = null;
    this.reExamDate = Date.today().toString("yyyy-MM-dd");
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key];
            }
        }
    }
    if (registercase) {
        for (var key in this) {
            if (registercase.hasOwnProperty(key)) {
                this[key] = registercase[key];
            }
        }
    }
    if (common) {
        for (var key in this) {
            if (common.hasOwnProperty(key)) {
                this[key] = common[key];
            }
        }
    }
    if (punishment) {
        for (var key in this) {
            if (punishment.hasOwnProperty(key)) {
                this[key] = punishment[key];
            }
        }
    }
    this.excuteDate = this.excuteDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
    this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
    this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

PunishmentExam.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
    return {
        caseID: caseID,
        caseId: caseID,
        caseName: this.brief,
        caseType: caseType,
        documentName: "行政处罚审批表",
        examDate: this.examDate,
        examResponsible: this.examResponsible,
        examSuggestion: this.examSuggestion,
        leader: this.leader,
        userId: reExamResponsible.uid,
        userName: reExamResponsible.realname
    }
}

PunishmentExam.prototype.toReExamForm = function () {
    return {
        caseId: this.case_id,
        leader: this.leader,
        reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
        reExamSuggestion: this.reExamSuggestion
    }
}

PunishmentExam.prototype.domMap = [
    {
        name: "案由",
        key: "brief",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "主要违法事实",
        key: "event",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "违反规定",
        key: "violate_policy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "根据规定",
        key: "accord_policy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "建议给予行政处罚",
        key: "punishment",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "承办人",
        key: "excutor",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    {
        name: "办理日期",
        key: "excuteDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
        }
    },
    {
        key: "examResponsible",
        name: "综合执法支队负责人",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 2) return "span";
            else if (code < 4) return "select";
            else return "span";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "examSuggestion",
        name: "审核意见",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 4) return "p";
            else if (code < 8) return "textarea";
            else return "p";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "examDate",
        name: "审核日期",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 4) return "span";
            else if (code < 8) return "date";
            else return "span";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return this.type === "date" ? params[this.key] : Date.parse(params[this.key]).toString("yyyy年MM月dd日");
        }
    },{
        key: "leader",
        name: "主管领导",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 4) return "span";
            else if (code < 8) return "select";
            else return "span";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "reExamSuggestion",
        name: "审批意见",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 8) return "p";
            else return "textarea";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "reExamDate",
        name: "审批日期",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 8) return "p";
            else return "date";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return this.type === "date" ? params[this.key] : Date.parse(params[this.key]).toString("yyyy年MM月dd日");
        }
    }
]