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
let list_product_laptop =[
    {
        id: 1,
        img: '../../image/Laptop/Microsoft-Surface-i7/Microsoft -Surface-i7-1.jpg',
        name: 'Microsoft Surface Pro 7',
        des: '12.3" i7-1065G7 16GB RAM ',
        oldPrice: 1448.97,
        newPrice: 1219.97,
        price: 1219.97,
        save: 'You save: £229',
        description: {
            Processor: 'Intel Core i7',
            Screen_size: '12.3 inch',
            SSD: '256GB',
            Warranty: '1 year',
            Ram: '16GB',
        },
        discount_title: '',
        sale: '16%',
        imgs: ['../../image/Laptop/Microsoft-Surface-i7/Microsoft -Surface-i7-1.jpg',
         '../../image/Laptop/Microsoft-Surface-i7/Microsoft -Surface-i7-2.jpg',
          '../../image/Laptop/Microsoft-Surface-i7/Microsoft -Surface-i7-3.jpg',
        '../../image/Laptop/Microsoft-Surface-i7/Microsoft -Surface-i7-4.jpg',
        '../../image/Laptop/Microsoft-Surface-i7/Microsoft -Surface-i7-5.jpg'],
    },

    {
        id: 6,
        img: '../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-1.jpg',
        name: 'Dell Latitude 3520',
        des: '15.6" i5-10210U 8GB 256GB SSD',
        oldPrice: 769.97,
        newPrice: 709.97,
        price: 709.97,
        save: 'You save: £60',
        sale: '8%',
        description: {
            Processor: 'Intel Core i5 10210U',
            Screen_size: '15.6 Inch Full HD Screen',
            SSD: '256 GB',
            Ram: '8GB',
            Warranty: '1 years',
            Operating_System: 'Windows 10 Pro',
        },
        discount_title:'',
        imgs: ['../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-1.jpg', '../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-2.jpg', 
        '../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-3.jpg','../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-4.jpg',
        '../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-5.jpg','../../image/Laptop/Dell-Latitude-3520/Dell-Latitude-3520-6.jpg']
    },

    {
        id: 7,
        img: '../../image/Laptop/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-1.jpg',
        name: 'HP ZBook Firefly 15 G7',
        des: '15.6" i7-10510U 16GB 512GB SSD ',
        oldPrice: 1508.97,
        newPrice: 1429.97,
        price: 1429.97,
        save: 'You save: £79',
        sale: '5%',
        discount_title:'',
        description: {
            Graphic_card: 'Quadro P520 4GB',
            Processor: 'Intel Core i7 10510U',
            Screen_size: '15.6 Inch Full HD Screen',
            SSD: '512 GB',
            Ram: '16GB',
            Warranty: '3 years',
            Operating_System: 'Windows 10 Pro',
        },
        imgs: ['../../image/Laptop/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-1.jpg','../../image/Laptop/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-2.jpg',
        '../../image/Laptop/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-3.jpg','../../image/Laptop/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-4.jpg'],
    },
    {
        id: 8,
        img: '../../image/Laptop/Lenovo-V14-ADA/Lenovo-V14-ADA-1.jpg',
        name: 'Lenovo V14-ADA',
        des: ' 14" Ryzen 3 3250U 8 GB RAM 256 GB SSD',
        oldPrice: 489.97,
        newPrice: 447.97,
        price: 447.97,
        sale: '9%',
        save: 'You save: £42',
        discount_title: '',
        description: {
            Graphic_card: 'Radeon Graphics',
            Processor: 'AMD Ryzen 3 3250U',
            Screen_size: '14 Inch Full HD Screen',
            SSD: '256 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10 Pro',
        },
        imgs: ['../../image/Laptop/Lenovo-V14-ADA/Lenovo-V14-ADA-1.jpg','../../image/Laptop/Lenovo-V14-ADA/Lenovo-V14-ADA-2.jpg'
                ,'../../image/Laptop/Lenovo-V14-ADA/Lenovo-V14-ADA-3.jpg','../../image/Laptop/Lenovo-V14-ADA/Lenovo-V14-ADA-4.jpg']
    },
    {
        id: 9,
        img: '../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-1.jpg',
        name: 'Asus ExpertBook P2',
        des: '14" i5-10210U 8GB 256GB SSD',
        oldPrice: 753.97,
        newPrice: 594.97,
        price: 594.97,
        save: 'You save: £159',
        sale: '21%',
        discount_title: '',
        description: {
            Graphic_card: 'UHD Graphics 620',
            Processor: 'Intel Core i5-10210U',
            Screen_size: '14 Inch Full HD Screen',
            SSD: '256 GB',
            Ram: '8GB',
            Convenient_SensePoint_pointing_nub:'in the middle of the keyboard',
            Safe_and_secure: 'Webcam privacy shield, TPM 2.0, Fingerprint sensor',
            Warranty: '1 year',
            Operating_System: 'Windows 10 Pro',
        },
        imgs: ['../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-1.jpg','../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-2.jpg',
        '../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-3.jpg','../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-4.jpg',
        '../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-5.jpg','../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-6.jpg',
        '../../image/Laptop/Asus-ExpertBook-P2/Asus-ExpertBook-P2-7.jpg',]
    },
    {
        id: 10,
        img: '../../image/Laptop/Acer-TravelMate-P2/Acer-TravelMate-P2.png',
        name: 'Acer TravelMate P2',
        des: ' 15.6" i7-10510U 8GB 512GB SSD',
        oldPrice: 789.97,
        newPrice: 699.97,
        price: 699.97,
        save: 'You save: £90',
        sale: '11%',
        discount_title: '',
        description: {
            Graphic_card: 'UHD Graphics 620',
            Processor: 'Intel Core i7-10510U',
            Screen_size: '15.6 Inch Full HD Screen',
            SSD: '512 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10 Pro',
            Safe_and_secure: 'Webcam privacy shield, TPM 2.0, Fingerprint sensor',
        },
        imgs:['../../image/Laptop/Acer-TravelMate-P2/Acer-TravelMate-P2.png','../../image/Laptop/Acer-TravelMate-P2/Acer-TravelMate-P2-2.jpg',
        '../../image/Laptop/Acer-TravelMate-P2/Acer-TravelMate-P2-3.jpg','../../image/Laptop/Acer-TravelMate-P2/Acer-TravelMate-P2-4.jpg',
        '../../image/Laptop/Acer-TravelMate-P2/Acer-TravelMate-P2-5.jpg']
    },
]

var GBPFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });

 /*  const setLocal = (index,list) => {
    let item = list[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.replace('https://zandar1.github.io/Project%20A/page/detail/detail1.html')
}
 */
const renderList = (list,product) => {
    let str = "";
    list.forEach((item,index) => {  
        str += ` 
        <div onclick="setLocal(${index}, ${product})" class="item-card">
        <div class="image-item">
            <img src="${item.img}" alt="">
        </div>
        <div class="product-name">${item.name}</div>
        <div class="description">${item.des}</div>
        <div class="new-price">${GBPFormatter.format(item.newPrice)}</div>
        <div class = "reduction" id ="reduction">
                <div class = "old-price">${GBPFormatter.format(item.oldPrice)}</div>
                <span  style ="font-size: 20px; padding: 0 6px 0 6px;">/</span>
                <div class = "sale-off"> Save ${item.sale}</div>
            </div>
    </div>
    </div>
        `;
    });
    return str;
  };


  const filterList = (list) => {
    let els = renderList(list);
    list_item.html("");
  
    list_item.append(`
      ${els}
    `);
  };
  filterList(list_product_laptop);

  

  
/* 
let filters = {
    price = -1,
    new = -1,
    brandnew =-1
} */




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