function CompanyBasic(params) {
    this.partner = "";
	this.companyName = "";
	this.companyID = "";
	this.legalPerson = "";
    this.registerAdress = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

CompanyBasic.prototype.toForm = function (project_id) {
    var data = "";
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            var element = this[key];
            data += ("&" + key.toLowerCase() + "=" + element);
        }
    }
    return data;
}