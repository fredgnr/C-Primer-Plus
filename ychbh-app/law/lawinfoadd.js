function getlawtype() {
	$.ajax({
		url: "http://39.106.145.68:8080/huangbaihe/Llaw/getltype",
		async: false,
		dataType: 'json',
		success: function(json) {
			var content = "<option disabled selected>法律类型</option>";
			$.each(json, function(i, val) {
				var temp = "<option value='" +
					(i + 1) + "' style='width:100%;overflow:auto;'>" + val.text +
					"</option>";
				content += temp;
			});
			$("#lawtype").html(content);
		},
		error: function() {
			new $.nd2Toast({
				message: "获取法律类型失败" // Required
			});
		}
	});
}

function getlawname() {
	var lawtype_option = $("#lawtype option:selected");
	var index = lawtype_option.val();
	var lawtype = lawtype_option.text();
	if(index == 0)
		return;
	$.ajax({
		type: "post",
		url: "http://39.106.145.68:8080/huangbaihe/Llaw/getllaw",
		async: false,
		dataType: 'json',
		data: {
			lawtype_name: lawtype
		},
		success: function(json) {
			var content = "<option disabled selected>法律名称</option>";
			$.each(json, function(i, val) {
				var temp = "<option value='" + (i + 1) + "'>" + val.text + "</option>";
				content += temp;
			});
			$("#lawname").html(content);
		},
		error: function() {
			new $.nd2Toast({
				message: "获取法律名称失败" // Required
			});
		}
	});
}

function getlawparagraph() {
	var lawname_option = $("#lawname option:selected");
	var index = lawname_option.val();
	var lawname = lawname_option.text();
	if(index == 0)
		return;
	$.ajax({
		type: "post",
		url: "http://39.106.145.68:8080/huangbaihe/Llaw/getlparagraph",
		async: false,
		dataType: 'json',
		data: {
			law_name: lawname
		},
		success: function(json) {
			var content = "<option disabled selected>条</option>";
			$.each(json, function(i, val) {
				var temp = "<option value='" + (i + 1) + "'>" + val.text + "</option>";
				content += temp;
			});
			$("#paragraph").html(content);
		},
		error: function() {
			new $.nd2Toast({
				message: "获取法律条款失败" // Required
			});
		}
	});
}

function getlawitem() {
	var lawname_option = $("#lawname option:selected");
	var lawname_index = lawname_option.val();
	var lawname = lawname_option.text();

	var paragraph_option = $("#paragraph option:selected");
	var paragraph_index = paragraph_option.val();
	var paragraphname = paragraph_option.text();

	if(lawname_index == 0 || paragraph_index == 0)
		return;
	$.ajax({
		type: "post",
		url: "http://39.106.145.68:8080/huangbaihe/Llaw/getlitem",
		async: false,
		dataType: 'json',
		data: {
			law_name: lawname,
			paragraph: paragraphname
		},
		success: function(json) {
			var content = "<option disabled selected>款</option>";
			$.each(json, function(i, val) {
				var temp = "<option value='" + (i + 1) + "'>" + val.text + "</option>";
				content += temp;
			});
			$("#item").html(content);
		},
		error: function() {
			new $.nd2Toast({
				message: "获取法律条款失败" // Required
			});
		}
	});
}

function submitlawitem(type) {
	var lawinfo = $("#lawname option:selected").text() +
		$("#paragraph option:selected").text() +
		$("#item option:selected").text();
	if(type === 0) {
		$("#bitem").val(lawinfo);
	} else if(type === 1) {
		$("#pbasis").val(lawinfo);
	}
	return true;
}

$(getlawtype());