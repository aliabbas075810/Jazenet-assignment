// jquery included
$("input[name=recepitents]").change(function(){
    var ident = $(this).attr("id");
    if ($(this).val() == "specificFollowers" && $(this).is(":checked") ) {
        $("*[data-target="+ident+"]").show();
    } else if($(this).val() == "allFollowers" && $(this).is(":checked")){
        $(".toggleById").hide();
        $("#groupsBTModal").modal("show")
    } else {
        $(".toggleById").hide();
    }
})

$(".blockContent button").click(function (){
    $(this).closest(".block").removeClass("block");
})
$(".makeBlockContent").click(function (){
    $(this).closest("tr").addClass("block");
})

$(document).ready(function() {
    $("input[name=recepitents]").trigger("change");

    if($("#searchInput")[0]){
        $("#searchInput").on("input", function(){
            var searchVal = $(this).val()
            $(".searchEffector tbody tr").each(function(){
                var data = $(this).attr("data-search");
                if (data.toLowerCase().indexOf(searchVal.toLowerCase()) == -1) {
                    $(this).hide()
                } else {
                    $(this).show()
                }
            })
        })
    }

});