/**
 * 陈述申辩笔录
 * @param {Object} params 初始化参数
 */
function StateDefendNote(params) {
    this.brief = null;
    this.plea = null;
    this.pleaPhone = null;
    this.startPlead = null;
    this.endPlead = null;
    this.pleadPlace = null;
    this.excutor = null;
    this.recorder = null;
    this.content = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

StateDefendNote.prototype.domMap = [
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
        key: "plea",
        name: "陈述、申辩人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "pleaPhone",
        name: "联系方式",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "startPlead",
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
        key: "endPlead",
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
        key: "pleadPlace",
        name: "申辩地点",
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
        name: "经办人",
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
        key: "content",
        name: "申辩内容",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    }
]