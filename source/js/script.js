(function() { 
    if (!("FormData" in window)) { 
    return; 
    } 
    var form = document.querySelector(".travel-form"); 
    var successModal = document.querySelector(".modal-content--mod");
    var closeModal = successModal.querySelector(".modal-content__link");
    form.addEventListener("submit", function(event){ 
        event.preventDefault(); 
        var data = new FormData(form); 
        var xhr = new XMLHttpRequest( ); 
        var time = (new Date( )).getTime( ); 
        xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time); 
        xhr.addEventListener("readystatechange", function( ) { 
            if (xhr.readyState == 4) { 
					console.log(xhr.responseText);
                    successModal.classList.add("modal-content--show"); 
                } 
            }); 
        xhr.send(data); 
    }) 
    closeModal.addEventListener("click", function(event){
        event.preventDefault();
        successModal.classList.remove("modal-content--show");
    })
})();