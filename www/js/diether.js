try{
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_text').value;
		document.getElementById('input_text').innerHTML = input;
	});
}
catch(e){
	//may error dito
	console.log(e);
}