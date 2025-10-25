var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0)
    const temperaturesStack = []
    
    for(let i = 0; i < temperatures.length; i++){
        while(temperaturesStack.length > 0 && temperatures[i] > temperaturesStack[temperaturesStack.length-1][0]){
            const lastTemperature = temperaturesStack.pop()
            result[lastTemperature[1]] = i - lastTemperature[1]
        }
        temperaturesStack.push([temperatures[i], i])
    }
    
    return result
};

console.log(dailyTemperatures([30,40,50,60]))