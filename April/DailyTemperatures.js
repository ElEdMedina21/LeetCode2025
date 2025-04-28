var dailyTemperatures = function(temperatures) {
    let result = [0]
    for(let temperature = temperatures.length-2; temperature >= 0; temperature--){
        if(temperatures[temperature+1] > temperatures[temperature]){
            result.push(1)
        }
        else{
            let diff = 0
            for(let current = temperature; current < temperatures.length; current++){
                if(temperatures[current] > temperatures[temperature]) {
                    result.push(diff)
                    break
                }
                else if(current == temperatures.length-1){
                    result.push(0)
                }
                else{
                    diff++
                }
            }
        }
    }
    return result.reverse()
};

var dailyTemperatures = (temperatures)=>{
    let result = new Array(temperatures.length).fill(0)
    let stack = []

    for(let i = 0; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[i] > stack[stack.length-1][0]){
            let stackTemperature = stack.pop()
            result[stackTemperature[1]] = i - stackTemperature[1]
        }
        stack.push([temperatures[i],i])
    }

    return result
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))