/**
 * 行政处罚事先告知书
 * @param {Object} caseinfo 案件详情
 * @param {Object} registercase 立案呈批表
 * @param {Object} commoncase 案由信息
 * @param {Object} noticepunishment 行政处罚事先告知书
 */
function NoticeGHearingPunishment(caseinfo, registercase, reportendinvastigate, commoncase, noticeghearingpunishment) {
    this.case_id = null;
    this.document_id = null;
    this.publisher = null;
    this.object_name = null;
    this.occur_date = null;
    this.evidence = null;
    this.violate_policy = null;
    this.accord_policy = null;
    this.punishment = null;
    this.publish_date = null;
    this.event = null;
    // if (caseinfo) {
    //     for (var key in this) {
    //         if (caseinfo.hasOwnProperty(key)) {
    //             this[key] = caseinfo[key];
    //         }
    //     }
    // }
    if (registercase) {
        this.brief = registercase.brief;
        this.object_name = registercase.object_name;
    }
    if (reportendinvastigate) {
        this.occur_date = reportendinvastigate.occur_date;
        this.address = reportendinvastigate.address;
        this.event = reportendinvastigate.event;
        this.evidence = reportendinvastigate.evidence;
    }
    if (commoncase) {
        this.violate_policy = commoncase.violate_policy;
        this.accord_policy = commoncase.accord_policy;
    }
    if (noticeghearingpunishment) {
        for (var key in this) {
            if (noticeghearingpunishment.hasOwnProperty(key)) {
                this[key] = noticeghearingpunishment[key];
            }
        }
    }
}

NoticeGHearingPunishment.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办",
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

NoticeGHearingPunishment.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事",
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

NoticeGHearingPunishment.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

NoticeGHearingPunishment.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

NoticeGHearingPunishment.prototype.domMap = [
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
        name: "签发人",
        key: "publisher",
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
        name: "发案日期",
        key: "occur_date",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "违法行为",
        key: "evidence",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "证据",
        key: "evidence",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "违反规定",
        key: "violate_policy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "处罚依据",
        key: "accord_policy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "行政处罚",
        key: "punishment",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    },
    {
        name: "告知日期",
        key: "publish_date",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        },
    }
]