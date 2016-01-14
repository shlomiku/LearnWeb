/**
 * Created by Admin on 14/01/2016.
 */
// mark todo as completed
$("li").click(function(){
    $(this).toggleClass("completed");
});

$("span").click(function(event){
    $(this).parent().fadeOut(600, function(){ // $(this) referes to the span element
        $(this).remove(); // $(this) refers to the element currently fading out - which is the parent of span, or - the li element.
    });
    event.stopPropagation();
});