
            function done(){
                var fieldValue = document.getElementById('input_text').value;
                localStorage.setItem('Text',fieldValue);

                var fieldValue = document.getElementById('input_text1').value;
                localStorage.setItem('Text',fieldValue);

                var fieldValue = document.getElementById('input_number').value;
                localStorage.setItem('Number',fieldValue);
            }