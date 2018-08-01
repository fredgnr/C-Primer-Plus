/**
 * 立案呈批表
 * @param {Object} params 初始化参数
 */
function CaseDetail(params) {
    this.formDetainEvidenceSate = null;
	this.informantPersonAddress = null;
	this.reportEndCasePunishmentState = null;
	this.occurPlace = null;
	this.examDate = null;
	this.formUnRegisterCaseSate = null;
	this.placID = null;
	this.occurTime = null;
	this.discussionCaseState = null;
	this.infotmantAddress = null;
	this.examResponsible = null;
	this.decisionPunishmentInSpotState = null;
	this.iSex = null;
	this.content = null;
	this.notePleadState = null;
	this.noteExamState = null;
	this.examSuggestion = null;
	this.reportDate = null;
	this.informantName = null;
	this.formPunishmentState = null;
	this.excutor = null;
	this.caseDescription = null;
	this.recordDate = null;
	this.noteInspectState = null;
	this.formRegisterCaseSate = null;
	this.group = null;
	this.sourceID = null;
	this.recorder = null;
	this.reportEndInvestigateSate = null;
	this.formTransferCaseState = null;
	this.formNotPunishmentDecisionExamSate = null;
	this.iAge = null;
	this.noticePunishmentPretellState = null;
	this.formKeepEvidenceSate = null;
	this.informantCardType = null;
	this.informantID = null;
	this.formPunishExamState = null;
	this.formRegistrationState = null;
	this.formPunishmentDecisionExamSate = null;
	this.illegalID = null;
	this.caseID = null;
	this.objectName = null;
	this.documentId = null;
	this.informantPhoneNumber = null;
	this.noteSurveyState = null;
	this.noticeStopState = null;
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

CaseDetail.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办"
};

CaseDetail.prototype.illegalTypesTextText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事"
};

CaseDetail.prototype.placesTextText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区"    
};

CaseDetail.prototype.cardTypesTextText = {
    "0": "身份证",
    "1": "军官证",
    "2": "学生证",
    "3": "港澳台同胞证"
}

CaseDetail.prototype.caseStateText = {
    "0": "未申请",
    "1": "已提交",
    "2": "已审核",
    "3": "已审批"
}

CaseDetail.prototype.domMap = [
    {
        name: "违法类型",
        key: "illegalID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "来源类型",
        key: "sourceID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "举报时间",
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
        name: "案件描述",
        key: "caseDescription",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
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
            return params[this.key];
        }
    },
    {
        name: "举报人姓名",
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
        name: "举报人证件号",
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
        name: "举报人地址、单位",
        key: "informantPersonAddress",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "举报人电话",
        key: "informantPhoneNumber",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "被举报人姓名",
        key: "uInformantName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "被举报人证件类型",
        key: "uCardType",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return CaseDetail.prototype.cardTypesTextText[params[this.key]];
        }
    },
    {
        name: "被举报人证件号",
        key: "uInformantId",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "被举报人地址",
        key: "uAddress",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "被举报人电话号码",
        key: "uPhone",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "立案处理情况",
        key: "formRegisterCaseSate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return CaseDetail.prototype.caseStateText[params[this.key]];
        }
    },
    {
        name: "撤案处理情况",
        key: "formWithdrawCaseState",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return CaseDetail.prototype.caseStateText[params[this.key]];
        }
    },
    {
        name: "行政处罚处理情况",
        key: "formPunishExamState",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return CaseDetail.prototype.caseStateText[params[this.key]];
        }
    }
]