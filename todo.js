$(".click").on("click",function()
{
var elem=$("#type").val();
if(elem.trim()!=="")
{
    var item=$("<li></li>").html(`<input type="checkbox">${elem}<button class="but">remove task</button>`);
    $("#dis").append(item);
    $("#type").val("");
}
});
$(document).on("click",".but",function()
{
    $(this).parent().remove();
});
