//userForm
$(document).ready(function(){
    $('#postsignin').submit(function(e){
        e.preventDefault();
        console.log(e);
        

        let username = $('#username').val();
        let password = $('#inputPassword').val();
        let url = $(this).attr('action');

        $.post(url, {username:username, password:password}).
            done(function(user){
                $('testpage.html').html(`${user.username},`)                
                
            })

    })

    $.get()
});