let header = $('#header')

header.append(`
<div id = 'info-user'>
        <div class = 'left'>
            <i id ="toogle-menu-ipad" class="fas fa-bars fa-lg toogle-menu-ipad"></i>
            <div class= 'logo'> <a href ="https://zandar1.github.io/Project%20A/page/hompage/homepage.html">
                <img src="../../image/logo.jpg" alt=""> </a>
            </div>
            <div >
            <a href ="https://zandar1.github.io/Project%20A/page/hompage/homepage.html">
                <img src="../../image/logo-mobile.jpg" alt="" class = 'logo-mobile'>
                </a>
            </div>

            <div class='search-input'>
                <input id = "Search" type="text" placeholder="Search spec..">
                <button type="button" class = "button"><i class="fal fa-search fa-lg"></i></button>
            </div>
        </div>

        <div class= 'right'>
            <div class= 'user-login'>
                <div class = "up"> Welcome back!</div>
                <div class = "down"> USER-LOGIN </div>
                <div class = "avatar">
                    <i class="fas fa-user-circle fa-2x"></i> 
                    <div class = "announce">Account</div>
                </div>
            </div>

            <div class= "cart">
                <div class = "left">
                    <button type="button" class = "cart-icon"><i class="fal fa-shopping-cart fa-lg"></i></button> 
                </div>
                <div class = "right">
                    <div class = "up"> 1 PRODUCT</div>
                    <div class = "down"> 2000.99€</div>
                </div>
            </div>
        </div>
    </div>

    <div id = 'main-menu'>
        <ul class="wrap-ul">
            <a href="https://zandar1.github.io/Project%20A/page/Product_Laptop/product_laptop.html" class = "item-menu item-start"> <li> <i class="fas fa-laptop"></i> Laptops</li>  </a>
            <a href="https://zandar1.github.io/Project%20A/page/Product_headphones/product_headphones.html"  class = "item-menu"><li><i class="fas fa-headphones-alt"></i>Headphones</li> </a>
            <a href="https://zandar1.github.io/Project%20A/page/Product_mouse/product_mouse.html"  class = "item-menu"> <li><i class="fas fa-mouse-pointer"></i>Mice</li></a>
            <a href="https://zandar1.github.io/Project%20A/page/Product_keyboard/product_keyboard.html" class = "item-menu"><li ><i class="fal fa-keyboard"></i>Keyboards</li> </a>
            <a href="https://zandar1.github.io/Project%20A/page/Product_monitors/product_monitors.html" class = "item-menu"><li ><i class="fal fa-tv"></i>Monitors</li> </a>
            <a href="https://zandar1.github.io/Project%20A/page/Product_component/product_component.html" class = "item-menu item-end"><li ><i class="fal fa-cogs"></i>Laptop Components</li></a>
        </ul>
    </div>
`)


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
