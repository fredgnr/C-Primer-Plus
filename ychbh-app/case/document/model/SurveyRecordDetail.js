/**
 * 勘验笔录详情
 * @param {Object} params 初始化参数
 */
function SurveyRecordDetail(params) {
    this.appendix = null;
    this.brief = null;
    this.caseID = null;
    this.content = null;
    this.endSurvey = null;
    this.environment = null;
    this.excutor = null;
    this.instrument= null;
    this.noteId = null;
    this.place = null;
    this.responsible = null;
    this.responsibleAge = null;
    this.responsiblePosition = null;
    this.responsibleSex = null;
    this.sceneCondition = null;
    this.startSurvey = null;
    this.witness = null;
    if(params){
        for(var key in params){
            if(params.hasOwnProperty(key)){
                var element = params[key];
                this[key] = element;
            }
        }
    }
}

SurveyRecordDetail.prototype.domMap = [
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
        key: "startSurvey",
        name: "勘验开始时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endSurvey",
        name: "勘验结束时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "place",
        name: "勘验地点",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "instrument",
        name: "勘验仪器",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "content",
        name: "勘验内容",
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
        name: "勘验负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsibleAge",
        name: "年龄",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsibleSex",
        name: "性别",
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
        name: "勘验人员",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsiblePosition",
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
        key: "witness",
        name: "当事人或见证人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "environment",
        name: "现场环境",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "sceneCondition",
        name: "现场实况",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "appendix",
        name: "副页",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    }
]