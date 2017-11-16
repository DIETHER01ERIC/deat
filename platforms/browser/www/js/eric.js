try{
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_number').value;
		document.getElementById('input_number').innerHTML = input;

	});
}
catch(e){
	//may error dito
	console.log(e);
}