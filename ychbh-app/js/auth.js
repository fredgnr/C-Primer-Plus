function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

/**
 * 权限验证
 * @param {String} page 特殊页面标记
 * @param {String} option 可执行操作
 * @param {String} redirect 重定向页面
 * @param {number} subdir_level 子目录层级（确定在生成重定向链接时添加多少上级目录标记）
 */
function auth(page, option, redirect, subdir_level) {
    if (!localStorage.getItem("au")) {
        window.location = "../".repeat(subdir_level ? subdir_level : 1) + "../login.html";
        return false;
    }
    switch (page) {
        case "index":
            return true;
        case "account":
            return true;
        default:
            var user = JSON.parse(localStorage.getItem("au"));
            var privilege_key = (option) ? ["a", page, option].join("_") : ["a", page].join("_");
            if (user[privilege_key] == 0) {
                window.location = "../".repeat(subdir_level > 0 ? subdir_level : 1) + "AuthError.html?redirect=" + (redirect ? redirect : window.location.pathname.substr(1));
                return false;
            } else {
                return true;
            }
    }
}