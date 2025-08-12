
const display = document.querySelector(".display input");
const buttons = document.querySelectorAll("input[type=button]");


const allowedChars = "0123456789+-*/.%";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        
        if (value === "AC") {
            display.value = "";
        }
        
        else if (value === "DE") {
            display.value = display.value.slice(0, -1);
        }
       
        
        else if (value === "=") {
            try {
                
                if (display.value.trim() === "") {
                    display.value = "";
                } else {
                   
                    display.value = new Function("return " + display.value)();
                }
            } catch (err) {
                display.value = "Error";
            }
        }
       
        else if (value === "%") {
            if (display.value !== "") {
                display.value = parseFloat(display.value) / 100;
            }
        }
        
        else {
           
            if (allowedChars.includes(value)) {
                display.value += value;
            }
        }
    });
});
