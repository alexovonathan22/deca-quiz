//userForm
$(document).ready(function(){
    //user reg
    $('#postsignin').submit(function(e){
        e.preventDefault();
        let username = $('#username').val();
        let password = $('#inputPassword').val();
        let url = $(this).attr('action');

        $.post(url, {username:username, password:password}).
            done(function(user){
                // $('testpage.html').html(`${user.username},`)                
                
            })

    })
    let urlq = 'http://localhost:3000/qaDb'
    let quesData = $('#arr');
    let num = 1;

    $.ajax({
        type: 'GET',
        url: urlq,
        success: function(questions){
            $.each(questions, function(i, question){
                quesData.append(`
                <form id=checkResult>
                                <h3>${num++}. ${question.ques}</h3>
                                <li><input type="radio" name="A" value="a" id="radio1"> A &nbsp${question.a}</li>
                                <li><input type="radio" name="A" value="b" id="radio2"> B &nbsp${question.b}</li>
                                <li><input type="radio" name="A" value="c" id="radio3"> C &nbsp${question.c}</li>
                                <li><input type="radio" name="A" value="d" id="radio4"> D &nbsp${question.d}</li>
                
                <button id=submit>Check</button>
                </form>
                `)
            })
            
        }

    });

    /* Create new Item */
$("#subques").click(function(e){
    e.preventDefault();
    var form_action = $("#create-item").find("form").attr("action");
    var question = $("#create-item").find("input[name='ques']").val();
    var optionA = $("#create-item").find("input[name='a']").val();
    var optionB = $("#create-item").find("input[name='b']").val();      
    var optionC = $("#create-item").find("input[name='c']").val();
    var optionD = $("#create-item").find("input[name='d']").val();
    var answer = $("#create-item").find("input[id='ans']").val();

    if(question !== '' && optionA !== ''){
        $.ajax({
            // dataType: 'json',
            type:'POST',
        //    ' Content-Type': 'application/json',
            url: form_action,
            data:{question:question, optionA:optionA, optionB:optionB, optionC:optionC, optionD:optionD, answer:answer}
        }).done(function(data){
            // $("#create-item").find("input[name='title']").val('');
            // $("#create-item").find("textarea[name='description']").val('');
            // getPageData();
            // $(".modal").modal('hide');
            
            
        });
    }else{
        alert('You are missing question or options.')
    }


});

//view in ui
let url = 'http://localhost:3000/qaDb'
    let qData = $('#display');

    $.ajax({
        type: 'GET',
        url: url + '/viewpage.html',
        success: function(questions){
            $.each(questions, function(question){
                qData.append(`<li>${question.ques}</li>
                        <br>
                            <li>${question.optionA}</li>
                            <li>${question.optionB}</li>
                            <li>${question.optionC}</li>
                            <li>${question.optionD}</li>

                `)
            })
            
        }

    });

    //delete item

    // // $("body").on("click",function(){
    // //     var id = 
    // //     var c_obj = $(this).parents("tr");
    
    
    // //     $.ajax({
    // //         dataType: 'json',
    // //         type:'POST',
    // //         url: url + '/deletepage.html',
    // //         data:{id:id}
    // //     }).done(function(data){
    // //         c_obj.remove();
    // //         toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
    // //         getPageData();
    // //     });
    
    
    // });
    




    

}); 

function getQuestionions(){
    $.ajax({
        url:"http://localhost:3000/qaDb",
        method:"GET"
    }).done(function(data){
       var str = '';
       for(var i = 0; i < data.length; i++){
           str += `<div id="container">
                <li>${data[i].id}</li>
                <p>${data[i].ques}</p>
                <li>${data[i].a}</li>
                <li>${data[i].b}</li>
                <li>${data[i].c}</li>
                <li>${data[i].d}</li>
                    
           </div>` 
       }
    })
}