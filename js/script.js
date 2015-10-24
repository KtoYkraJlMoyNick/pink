(function() { 
    if (!("FormData" in window)) { 
    return; 
    } 
    var form = document.querySelector(".travel-form"); 
    form.addEventListener("submit", function(event){ 
        event.preventDefault(); 
        var data = new FormData(form); 
        var xhr = new XMLHttpRequest( ); 
        var time = (new Date( )).getTime( ); 
        xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time); 
        xhr.addEventListener("readystatechange", function( ) { 
            if (xhr.readyState == 4) { 
                console.log(xhr.responseText); 
                } 
            }); 
        xhr.send(data); 
    }) 
})();