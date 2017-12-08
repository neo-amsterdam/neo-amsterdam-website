$(document).ready(function() {
    $("#newsletter-form").submit(function(e){
        e.preventDefault();

        var $form = $(this),
            email = $form.find('input[name="email"]').val(),
            url = $form.attr('action');

        $.post(url, {email:email, list: 'kvPCfUDn7UqJsFkdeGrHsg'},

            function(data) {
                var data = $(data).find('h2').text();
                console.log(data);
                if(data)
                {
                    console.log('data:' + data);
                    if(data=="Some fields are missing.")
                    {
                        $("#status").text("Please fill in your email.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Invalid email address.")
                    {
                        $("#status").text("Your email address is invalid.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Invalid list ID.")
                    {
                        $("#status").text("Your list ID is invalid.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Already subscribed.")
                    {
                        $("#status").text("You're already subscribed!");
                        $("#status").css("color", "red");
                    }
                    else
                    {
                        $("#status").text("Check your e-mail for a confirmation link.");
                        $("#status").css("color", "green");
                    }
                }
                else
                {
                    alert("Sorry, unable to subscribe. Please try again later!");
                }
            }
        );
    });
    $("#newsletter-form").keypress(function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            $(this).submit();
        }
    });
    $("#submit").click(function(e){
        e.preventDefault();
        $("#newsletter-form").submit();
    });
});