/**
 * 行政处罚结案报告
 * @param {Object} params 初始化参数
 */
function EndCaseReport(caseinfo, register, punishment, endcase) {
    this.brief = null;
    this.source = null;
    this.objectName = null;
    this.responsible = null;
    this.registerDate = null;
    this.punishDate = null;
    this.punishDocId = null;
    this.excutor = null;
    this.description = null;
    this.punishment = null;
    this.excuteSituation = null;
    this.endSuggestion = null;
    this.endDate = null;
    this.examResponsible = null;
    this.examSuggestion = null;
    this.examDate = Date.today().toString("yyyy-MM-dd");
    this.leader = null;
    this.reExamSuggestion = null;
    this.reExamDate = Date.today().toString("yyyy-MM-dd");
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key]
            }
        }
    }
    if (register) {
        for (var key in this) {
            if (register.hasOwnProperty(key)) {
                this[key] = register[key]
            }
        }
    }
    if (punishment) {
        for (var key in this) {
            if (punishment.hasOwnProperty(key)) {
                this[key] = punishment[key]
            }
        }
    }
    if (endcase) {
        for (var key in this) {
            if (endcase.hasOwnProperty(key)) {
                this[key] = endcase[key]
            }
        }
    }
    this.examDate = this.examDate? this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "") : Date.today().toString("yyyy-MM-dd");
    this.reExamDate = this.reExamDate ? this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "") : Date.today().toString("yyyy-MM-dd");
}

EndCaseReport.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
    return {
        caseID: caseID,
        caseId: caseID,
        caseName: this.caseName,
        caseType: caseType,
        documentName: "行政处罚结案报告",
        examDate: this.examDate,
        examSuggestion: this.examSuggestion,
        leader: this.leader,
        reponsible: this.reponsible,
        userId: reExamResponsible.uid,
        userName: reExamResponsible.realname
    }
}

EndCaseReport.prototype.toReExamForm = function (caseID) {
    return {
        caseID: caseID,
        leader: this.leader,
        reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
        reExamSuggestion: this.reExamSuggestion
    }
}

EndCaseReport.prototype.domMap = [
    {
        key: "brief",
        name: "案由",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "source",
        name: "来源类型",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "objectName",
        name: "被处罚单位",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsible",
        name: "法定代表人（负责人）",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "registerDate",
        name: "立案日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punishDate",
        name: "处罚日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punishDocId",
        name: "处罚文书号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excutor",
        name: "经办人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "description",
        name: "简要案情及调查经过",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punishment",
        name: "处罚内容",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excuteSituation",
        name: "执行情况",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endSuggestion",
        name: "结案建议",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endDate",
        name: "结案日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
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
    },
    {
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
    },
    {
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
            return params[this.key];
        }
    },
    {
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
            return au.a_case_exam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "reExamSuggestion",
        name: "审批意见",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 8) return "p";
            else return "textarea";
        })(),
        show: function (au) {
            return au.a_case_reexam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "reExamDate",
        name: "审批日期",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 8) return "p";
            else return "date";
        })(),
        show: function (au) {
            return au.a_case_reexam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
]