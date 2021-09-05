let changeicon = $('#changeicon')
 const hideFilter = () => {
    let x = document.getElementById('hideFilter1');
    if (x.style.display === "block") {
      x.style.display = "none";
      changeicon.removeClass( "fas fa-chevron-down" ).addClass( "fas fa-chevron-right");  
    } else {
      x.style.display = "block";
      changeicon.removeClass( "fas fa-chevron-right" ).addClass( "fas fa-chevron-down" )
 
    }
  } 

let list_item = $("#productlist_item");
let list_product_laptop = 


  /* let x = document.getElementById('hideFilter1');
  let y = document.getElementById('hideFilter2');
  let changeicon = $('#changeicon')
  changeicon.click((event)=>{
    if(x.style.display === "block") {
        x.style.display = "none";
        changeicon.removeClass( "fas fa-chevron-down" ).addClass( "fas fa-chevron-right");
    } else {
        x.style.display = "block"
        changeicon.removeClass( "fas fa-chevron-right" ).addClass( "fas fa-chevron-down" )
    }
    })
 */