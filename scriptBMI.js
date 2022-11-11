let container = document.getElementById("container");
        let gender = document.getElementById("gender");
        let age = document.getElementById("age").value;
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        let result = document.getElementById("result");
        let display = document.getElementById("display");
        let comment = document.getElementById("comment");
        let submit = document.getElementById("submit");
        let input = document.getElementsByTagName("input");
        let bmi;

        function calculateBMI() {
            bmi = weight.value / ((height.value * height.value)/10000);
            bmi = bmi.toFixed(1);
        }

        function changeVisuals() {
            display.innerHTML = "YOUR RESULT";
            result.innerHTML = bmi;
            result.style.fontSize = "3rem";

            if (bmi <= 18.4) {
                container.style.backgroundColor = "#7ea1dc";
                container.style.color = "var(--light)";
                submit.style.backgroundColor = "#cf552d";
                comment.innerHTML = "Underweight";
            } else if (bmi > 18.4 && bmi < 24.9) {
                container.style.backgroundColor = "#92ea8f";
                container.style.color = "var(--dark)";
                submit.style.backgroundColor = "#bf6b6b";
                comment.innerHTML = "Normal";
            } else if (bmi >= 25 && bmi < 29.9) {
                container.style.backgroundColor = "#ffd47b";
                container.style.color = "var(--dark)";
                submit.style.backgroundColor = "#bf6b6b";
                comment.innerHTML = "Overweight";
            } else {
                container.style.backgroundColor = "#ff5f5f";
                container.style.color = "var(--light)";
                submit.style.backgroundColor = "#c233e6";
                comment.innerHTML = "Obsesity";
            }

        }


        submit.addEventListener('click', () => {
            calculateBMI();
            changeVisuals();
            if (weight.value === 0 || height.value === 0) {
                comment.innerHTML = 'Enter some value';
            } 
        });