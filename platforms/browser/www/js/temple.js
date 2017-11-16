try{
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_text1').value;
		document.getElementById('input_text1').innerHTML = input;
	});
}
catch(e){
	//may error dito
	console.log(e);
}