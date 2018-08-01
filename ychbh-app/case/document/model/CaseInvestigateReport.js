/**
 * 案件调查终结报告
 * @param {Object} params 初始化参数
 */
function CaseInvestigateReport(params) {
    this.caseDescription = null;
    this.informantSex = null;
    this.leader = null;
    this.occurPlace = null;
    this.examDate = null;
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
    this.reExamDate = null;
    this.excuteDate = null;
    this.objectName = null;
    this.excutor2 = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

CaseInvestigateReport.prototype.domMap = [
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
        key: "object_name",
        name: "当事人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "object_id",
        name: "注册号/统一社会信用代码",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "object_address",
        name: "住所",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "object_post_code",
        name: "邮编",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsible_name",
        name: "法定代表人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsible_id",
        name: "身份证号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excute_responsible",
        name: "负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "position",
        name: "职务",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "phone",
        name: "联系电话",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "event",
        name: "违法事实",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "evidence",
        name: "以上事实主要有以下证据证明",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "case_quality",
        name: "案件性质",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "justification",
        name: "裁量理由",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punish_accord_suggestion",
        name: "处罚依据及建议",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excutor",
        name: "案件承办人",
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
        name: "承办部门负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endDate",
        name: "办理日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    }
]