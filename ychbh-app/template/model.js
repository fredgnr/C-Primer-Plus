function Object(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

Object.prototype.toForm = function (project_id) {
    var data = "";
    for (var key in this) {
        if (this.hasOwnProperty(key) && key !== "projectID") {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}

Object.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]