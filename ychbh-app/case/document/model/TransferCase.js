/**
 * 案件移送呈批表
 * @param {Object} caseinfo 初始化参数
 */
function TransferCase(caseinfo, transfercase) {
    this.caseID = null;
    this.brief = null;
    this.sourceId = null;
    this.receiveTime = null;
    this.occurTime = null;
    this.occurPlace = null;
    this.objectName = null;
    this.responsible = null;
    this.address = null;
    this.phone = null;
    this.transferDepart = null;
    this.contentAndReaso = null;
    this.evidence = null;
    this.excutor = null;
    this.excuteDate = null;
    this.examResponsible = null;
    this.examSuggestion = null;
    this.examDate = null;
    this.leader = null;
    this.reExamSuggestio = null;
    this.reExamDate = null;
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key];
            }
        }
    }
    if (transfercase) {
        for (var key in this) {
            if (transfercase.hasOwnProperty(key)) {
                this[key] = transfercase[key];
            }
        }
    }
}

TransferCase.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办",
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

TransferCase.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事",
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

TransferCase.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

TransferCase.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

TransferCase.prototype.domMap = [
    {
        name: "案件编号",
        key: "caseID",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案由",
        key: "brief",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案件来源",
        key: "sourceId",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "接案时间",
        key: "receiveTime",
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
        key: "responsible",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "地址",
        key: "address",
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
        key: "phone",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "受移送机关",
        key: "transferDepart",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "主要案情及移送理由",
        key: "contentAndReason",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "拟移送的证据材料及物品",
        key: "evidence",
        type: "span",
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
        name: "办理时间",
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