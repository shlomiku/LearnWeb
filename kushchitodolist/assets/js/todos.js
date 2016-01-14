/**
 * Created by Admin on 14/01/2016.
 */
// mark todo as completed
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(600, function(){ // $(this) referes to the span element
        $(this).remove(); // $(this) refers to the element currently fading out - which is the parent of span, or - the li element.
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13){ // only when the return key is pressed
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
    }
})