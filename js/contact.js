$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: false,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Please enter a subject",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Please enter the best number to call you on",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Please enter your email address"
                },
                message: {
                    required: "Please provide details of what you're looking for",
                    minlength: "Please enter more detail"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "contact_process.php",
                    success: function() {
                        // Disabling form inputs
                        $('#contactForm :input').attr('disabled', 'disabled');
                        
                        // Fade out the contact form
                        $('#contactForm').fadeOut("slow", function() {
                            // On completion of the fade out, show the success message
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        // Handle the error scenario
                        $('#error').fadeIn();
                    }
                });
            }
            
        })
    })
        
 })(jQuery)
})