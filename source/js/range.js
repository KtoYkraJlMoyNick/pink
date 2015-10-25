(function() {
     var elements = document.querySelectorAll(".custom-input--mod");
     for (var i = 0; i < elements.length; i++) {
        initNumberField(elements[i]);
     }
     function initNumberField(parent) {
     var input = parent.querySelector("input");
     var minus = parent.querySelector(".custom-input__btn--minus");
     var plus = parent.querySelector(".custom-input__btn--plus");
     minus.addEventListener("click", function() {
        changeNumber(false);
    });
    plus.addEventListener("click", function() {
        changeNumber(true);
    });
     function changeNumber(operation) { 
        var value = Number(input.value);
             if (isNaN(value)) {
                value = 0;
             }
             if (operation) {
                input.value = value + 1;
             } else {
                input.value = value - 1;
             }
                if(input.value > 9) {
                    input.value = 9;
                } else {
                    if(input.value < 0) {
                        input.value = 0;
                    }
                }
         }
     }
})(); 