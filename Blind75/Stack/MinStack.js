class MinStack {

    constructor(){
        this.minStack = []
        this.regStack = []
    }

    push(value){
        this.regStack.push(value)

        const newMin = Math.min(value, 
            this.minStack.length === 0 ? value : this.minStack[this.minStack.length-1]
        )
        this.minStack.push(newMin)
    }

    pop(){
        this.minStack.pop()
        this.regStack.pop()
    }

    top(){
        return this.regStack[this.regStack.length - 1]
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }
}