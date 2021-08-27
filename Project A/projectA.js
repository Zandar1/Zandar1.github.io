$(document).ready(function(){
    var placeHolder = ['Search product ..','Search model ..','Search spec ..','Search brand..',];
    var n=0;
    var loopLength=placeHolder.length;

    setInterval(function(){
       if(n<loopLength){
          var newPlaceholder = placeHolder[n];
          n++;
          $('#Search').attr('placeholder',newPlaceholder);
       } else {
          $('#Search').attr('placeholder',placeHolder[0]);
          n=0;
       }
    },2000);
});


let isOpen = false
let mainMenu = $('#main-menu')
$('#toogle-menu-ipad').click(() =>{
    //show menu
    
    if(!isOpen){
        mainMenu.animate({
            left: 0,
        },500);
        // change icon
        $('#toogle-menu-ipad').removeClass('fas fa-bars').addClass('fal fa-times')
        isOpen = true
    }else{
        mainMenu.animate({
            left:'-100%',
        },500);
        $('#toogle-menu-ipad').removeClass('fal fa-times').addClass('fas fa-bars')
        isOpen = false
    }
})