window.onload = function(){
    var form = document.querySelector(".needs-validation");
    form.addEventListener("submit", function(event){
        if(form.checkValidity() == false){
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    });
}

$(document).ready(function(){
    $("form").submit(function(event){
        if ($('input:checkbox').filter(':checked').length < 1){
            $(".all").addClass("is-invalid");
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            $(".all").removeClass("is-invalid");
        }
        form.classList.add("was-validated");
    });
});
