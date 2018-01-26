
//WINDOW LOAD /*****************************************************************/ 
$(document).ready(function(){
        $("#side-wrapper").css({display:"none"});
        $(".basic").css({display:"none"});
        $('#input').css({display:"none"});
        $('#amount-btn').css({display:"none"});
        $('#basic-game').css({display:"none"});
        $('#reset').css({display:"none"});
        $(`.my-img-${1}`).attr('src','/img/bulb-on.jpg');
        clearInputText();
    });


//NORMAL GAME MODE /**********************************************************/
$(function(){
    $('#classic-hover').mouseover(function(){
        $('#basic-game').toggle("slow");
    });
    $('#basic-game').click(function(){
        clearInputText();
        $('#reset').fadeIn();
        $('.del').slideUp(300).delay(400).fadeOut(2000); //////////////////////////CHANGE THIS NOT NICE/////////////////////////////////////////////////7
        $('.basic').fadeIn(3000);
        $('.super-mode').css({display:"none"}); /////WATCH OUT NOT WORKING
    });
});

//Counter and Light on/off.
$(function() {
    let count = 1, output = $('#output');
 
    setInterval(function(){ output.html(count)}); 
    $('#my-btn').click(function(){ 
        count++;
        onOffLight(count);
        if(count === 6){
            count = 1;
            $(`.my-img-${count}`).attr('src','/img/bulb-on.jpg');
        }
        
    });  
  });

  //Remove on and add off.
  function onOffLight(count){
      
    $(`.my-img-${count-1}`).removeAttr('src');
        $(`.my-img-${count-1}`).attr('src','/img/bulb-off.jpg')
        $(`.my-img-${count}`).attr('src','/img/bulb-on.jpg') 
};

/*NORMAL GAME MODE ENDS ******************************************************/


//SUPER GAME MODE USER PICKS AMOUNT OF BULBS /********************************/
$(function(){
    let amount;   
    $('#amount-hover').mouseover(function(){
        $('#input').toggle("slow");
        $('#amount-hover').css({margin:"0 0 0 0"});
    });
    $('#input').click(function(){
        $('#amount-btn').toggle("slow");
    });
    $('#amount-btn').click(function(){
            $('#reset').fadeIn();
            $('.del').slideUp(300).delay(400).fadeOut(2000); //////////////////////////CHANGE THIS NOT NICE/////////////////////////////////////////////////7
            amount = $('#input').val(); //user input amout of bulbs
            
            $(".basic").css({display:"none"});
            $(".super-mode").slideUp( 300 ).delay( 400 ).fadeIn(3000);
            
            var b = $("<img>", {id: "user-bulb-img","class":"my-img"}).attr('src','/img/bulb-on.jpg');
            $(".user-bulbs").append(b.addClass(`test-my-img-${1}`));
                    
          
            //PRINTS THE AMOUNT
            for(let i = 2; i <= amount; i++){
            var div = $("<img>", {id: "user-bulb-img","class":"my-img"}).attr('src','/img/bulb-off.jpg');
            $(".user-bulbs").append(div.addClass(`test-my-img-${i}`));
           
        }
        
    });
    
/*COUNTER AND ON/OF LIGHTS***************************************/
$(function(){
    let c2 = 1, outputSide = $('#output-side');
   
    setInterval(function(){ outputSide.html(c2)}); 
    
    $('#my-btn-side').click(function(){  
        c2++;
        onOffLight2(c2);
        if(c2 > parseInt(amount)){ 
            c2 = 1;
            $(`.test-my-img-${c2}`).attr('src','/img/bulb-on.jpg');
        }
    })
});
});

//ON/OF LIGHTS /********************************************** */
function onOffLight2(c2){
    $(`.test-my-img-${c2 - 1 }`).removeAttr('src');
        $(`.test-my-img-${c2 - 1}`).attr('src','/img/bulb-off.jpg')
            $(`.test-my-img-${c2}`).attr('src','/img/bulb-on.jpg') 
};
/*****************************************************************/

$(function(){
    $('#reset').click(function(){
        location.reload(); //BAD OPTION!!!!!!!!
    });
});

//CLEAR INPUT TEXT 
function clearInputText(){
    $("#input").on("focus", function() {
        $("#input").val("");
    }); 
    $('#basic-game').click(function(){
        $("#input").val("");
    });
};

$(function(){
    $('#my-btn').click(function(){
        $('#my-btn')
        .css({border:"0.1em solid white",
            background:"black",color: "white"});

    });
});


   
