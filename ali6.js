
let amal;
let exit = 1;
let number = 1;
let sum = 0;
let amaliat;
let soa;
let arz;
let ertefa;
let radical;
let sin;
let cos;

console.log("hello welcome to calculator\n")

while (exit == 1) {
    sum = 0;

    console.log("please enter (+ , - , * , / , ... ): ");
    amal = (prompt("please enter (+ , - , * , / , ... ): "));

    if (amal == "...") {
        console.log("please enter (perimeter = 1 , area = 2 , volume = 3 , power = 4 ,\nradical = 5 , sinus = 6 , cosinus = 7 , tangente = 8 , PI = 9)");
        amaliat = (prompt("please enter (perimeter = 1 , area = 2 , volume = 3 , power = 4 ,\nradical = 5 , sinus = 6 , cosinus = 7 , tangente = 8 , PI = 9)"));
        if (amaliat == 1) {
            console.log("please enter (دایره = 1 , مربع = 2 , مثلث = 3)");
            amaliat = (prompt("please enter (دایره = 1 , مربع = 2 , مثلث = 3)"));
            if (amaliat == 1) {
                console.log("please enter شعاع (cm) ")
                soa = Number((prompt("please enter شعاع (cm) ")));
                sum = (3.14 * (soa * 2))
            }
            else if (amaliat == 2) {
                console.log("please enter عرض (cm)")
                arz = Number((prompt("please enter عرض (cm)")));
                sum = arz * 4
            }
            else if (amaliat == 3) {
                console.log("please enter قاعده (cm)")
                arz = (prompt("please enter قاعده (cm)"));
                sum = arz * 3
            }
            else {
                console.log("wrong")
                alert("Wrong")
            }
        }
        else if (amaliat == 2) {
            console.log("please enter (دایره = 1 , مربع = 2 , مثلث = 3)");
            amaliat = (prompt("please enter (دایره = 1 , مربع = 2 , مثلث = 3)"));
            if (amaliat == 1) {
                console.log("please enter شعاع (cm)");
                soa = (prompt("please enter شعاع (cm)"));
                sum = 3.14 * (soa * soa)
            }
            else if (amaliat == 2) {
                console.log("please enter طول (cm)");
                arz = (prompt("please enter طول (cm)"));
                sum = arz * arz;
            }
            else if (amaliat == 3) {
                console.log("please enter قاعده(cm)");
                arz = (prompt("please enter قاعده(cm)"));
                console.log("please enter ارتفاع(cm)");
                soa = (prompt("please enter ارتفاع(cm)"));
                sum = (arz * soa) / 2;
            }
            else {
                console.log("Wrong")
                alert("Wrong")
            }
        }
        else if (amaliat == 3) {
            console.log("please enter (مکعب = 1 , مکعب مستطیل = 2 , استوانه = 3)");
            amaliat = (prompt("please enter (مکعب = 1 , مکعب مستطیل = 2 , استوانه = 3)"));
            if (amaliat == 1) {
                console.log("please enter طول (cm)");
                arz = (prompt("please enter طول (cm)"));
                sum = arz ** 3;
            }
            else if (amaliat == 2) {
                console.log("please enter طول (cm)");
                arz = (prompt("please enter طول (cm)"));
                console.log("please enter عرض (cm)");
                soa = (prompt("please enter عرض (cm)"));
                console.log("please enter ارتفاع(cm)");
                ertefa = (prompt("please enter ارتفاع (cm)"));
                sum = arz * soa * ertefa;
            }
            else if (amaliat == 3) {
                console.log("please enter شعاع (cm)");
                soa = (prompt("please enter شعاع(cm)"));
                console.log("please enter ارتفاع(cm)");
                ertefa = (prompt("please enter ارتفاع (cm)"));
                sum = (3.14 * (soa * soa)) * ertefa;
            }
            else {
                console.log("Wrong")
                alert("Wrong")
            }
        }
        else if (amaliat == 4) {
            console.log("please enter پایه");
            arz = (prompt("please enter پایه"));
            console.log("please enter توان");
            soa = (prompt("please enter توان"));
            sum = arz ** soa;
        }
        else if (amaliat == 5) {
            console.log("please enter a number")
            arz = (prompt("please enter a number"));
            radical = Math.sqrt(arz)
            sum = radical
        }
        else if (amaliat == 6) {
            console.log("please enter زاویه")
            arz = Number((prompt("please enter زاویه")));
            sin = (Math.sin(arz * (Math.PI / 180)))
            sum = sin
        }
        else if (amaliat == 7) {
            console.log("please enter زاویه")
            arz = Number((prompt("please enter زاویه")));
            cos = (Math.cos(arz * (Math.PI / 180)))
            sum = cos
        }
        else if (amaliat == 8) {
            console.log("please enter زاویه")
            arz = Number((prompt("please enter زاویه")));
            cos = (Math.tan(arz * (Math.PI / 180)))
            sum = cos
        }
        else if (amaliat == 9) {
            console.log(Math.PI)
            alert("PI = " + Math.PI)
        }
        else {
            console.log("Wrong")
        }
    }
    if (amal != "...") {
        console.log("please enter your number(Exit with 00): ");
        number = Number(prompt("please enter number"));
    }
    if (amal == "*") {
        sum += 1;
    }
    else if (amal == "/") {
        sum += number;
    }
    else if (amal == "-") {
        sum += number;
    }
    else if (amal == "...") { }

    else {
        sum = 0;
    }

    while (number != 00 && amal != "...") {
        if (amal == "*") {
            sum *= number;
            console.log("please enter your number(Exit with 00): ");
            number = Number(prompt("please enter number"));
        }
        else if (amal == "+") {
            Number(sum += number);
            console.log("please enter your number(Exit with 00): ");
            number = Number(prompt("please enter number"));
        }
        else if (amal == "-") {
            console.log("please enter your number(Exit with 00): ");
            number = Number(prompt("please enter number"));
            sum -= number;
        }
        else if (amal == "/") {
            console.log("please enter your number(Exit with 00): ");
            number = Number(prompt("please enter number"));
            if (number != 0) {
                sum /= number;
            }
        }
        else {
            console.log("error");
            alert("error")
        }
    }

    if (amaliat != 9) {
        console.log("sum is : " + sum)
        alert("sum is : " + sum)
    }
    console.log("restart with 1 and exit with 0 : ");
    exit = prompt("restart with 1 and exit with 0 : ");
    if (exit == 0) {
        console.log("thank you for using this calculator")
        alert("thank you for using this calculator")
        close()
    }
}
