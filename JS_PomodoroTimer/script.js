 let min = document.querySelector(".min");
        let sec = document.querySelector(".sec");
        let startBtn = document.querySelector(".startBtn");
        let pauseBtn = document.querySelector(".pauseBtn");
        let resetBtn = document.querySelector(".resetBtn");
 
        let total = 25 * 60;
        let timer;
 
        function updateTime() {
            let minutes = Math.floor(total / 60);
            let seconds = total % 60;
            min.textContent = String(minutes).padStart(2, "0");
            sec.textContent = String(seconds).padStart(2, "0");
        }
 
        startBtn.addEventListener("click", function() {
            clearInterval(timer);
            timer = setInterval(function() {
                total--;
                updateTime();
 
                if (total <= 0) {
                    clearInterval(timer);
                    alert("Time Over!");
                    total = 25 * 60;
                    updateTime();
                }
            }, 1000);
        });
 
        pauseBtn.addEventListener("click", function() {
            clearInterval(timer);
        });
 
        resetBtn.addEventListener("click", function() {
            clearInterval(timer);
            total = 25 * 60;
            updateTime();
        });
 
        updateTime();