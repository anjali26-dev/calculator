let input = document.getElementById('box'); //we gave a id name in html code so we access it by id name

let buttons = document.querySelectorAll('button');//to select all buttons in variable name button
let string ="";//for showing the result
let arr = Array.from(buttons);//array of buttons
arr.forEach(button => {//runnind the loops by this arr
    //construct loop
    button.addEventListener('click',(t) =>{//generate response by clicking on button
        if (t.target.innerHTML == '='){
            //if input is equalto = than this loop is work
            string = eval(string);//evaluate is a js inbuilt function
            input.value = string;//string value store and shown on input div
        }
        //all text are clear
        else if(t.target.innerHTML == 'AC'){
            string= "";
            input.value = string;
        }
        //all text are delete
        else if
           (t.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
           string += t.target.innerHTML;//any other button adding on the screen
           input.value = string; //value show
        } 
        
    })
})