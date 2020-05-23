// JavaScript Document
/*Disse to funktioner lader brugeren skifte mellem editor tabs*/
function switchedit(switcheditpage) {
	let editpage = ["graphs", "text", "templates", "codeEditorTab"];
	for(i = 0; i < editpage.length; i++){
		if(switcheditpage == editpage[i]){
			document.getElementById(editpage[i]).classList.remove("hidden");
		}
		else{
			document.getElementById(editpage[i]).classList.add("hidden");
		}
	}
}

function switcheditbg(editbgswitch) {
	let editbg = ["graphsDiv", "textDiv", "templatesDiv", "codeDiv"];
	for(ii = 0; ii < editbg.length; ii++){
		if(editbgswitch == editbg[ii]){
			document.getElementById(editbg[ii]).classList.remove("lightbg");
		}
		else{
			document.getElementById(editbg[ii]).classList.add("lightbg");
		}
	}
}
function switchpagepreview(previewSwitch){
	let editpreview = ["pageVertical", "pageHorizontal"];
	for(iii = 0; iii < editpreview.lenght; iii++){
		if(previewSwitch == editpreview[iii]){
			document.getElementById(editpreview[iii]).classList.remove("hidden");
		}
		else{
			document.getElementById(editpreview[iii]).classList.add("hidden");
		}
	}
}