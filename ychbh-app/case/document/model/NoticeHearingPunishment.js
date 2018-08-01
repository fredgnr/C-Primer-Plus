/**
 * 行政处罚事先告知书
 * @param {Object} caseinfo 案件详情
 * @param {Object} registercase 立案呈批表
 * @param {Object} commoncase 案由信息
 * @param {Object} noticepunishment 行政处罚事先告知书
 */
function NoticeHearingPunishment(caseinfo, registercase, notice) {
    this.case_id = null;
    this.object_name = null;
    this.document_id = null;
    this.hearing_time = null;
    this.hearing_place = null;
    this.host = null;
    this.hearer = null;
    this.court_clerk = null;
    this.au_address = null;
    this.post_code = null;
    this.phone = null;
    this.contact = null;
    this.notice_date = null;
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key];
            }
        }
    }
    if (registercase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = registercase[key];
            }
        }
    }
    if (notice) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = notice[key];
            }
        }
    }
}

NoticeHearingPunishment.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办",
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

NoticeHearingPunishment.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事",
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

NoticeHearingPunishment.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

NoticeHearingPunishment.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

NoticeHearingPunishment.prototype.domMap = [
    {
        name: "文书编号",
        key: "document_id",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "你（单位）",
        key: "object_name",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "听证时间",
        key: "hearing_time",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "听证地点",
        key: "hearing_place",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "听证主持人",
        key: "host",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "听证员",
        key: "hearer",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "书记员",
        key: "court_clerk",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "本局地址",
        key: "au_address",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "邮政编码",
        key: "post_code",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "联系电话",
        key: "phone",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "联系人",
        key: "contact",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "通知日期",
        key: "notice_date",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    }
]