$('.faq-ques').click(function () {
    $('.single-faq').removeClass('open')
    let parent = $(this).parent().toggleClass('open');

})


$(document).ready(function () {
    $('.view-password').click(function () {
        let passwordInput = $('#password');
        let passType = passwordInput.attr('type');

        if (passType === 'password') {
            passwordInput.attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});



$('.view-noti').click(function () {
    $('.all-notifications').toggleClass('open')
})