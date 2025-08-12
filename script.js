// Get display input and all buttons
const display = document.querySelector(".display input");
const buttons = document.querySelectorAll("input[type=button]");

// Allowed characters for safety (numbers, operators, decimal)
const allowedChars = "0123456789+-*/.%";

// Loop through all buttons and add event listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        // If AC is pressed → clear display
        if (value === "AC") {
            display.value = "";
        }
        // If DE is pressed → delete last character
        else if (value === "DE") {
            display.value = display.value.slice(0, -1);
        }
        // If = is pressed → calculate result
        else if (value === "=") {
            try {
                // If display is empty → do nothing
                if (display.value.trim() === "") {
                    display.value = "";
                } else {
                    // Evaluate using Function constructor for safety
                    display.value = new Function("return " + display.value)();
                }
            } catch (err) {
                display.value = "Error";
            }
        }
        // If % is pressed → calculate percentage
        else if (value === "%") {
            if (display.value !== "") {
                display.value = parseFloat(display.value) / 100;
            }
        }
        // For numbers and operators → append to display
        else {
            // Only append if the value is allowed
            if (allowedChars.includes(value)) {
                display.value += value;
            }
        }
    });
});
