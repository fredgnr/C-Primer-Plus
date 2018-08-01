/**
 * 行政处罚听证笔录
 * @param {Object} params 初始化参数
 */
function PunishmentHearingNote(params) {
    this.brief = null;
    this.objectName = null;
    this.responsible = null;
    this.objectSex = null;
    this.objectAge = null;
    this.objectPhone = null;
    this.objectDepart = null;
    this.objectAddress = null;
    this.agent = null;
    this.agentSex = null;
    this.agentAge = null;
    this.agentPosition = null;
    this.agentPhone = null;
    this.agentDepart = null;
    this.agentAddress = null;
    this.excutor = null;
    this.host = null;
    this.courtClerk = null;
    this.startHearing = null;
    this.endHearing = null;
    this.hearingMethod = null;
    this.record = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

PunishmentHearingNote.prototype.domMap = [
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
        key: "objectName",
        name: "当事人（单位）",
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
        name: "法定代表人（负责人）",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "objectSex",
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
        key: "objectAge",
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
        key: "objectPhone",
        name: "联系方式	",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "objectDepart",
        name: "工作单位",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "objectAddress",
        name: "地址",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "agent",
        name: "委托代理人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "agentSex",
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
        key: "agentAge",
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
        key: "agentPosition",
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
        key: "agentPhone",
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
        key: "agentDepart",
        name: "工作单位",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "agentAddress",
        name: "地址",
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
        name: "案件经办人",
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
        name: "听证主持人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "courtClerk",
        name: "书记员",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "startHearing",
        name: "听证开始时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endHearing",
        name: "听证结束时间",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "hearingMethod",
        name: "听证方式",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "record",
        name: "记录",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    }
]