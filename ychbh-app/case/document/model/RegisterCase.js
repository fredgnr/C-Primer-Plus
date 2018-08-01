/**
 * 立案呈批表
 * @param {Object} caseinfo 初始化参数
 */
function RegisterCase(caseinfo, registercase) {
    this.brief = null;
    this.informantSex = null;
    this.leader = null;
    this.occurPlace = null;
    this.examDate = Date.today().toString("yyyy-MM-dd");
    this.informantAge = null;
    this.excutor1 = null;
    this.occurTime = null;
    this.informantPhone = null;
    this.suggestion = null;
    this.informantID = null;
    this.reExamSuggestion = null;
    this.content = null;
    this.reponsible = null;
    this.examSuggestion = null;
    this.informantAdress = null;
    this.reportDate = null;
    this.informantName = null;
    this.responsible = null;
    this.reExamDate = Date.today().toString("yyyy-MM-dd");
    this.excuteDate = null;
    this.objectName = null;
    this.excutor2 = null;
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
    this.examDate = this.examDate? this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "") : Date.today().toString("yyyy-MM-dd");
    this.reExamDate = this.reExamDate ? this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "") : Date.today().toString("yyyy-MM-dd");
}

RegisterCase.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办",
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

RegisterCase.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事",
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

RegisterCase.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

RegisterCase.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

RegisterCase.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
    return {
        caseID: caseID,
        caseId: caseID,
        caseName: this.caseName,
        caseType: caseType,
        documentName: "立案呈批表",
        examDate: this.examDate,
        examSuggestion: this.examSuggestion,
        leader: this.leader,
        reponsible: this.reponsible,
        userId: reExamResponsible.uid,
        userName: reExamResponsible.realname
    }
}

RegisterCase.prototype.toReExamForm = function (caseID) {
    return {
        caseID: caseID,
        leader: this.leader,
        reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
        reExamSuggestion: this.reExamSuggestion
    }
}

RegisterCase.prototype.domMap = [
    {
        name: "案由",
        key: "brief",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案件来源",
        key: "sourceID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return RegisterCase.prototype.sourceTypesText[params[this.key]];
        }
    },
    {
        name: "接案时间",
        key: "reportDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "发案时间",
        key: "occurTime",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "发案地点",
        key: "occurPlace",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "当事人（单位）",
        key: "objectName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "法定代表人（负责人）",
        key: "informantName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "性别",
        key: "informantSex",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "年龄",
        key: "informantAge",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "身份证件号",
        key: "informantID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "地址、单位",
        key: "informantAdress",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "联系方式",
        key: "informantPhone",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案情摘要",
        key: "content",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "办理意见",
        key: "suggestion",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "经办人1",
        key: "excutor1",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "经办人2",
        key: "excutor2",
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
        key: "reponsible",
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
            return au.a_case_exam == 1;
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
            return au.a_case_exam == 1;
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