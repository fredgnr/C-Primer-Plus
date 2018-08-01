/**
 * 撤案呈批表
 * @param {Object} params 初始化参数
 */
function WithdrawCase(caseinfo, registercase, commoncase, withdrawcase) {
    this.case_id = null;
    this.case_name = null;
    this.investigate_summary = null;
    this.withdraw_reason = null;
    this.excutor = null;
    this.excuteDate = null;
    this.examResponsible = null;
    this.examSuggestion = null;
    this.examDate = null;
    this.leader = null;
    this.reExamSuggestion = null;
    this.reExamDate = null;
    if (caseinfo) {
        this.case_name = caseinfo.caseDescription;
    }
    if (caseinfo) {
        this.brief = caseinfo.brief;
    }
    if (withdrawcase) {
        for (var key in this) {
            if (withdrawcase.hasOwnProperty(key)) {
                this[key] = withdrawcase[key];
            }
        }
    }
}

WithdrawCase.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

WithdrawCase.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

WithdrawCase.prototype.toReExamForm = function () {
    return {
        caseId: this.case_id,
        leader: this.leader,
        reExamDate: this.reExamDate,
        reExamSuggestion: this.reExamSuggestion
    }
}

WithdrawCase.prototype.toExamForm = function (caseID, caseType, leader) {
    return {
        caseID: caseID,
        examSuggestion: this.examSuggestion,
        examResponsible: this.examResponsible,
        examDate: this.examDate,
        leader: this.leader,
        userId: leader.uid,
        userName: leader.realname,
        caseId: this.case_id,
        caseName: this.case_name,
        caseType: caseType,
        documentName: this.documentName
    }
}

WithdrawCase.prototype.domMap = [
    {
        name: "案由",
        key: "case_name",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案件调查摘要",
        key: "investigate_summary",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "撤案理由",
        key: "withdraw_reason",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "经办人",
        key: "excutor",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "办理日期",
        key: "excuteDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "综合执法支队负责人",
        key: "examResponsible",
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
        name: "审核意见",
        key: "examSuggestion",
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
        name: "审核日期",
        key: "examDate",
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
        name: "主管领导",
        key: "leader",
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
        name: "审批意见",
        key: "reExamSuggestion",
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
        name: "审批日期",
        key: "reExamDate",
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
    }
]