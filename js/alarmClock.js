function start(){
	
}

function getClock(){
	var dateMap = plus.storage.getItem("date");
	if (dateMap != null)
		dateMap = JSON.parse(dateMap);
		
	var alarmClock = plus.storage.getItem("AlarmClock");
	if (alarmClock != null) {
		alarmClock = JSON.parse(alarmClock);
	var myDate=new Date();
	var currDate=myDate.toLocaleDateString();
	
	var newDateMap1=[];
	var newDateMap2=[];
	for(var key in dateMap){
		if(datMap[key]>currDate)
		{
			newDateMap.push(dateMap[key]);
		}else{
			newDateMap2.push(dateMap[key]);
		}
	}
	
	for(var key in alarmClock){
		
	}
	
}