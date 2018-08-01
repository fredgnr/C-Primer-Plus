function User(params) {
    this.a_case_read = "";
	this.passWord = "";
	this.a_case_reexam = "";
	this.a_daily_del = "";
	this.role = "";
	this.mail = "";
	this.a_inf_manage = "";
	this.a_lawsystem = "";
	this.a_company_page = "";
	this.point = "";
	this.a_database_manage = "";
	this.a_case_exam = "";
	this.a_daily_add = "";
	this.a_daily_up = "";
	this.class = "";
	this.a_case_submit = "";
	this.a_map_browse = "";
	this.a_lawsystem_edit = "";
	this.identiNumber = "";
	this.userName = "";
	this.a_user_manage = "";
	this.realname = "";
	this.UID = "";
	this.phoneNumber = "";
	this.a_sign_manage = "";
	this.a_daily = "";
    this.job = "";
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var element = params[key];
            this[key] = element;
        }
    }
}