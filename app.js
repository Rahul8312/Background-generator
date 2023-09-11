 //////////////////////// Bg color Start////////////////////////////////////////////////////////////////
        function bg() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i <6; i++) {
                color = color+letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        document.getElementById("btn1").addEventListener("click", function () {
            const bg_Color = bg();
            document.getElementById("Background-color").style.backgroundColor = bg_Color;
            document.getElementById("code1").textContent = bg_Color;
        });

        
    ///////////////////////// linear Gradient Start////////////////////////////////////////////////////////////////

        function linGrad() {
            const degrees = Math.floor(Math.random() * 360);
            const color1 = col();
            const color2 = col();
            return `linear-gradient(${degrees}deg, ${color1}, ${color2})`;
        }

        function col() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color= color+letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        document.getElementById("btn2").addEventListener("click", function () {
            const grad= linGrad();
            document.getElementById("Linear-gradient").style.background = grad;
            document.getElementById("code2").textContent = grad;
        });

        
        ///////////////////////// Radial Gradient Start////////////////////////////////////////////////////////////////

        function radGrad() {
            const shape = Math.random() < 0.5 ? "circle" : "ellipse";
            const color1 = col();
            const color2 = col();
            return `radial-gradient(${shape}, ${color1}, ${color2})`;
        }

        function col() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        document.getElementById("btn3").addEventListener("click", function () {
            const Grad = radGrad();
            document.getElementById("Radial-Gradients").style.background = Grad;
            document.getElementById("code3").textContent = Grad;
        });   
       


        ///////////////////////// Conical Gradient Start////////////////////////////////////////////////////////////////

        function ConicGrad() {
            const startingAngle = Math.floor(Math.random() * 360);
            const color1 = col();
            const color2 = col();
            return `conic-gradient(from ${startingAngle}deg at 50% 50%, ${color1}, ${color2})`;
        }

        function col() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color =color+ letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        document.getElementById("btn4").addEventListener("click", function () {
            const grad = ConicGrad();
            document.getElementById("Conic-Gradients").style.background = grad;
            document.getElementById("code4").textContent = grad;
        });