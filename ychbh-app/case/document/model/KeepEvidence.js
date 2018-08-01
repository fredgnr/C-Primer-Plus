/**
 * 先行登记保存物品呈批表
 * @param {Object} params 初始化参数
 */
function KeepEvidence(params) {
    this.caseID = null;
    this.brief = null;
    this.objectName = null;
    this.occurDate = null;
    this.evidence = null;
    this.keepPlace = null;
    this.excutor1 = null;
    this.excutor2 = null;
    this.publishDate = null;
    this.examSuggestion = null;
    this.reponsible = null;
    this.examDate = null;
    this.reExamSuggestion = null;
    this.leader = null;
    this.reExamDate = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

KeepEvidence.prototype.domMap = [
    {
        key: "caseID",
        name: "案件编号",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "brief",
        name: "案由",
        type: "p",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "objectName",
        name: "对象名称",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "occurDate",
        name: "发生日期",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "evidence",
        name: "保存的物品",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "keepPlace",
        name: "保存地点",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "excutor1",
        name: "经办人1",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "excutor2",
        name: "经办人2",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "publishDate",
        name: "提交日期",
        type: "span",
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
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
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    },
    {
        key: "reponsible",
        name: "支队执法负责人",
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
        key: "examDate",
        name: "审核日期",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 4) return "span";
            else if (code < 8) return "date";
            else return "span";
        })(),
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
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
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
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
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
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
        show: function (su) {
            return true;
        },
        get: function (params) {
            return params[this.key]
        }
    }
]