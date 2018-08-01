/**
 * 案件集体讨论记录
 * @param {Object} params 初始化参数
 */
function CaseDiscussion(caseinfo, discussion) {
    this.brief = null;
    this.discussDate = null;
    this.place = null;
    this.participants = null;
    this.host = null;
    this.reporter = null;
    this.recorder = null;
    this.event = null;
    this.discussRecord = null;
    this.suggestion = null;
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key]
            }
        }
    }
    if (discussion) {
        for (var key in this) {
            if (discussion.hasOwnProperty(key)) {
                this[key] = discussion[key]
            }
        }
    }
}

CaseDiscussion.prototype.domMap = [
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
        key: "discussDate",
        name: "讨论时间",
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
        name: "地点",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "participants",
        name: "参加人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "host",
        name: "主持人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "reporter",
        name: "汇报人",
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
        key: "event",
        name: "主要违法事实（证据、依据、办案程序及拟处罚意见）",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "discussRecord",
        name: "讨论记录",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "suggestion",
        name: "讨论意见",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    }
]