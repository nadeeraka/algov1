
function passwordHelper(arg: string) {
    let score = 0;

    if (arg.length === 0) {
        return -1
    } else if (arg.length > 4) {
        score++;
    } else if (arg.length > 8) {
        score++;
    } else if (typeof arg === "number") {
        return 0
    }


    const password = arg.split('')

    for (let i = 0; i < password.length; i++) {
        let element: any = password[i];
        if (!isNaN(element * 1)) {
            score++;
        }
        else if (element == element.toUpperCase()) {
            score++;
        }
        else  (element == element.toLowerCase()) {
            score++;
        }

    }
    return score
}
console.log(passwordHelper('howdy'))