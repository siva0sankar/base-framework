function sample(){
	ServletBridge.check("sample",function(data){
		console.log(data)
		alert(data);
	});
}
$("#sample").on('click',sample);