var isValid = function(s) {

    let characters = [0,0,0]
    let currentType = []

    for(let i = 0; i < s.length; i++){
        switch (s[i]) {
            case '(':
                characters[0] += 1
                currentType.push(0)
                break;
            case ')':
                characters[0] -= 1
                if(currentType[currentType.length-1] != 0) return false
                currentType.pop()
            break;
            case '[':
                characters[1] += 1
                currentType.push(1)
            break;
            case ']':
                characters[1] -= 1
                if(currentType[currentType.length-1] != 1) return false
                currentType.pop()
            break;
            case '{':
                characters[2] += 1
                currentType.push(2)
            break;
            case '}':
                characters[2] -= 1
                if(currentType[currentType.length-1] != 2) return false
                currentType.pop()
            break;
            default:
                break;
        }
    }
    console.log(characters)
    for(let i = 0; i<characters.length; i++){
        if(characters[i] != 0){
            return false
        }
    }
    return true
};

console.log(isValid("([])"))