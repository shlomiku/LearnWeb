/**
 * Created by Admin on 14/01/2016.
 */
// mark todo as completed
$("li").click(function(){
    $(this).toggleClass("completed");
});

$("span").click(function(event){
    $(this).parent().remove();
    event.stopPropagation();
});