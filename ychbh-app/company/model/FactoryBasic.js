function FactoryBasic(params) {
    this.projectID = "";
	this.projectName = "";
	this.projectAddress = "";
	this.projectLocationx = "";
	this.projectLocationy = "";
	this.projectType = "";
	this.projectRiver = "";
	this.projectTime = "";
	this.projectLegalPerson = "";
	this.projectDesign = "";
	this.projectFact = "";
	this.projectMainPollute = "";
	this.projectOutNumber = "";
	this.projectStatus = "";
	this.projectDerectOut = "";
	this.projectDistinguish = "";
	this.projectNext = "";
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

FactoryBasic.prototype.toForm = function (project_id) {
    var data = "";
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            var element = this[key];
            var saveKey = key.substr(0, 1).toUpperCase() + key.substr(1);
            data += ("&" + saveKey + "=" + element);
        }
    }
    return data;
}