function performOperation(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    var result;
    switch (operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Infinity!!!.");
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            if (num2 >= 0){
                alert("Cannot be done!!");
                return;
            }
            result = num1%num2;
    }
    document.getElementById("result").value = result;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
