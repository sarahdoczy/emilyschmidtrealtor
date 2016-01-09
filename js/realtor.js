$(function(){
    $('.submit-contact-form').submit(function(e){
        if ($.trim($("#email").val()) === "" || $.trim($("#name").val()) === "" || $.trim($("#message").val()) === "" ) {
            if ($.trim($("#email").val()) === "" ) {
                $(".email.form-error").show();
            }
            if ($.trim($("#name").val()) === "" ) {
                $(".name.form-error").show();
            }
            if ($.trim($("#message").val()) === "" ) {
                $(".message.form-error").show();
            }
            return false;
        }
        e.preventDefault();
        $.ajax({
            url:'http://emilyschmidtrealtor.com/php/index.php',
            type:'post',
            data:$('.submit-contact-form').serialize(),
            success:function(){
                $("#messageSent").show();
            }
        });
    });

    function checkWindowSize() {
        if ($(window).width() <= 767){  
            $("#navbar").addClass('mobile-nav')
        }
        if ($(window).width() > 767){  
            $("#navbar").removeClass('mobile-nav')
        }    
    }
    $(window).resize(function(){
        checkWindowSize();
    });
    checkWindowSize();

    $('.navbar-collapse ul li a').bind('click', function() {
        console.log('works');
        $('.navbar-toggle:visible').click();
    })

    

});

