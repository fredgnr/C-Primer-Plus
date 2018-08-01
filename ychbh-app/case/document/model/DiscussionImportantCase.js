/**
 * 重大案件集体讨论记录
 * @param {Object} params 初始化参数
 */
function DiscussionImportantCase(caseinfo, discuss) {
    this.caseId = null;
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
                this[key] = caseinfo[key];
            }
        }
    }
    if (discuss) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = discuss[key];
            }
        }
    }
}

DiscussionImportantCase.prototype.domMap = [
    { 
        name: "案由",
        key: "brief",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "讨论时间",
        key: "discussDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "地点",
        key: "place",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "参加人",
        key: "participants",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "主持人",
        key: "host",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "汇报人",
        key: "host",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "记录人",
        key: "reporter",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "主要违法事实（证据、依据、办案程序及拟处罚意见）",
        key: "recorder",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "讨论记录",
        key: "discussRecord",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    { 
        name: "讨论意见",
        key: "suggestion",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
]