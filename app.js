const simpleCalculator = (a, b, oper) => {
    switch (oper) {
        case "add":
        return `${a + b}`;
        case "subtract":
        return `${a - b}`;
        case "multiplay":
        return `${a * b}`;
        case "divide":
        if (b === 0) return "error";
        return `${a / b}`;
        default:
        return "wrongdoing";
    }
};

document.getElementById("calculateBtn").addEventListener("click", () => {
    const numberA = parseFloat(document.getElementById("numberA").value);
    const numberB = parseFloat(document.getElementById("numberB").value);
    const operation = document.getElementById("operation").value;
    
    if (isNaN(numberA) || isNaN(numberB)) {
        document.getElementById("resultOutput").textContent = "undefined";
        return;
    }
    
    const result = simpleCalculator(numberA, numberB, operation);
    document.getElementById("resultOutput").textContent = result;
});