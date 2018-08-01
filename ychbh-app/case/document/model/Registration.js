/**
 * 案源登记表
 * @param {Object} params 初始化参数
 */
function Registration(params) {
    this.formDetainEvidenceSate = null;
    this.reportEndCasePunishmentState = null;
    this.examDate = null;
    this.formUnRegisterCaseSate = null;
    this.uAddress = null;
    this.placID = null;
    this.occurTime = null;
    this.uSex = null;
    this.uInformantId = null;
    this.examResponsible = null;
    this.iSex = null;
    this.notePleadState = null;
    this.noteExamState = null;
    this.reportDate = null;
    this.formPunishmentState = null;
    this.excutor = null;
    this.noteInspectState = null;
    this.group = null;
    this.reportEndInvestigateSate = null;
    this.formTransferCaseState = null;
    this.formNotPunishmentDecisionExamSate = null;
    this.noticePunishmentPretellState = null;
    this.informantID = null;
    this.formPunishmentDecisionExamSate = null;
    this.caseID = null;
    this.noticeStopState = null;
    this.informantPersonAddress = null;
    this.occurPlace = null;
    this.uPhone = null;
    this.discussionCaseState = null;
    this.infotmantAddress = null;
    this.decisionPunishmentInSpotState = null;
    this.uInformantName = null;
    this.content = null;
    this.examSuggestion = null;
    this.informantName = null;
    this.caseDescription = null;
    this.recordDate = null;
    this.formRegisterCaseSate = null;
    this.uCardType = null;
    this.sourceID = null;
    this.recorder = null;
    this.iAge = null;
    this.formKeepEvidenceSate = null;
    this.informantCardType = null;
    this.formPunishExamState = null;
    this.formRegistrationState = null;
    this.illegalID = null;
    this.objectName = null;
    this.documentId = null;
    this.informantPhoneNumber = null;
    this.noteSurveyState = null;
    this.uAge = null;
    this.formWithdrawCaseState = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
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

Registration.prototype.toExamForm = function () {
    return {
        caseID: this.caseID,
        examDate: this.examDate,
        examResponsible: this.examResponsible,
        examSuggestion: this.examSuggestion,
        excutor: this.excutor
    }
}

Registration.prototype.toReExamForm = function () {
    return {
        caseID: this.caseID,
        examDate: this.examDate,
        examResponsible: this.examResponsible,
        examSuggestion: this.examSuggestion,
        excutor: this.excutor
    }
}

Registration.prototype.domMap = [
    {
        name: "违法类型",
        key: "illegalID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.illegalTypesText[params.illegalID];
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
            return Registration.prototype.sourceTypesText[params.sourceID]; 
        }
    },
    {
        name: "报告时间",
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
        name: "案件名称",
        key: "caseDescription",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.caseDescription;
        }
    },
    {
        name: "主要内容",
        key: "content",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.content;
        }
    },
    {
        name: "区域",
        key: "placID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.placesText[params.placID];
        }
    },
    {
        name: "报告人姓名",
        key: "informantName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantName;
        }
    },
    {
        name: "报告人证件类型",
        key: "informantCardType",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return Registration.prototype.cardTypesText[params.informantCardType];
        }
    },
    {
        name: "报告人证件号",
        key: "informantID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantID;
        }
    },
    {
        name: "报告人性别",
        key: "iSex",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.iSex;
        }
    },
    {
        name: "报告人年龄",
        key: "iAge",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.iAge;
        }
    },
    {
        name: "报告人地址、单位",
        key: "informantPersonAddress",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantPersonAddress;
        }
    },
    {
        name: "报告人联系方式",
        key: "informantPhoneNumber",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.informantPhoneNumber;
        }
    },
    {
        name: "记录人",
        key: "recorder",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.recorder;
        }
    },
    {
        name: "记录时间",
        key: "recordDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.recordDate;
        }
    },
    {
        name: "综合执法支队",
        key: "group",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.group;
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
            return params.examResponsible;
        }
    },
    {
        name: "处理意见(负责人填写)",
        key: "examSuggestion",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 2) return "p";
            else if (code < 4) return "textarea";
            else return "p";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.examSuggestion;
        }
    },
    {
        name: "处理时间",
        key: "examDate",
        type: (function () {
            var au = JSON.parse(localStorage.getItem("au"));
            var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
            if (code < 2) return "span";
            else if (code < 4) return "date";
            else return "span";
        })(),
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params.examDate;
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
            return params.excutor;
        }
    }
]

