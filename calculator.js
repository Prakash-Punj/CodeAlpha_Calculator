
        const display = document.getElementById("display");

        function toShow(input){
            display.value += input;
        }

        function clearDisplay(){
            display.value = "";
        }

        function calculate(){
            try{
                display.value = eval(display.value);
                display.style.color = "white";
            }
            catch(error){
                display.value = "Error";
                display.style.color = "red";
            }
        }

        function del(){
            display.value =  display.value.toString().slice(0, -1);
        }
