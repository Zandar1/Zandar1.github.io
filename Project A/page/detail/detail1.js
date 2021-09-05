


// create data
let default_data = {
  img: '../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-1.jpg',
  name: 'Lenovo ThinkPad E15 AMD Ryzen 7-5700U 16GB 512GB SSD 15.6 Inch FHD Windows 10 Pro Laptop 20YG003VUK',
  discount_title: ' <i class="fas fa-fire"></i>SELLING FAST! Less than 10 remaining',
  oldPrice: '£1448.97',
  newPrice: '£1219.97',
  price: '35.171.600 đ',
  save: 'You save: 1',
  description: {
      Graphic_card: 'Radeon Graphics',
      Processor: 'AMD Ryzen 7 5700 U',
      Screen_size: '15.6 inch Full HD Screen',
      SSD: '512 GB',
  },
  imgs: ['../../img/desktop-computer-500x500.jpeg', '../../img/desktop-computer2-500x500.jpeg']
}

let data_detail = JSON.parse(localStorage.getItem('detail-data')) || default_data
let wrap_detail = $('#wrap-detail')


const renderImage = () => {
  let str = ""
  if(data_detail.imgs.length > 0) {
      data_detail.imgs.forEach((item, index) => {
          str += `
              <img src="${item}" onclick="myFunction(this)" alt="...">
          `
      });
  }
  return str
}
const renderDes = () => {
  let obj = data_detail.description
  let str = ''
  for(item in obj) {
      let value = obj[item]
      str += `
      <div class="item-why">
      <span class="key-des">${item.replace('_', ' ')}: </span>
      <span class="item-des">${value}</span>
      </div>
      `
  }
  return str
}
renderDes()
wrap_detail.append(`
      <div class = "product-gallery">
      <div class="img-container">
          <img id="imgProduct" src="${data_detail.img}">
          <div id="myModal" class="modal">
              <span class="close">&times;</span>
              <img class="modal-content" id="img01">
          </div>
      </div>
      <div class = "guide">
          <img src="../../image/click.svg" alt="">
          <span>View larger image </span>
      </div>
      <div class="product-small-img">
        ${renderImage()}      
      </div>
      </div>


      <div class="col-12 col-lg-6 col-sm-12">
      <div class="right-detail">
          <div class="name-product">${data_detail.name}${data_detail.des}</div>
          <div class="discount-title">${data_detail.discount_title}</div>
          <div class="price-box">
              <div class="price-tag">
                  <div class ="saving">${data_detail.save}</div>
                  <div class = "price">${data_detail.price}</div>       
              </div>
              <div class="add-button">Add to basket <i class="far fa-chevron-double-right"></i></div>
          </div>
          <div class= "availability">
              <i class="fal fa-check"></i>
              <span>In stock</span>
          </div>
          <div class= "deliver">
              <i class="fal fa-check"></i>
              <span>Free inner-city delivery</span>  
          </div>
      </div>
          <div class="why-buy-me">
              <div>
                  <span class="icon-why"><i class="fas fa-plus-circle"></i></span>
                  <span class="title">Why buy me</span>
              </div>
                  ${renderDes()}
              </div>
          </div>
      </div>
      </div>
      </div>

`)

 const myFunction = (smallImg) =>
{
    var fullImg = document.getElementById("imgProduct");
    fullImg.src = smallImg.src;
} 


// Get the modal
var modal = document.getElementById("myModal");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("imgProduct");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
} 
