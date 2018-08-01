function back() {
	window.location = "../index.html";
}

function detail(index) {
	//	window.location = "lawdetail.html?index=" + index;
	window.location = "law.html#datailPage";
	$.getJSON("http://39.106.145.68:8080/huangbaihe/Llaw/getlawtreecontent", {
		id: index
	}, function(data) {
		if(data) {
			$("#title").html(data[0].law_name + " " + data[0].paragraph + " " + (data[0].item ? data[0].item : ""));
			$("#detail").html(data[0].content.replace('<br/>', '\n').replace('<br />', '\n'));
			autosize($('textarea'));
		}
	});
}

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
	var index = lawtype_option.index();
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
			$("#lawname").html(content).trigger("create");
		},
		error: function() {
			new $.nd2Toast({
				message: "获取法律名称失败" // Required
			});
		}
	});
}

function loadlawtree(law_name) {
	var lawname_option = $("#lawname option:selected");
	var index = lawname_option.index();
	var lawname = lawname_option.text();
	if(index == 0)
		return;
	$.ajax({
		type: 'POST',
		url: "http://39.106.145.68:8080/huangbaihe/Llaw/getlawtree",
		data: {
			"law_name": lawname
		},
		dataType: "json",
		success: function(json) {
			if(json.length == 0) {
				$("#lawtreecontent").html("<h4 style='text-align: center;'>暂无查询结果</h4>").trigger('create');
			} else {
				$("#lawtreecontent").html(convert(json)).trigger('create');
			}
		},
		error: function() {
			new $.nd2Toast({
				message: "获取法律内容失败" // Required
			});
		}
	});
}

function searchkeypress() {
	if(event.keyCode == 13) {
		doSearch()
	}
}

//关键词查询法律条文
function doSearch() {
	if($("#lawname option:selected").index() == 0) {
		new $.nd2Toast({ message: "请选择法律！" });
		return;
	} else if($("#search").val() == "") {
		new $.nd2Toast({ message: "请输入关键词！" });
		return;
	} else {
		keyword = $("#search").val();
		law_name = $("#lawname option:selected").text();
	}
	$.ajax({
		type: 'POST',
		url: "http://39.106.145.68:8080/huangbaihe/Llaw/getkeyword",
		data: {
			"keyword": keyword,
			"law_name": law_name
		},
		dataType: "json",
		success: function(json) {
			if(json.length == 0) {
				$("#lawtreecontent").html("<h4 style='text-align: center;'>暂无查询结果</h4>").trigger('create');
			} else {
				$("#lawtreecontent").html(convert(json)).trigger('create');
			}
		},
		error: function() {
			new $.nd2Toast({
				message: "查询失败" // Required
			});
		}
	});
}

//lawtree的转换
function convert(json) {
	function has_parent(json, parent_id) {
		for(var i = 0; i < json.length; i++) {
			if(json[i].id == parent_id) return true;
		}
		return false;
	}

	function has_children(json, id) {
		for(var i = 0; i < json.length; i++) {
			if(json[i].parent_id == id) return true;
		}
		return false;
	}

	var lawtree_instance = "";
	for(var i = 0; i < json.length; i++) {
		var row = json[i];
		if(!has_children(json, row.id)) {
			if(row.parent_id == 0) {
				lawtree_instance += "<a class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left'" +
					" onclick='detail(" + row.id + ")'" + " style='text-align: left;'" +
					">" + row.name + "</a>";
			}
		} else {
			lawtree_instance += "<div data-role='collapsible'" +
				">" + "<h4>" + row.name + "</h4>" +
				"<a class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left'" +
				" onclick='detail(" + row.id + ")'" + " style='text-align: left;'" +
				">" + row.name + "</a>";
			for(var j = 0; j < json.length; j++) {
				row1 = json[j];
				if(row1.parent_id == row.id) {
					lawtree_instance += "<a class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left'" +
						" onclick='detail(" + row1.id + ")'" + " style='text-align: left;'" +
						">" + row1.name + "</a>";
				}
			}
			lawtree_instance += "</div>";
		}
	}
	return lawtree_instance;
}
$(getlawtype());