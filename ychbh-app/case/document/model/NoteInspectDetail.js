/**
 * 检查笔录详情
 * @param {Object} params 初始化参数
 */
function NoteInspectDetail(params) {
    this.caseID = null;
    this.objectName = null;
    this.startInspect = null;
    this.endInspect = null;
    this.inchare = null;
    this.inchareAge = null;
    this.inchareSex = null;
    this.inchareID = null;
    this.incharePhone = null;
    this.placeName = null;
    this.weather = null;
    this.excutor = null;
    this.recorder = null;
    this.excutorID = null;
    this.recorderID = null;
    this.caseContent = null;
    this.inspectRecord = null;
    this.appendix = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

NoteInspectDetail.prototype.domMap = [
    {
        key: "objectName",
        name: "被检查人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "startInspect",
        name: "开始时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endInspect",
        name: "结束时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "inchare",
        name: "法定代表",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "inchareAge",
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
        key: "inchareSex",
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
        key: "inchareID",
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
        key: "incharePhone",
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
        key: "placeName",
        name: "检查现场",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "weather",
        name: "天气情况",
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
        name: "检查人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "recorder",
        name: "记录人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excutorID",
        name: "检查人证件号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "recorderID",
        name: "记录人证件号",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "caseContent",
        name: "有关问题",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "inspectRecord",
        name: "检查记录",
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
        name: "附页",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
]