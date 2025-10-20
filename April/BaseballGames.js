var calPoints = function(operations) {
    let numStack = []
    operations.forEach((element)=>{

        if(isNaN(element)){
            switch(element){
                case "+":
                    numStack.push(numStack[numStack.length-1]*1 + numStack[numStack.length-2]*1)
                    break
                case "D":
                    numStack.push(numStack[numStack.length-1]*2) 
                    break
                case "C":
                    numStack.pop()
                    break
            }
        }
        else{
            numStack.push(element)
        }
    })


    let result = 0;
    numStack.forEach((num)=>{
        result += num*1
    })

    return result
};

console.log(calPoints(["1","C"]))