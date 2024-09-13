{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
    const string = document.getElementById('string')
    const re = document.getElementById('re')    
    const input = document.getElementById('input')
    const btn = document.getElementById('btn')    

    function reverse(){
        const str = input.value.split('').reduce((accumulator, currentValue)=>(currentValue + accumulator ))
        string.innerHTML = 'Number: ' + input.value
        re.innerHTML = 'Reverse Number: ' + str
    }
    
    function reverse2(){
        const int = input.value * Math.sign(input.value)
        const str = parseInt(int.toString().split('').reverse().join(''))* Math.sign(input.value)
        string.innerHTML = 'Number: ' + input.value
        re.innerHTML = 'Reverse Number: ' + str
    }

    btn.addEventListener('click', reverse2)
    