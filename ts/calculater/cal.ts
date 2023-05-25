const main = (firstDigit,simbole,lastDigit)=>{


    switch (simbole) {
        case '-':
           return firstDigit-lastDigit
            
            case '+':
                return firstDigit+lastDigit
                 
                case '*':
                    return firstDigit*lastDigit
                     
                    case '/':
                        return firstDigit/lastDigit
        default:
            return 0
    }

}