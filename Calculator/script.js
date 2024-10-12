const display = document.querySelector('.display');
        const buttons = document.querySelectorAll('button');
        let currentValue = '0';
        let previousValue = null;
        let operation = null;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                if (!isNaN(value) || value === '.') {
                    inputNumber(value);
                } else {
                    handleOperator(value);
                }
                updateDisplay();
            });
        });

        function inputNumber(num) {
            if (currentValue === '0' || currentValue === '-0') {
                currentValue = num;
            } else {
                currentValue += num;
            }
        }

        function handleOperator(op) {
            if (op === '=') {
                calculate();
            } else {
                if (previousValue !== null) {
                    calculate();
                }
                previousValue = currentValue;
                operation = op;
                currentValue = '0';
            }
        }

        function calculate() {
            if (previousValue === null || operation === null) return;
            let result;
            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                default:
                    return;
            }
            currentValue = result.toString();
            operation = null;
            previousValue = null;
        }

        function updateDisplay() {
            display.textContent = currentValue;
        }