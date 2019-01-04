Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}

function start() {

}

function getClock() {
	var dateMap = plus.storage.getItem("date");
	if (dateMap != null)
		dateMap = JSON.parse(dateMap);

	var alarmClock = plus.storage.getItem("AlarmClock");
	if (alarmClock != null) {
		alarmClock = JSON.parse(alarmClock);
		var currentDate = (new Date()).format('yyyy-MM-dd');
		console.info(currentDate);
		var tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).format('yyyy-MM-dd');
		console.info(tomorrowDate);
		var isZhiban=false;
		if (dateMap.has(tomorrowDate)) 
			isZhiban=true;
		
		for(var key in alarmClock){
			if(alarmClock[key].onDutySwitch==true){
				
			}
		}
	}
}