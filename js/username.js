function checkAvailability()
{
    $("#loaderIcon").show();
    jQuery.ajax
    (
        {
            url: "php/check_availability.php",
            data:'username='+$("#user").val(),
            type: "POST",
            success:function(data)
            {
                $("#user-availability-status").html(data);
                if(data==="Username Available")
                {
                    $("#statusIconRight").show();
                    $("#statusIconWrong").hide();
                }
                else
                {
                    $("#statusIconRight").hide();
                    $("#statusIconWrong").show();
                }
                $("#loaderIcon").hide();
            },
            error:function (){}
        }
    );
}