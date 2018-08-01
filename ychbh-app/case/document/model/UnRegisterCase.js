/**
 * 不予立案呈批表
 * @param {Object} params 初始化参数
 */
function UnRegisterCase(caseinfo, unregistercase) {
    this.caseID = null; 
    this.sourceID = null; 
    this.informantID = null; 
    this.informantName = null; 
    this.informantAdress = null; 
    this.informantAge = null; 
    this.informantSex = null; 
    this.content = null; 
    this.suggestion = null; 
    this.reportDate = null; 
    this.reponsible = null; // ExamResponsible
    this.responsible = null; // Responsible
    this.excutor1 = null; 
    this.excutor2 = null; 
    this.excuteDate = null; 
    this.userName = null; 
    this.userId = null; 
    this.caseId = null; 
    this.caseName = null; 
    this.caseType = null; 
    this.documentName = null; 
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key];
            }
        }
    }
    if (unregistercase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = unregistercase[key];
                
            }
        }
    }
}

Registration.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办",
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

Registration.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事",
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

Registration.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

Registration.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

UnRegisterCase.prototype.domMap = [
    {
        key: "caseID",
        name: "案件编号",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "sourceID",
        name: "来源类型",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return UnRegisterCase.prototype.sourceTypesText[params[this.key]];
        }
    },{
        key: "reportDate",
        name: "举报时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantName",
        name: "举报人姓名",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantID",
        name: "举报人证件号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantAdress",
        name: "举报人地址、单位",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantSex",
        name: "举报人性别",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "informantAge",
        name: "举报人年龄",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "content",
        name: "案件内容",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "suggestion",
        name: "当事人行为",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "responsible",
        name: "负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "excutor1",
        name: "经办人1",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "excutor1",
        name: "经办人2",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "excuteDate",
        name: "办理日期",
        type: "span",
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
        key: "reponsible",
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
            return params[this.key];
        }
    },
]