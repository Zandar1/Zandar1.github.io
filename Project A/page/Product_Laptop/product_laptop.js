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

  let changeicon1 = $('#changeicon1')
  const hideFilter1 = () => {
    let x = document.getElementById('hideFilter2');
    if (x.style.display === "block") {
      x.style.display = "none";
      changeicon1.removeClass( "fas fa-chevron-down" ).addClass( "fas fa-chevron-right");  
    } else {
      x.style.display = "block";
      changeicon1.removeClass( "fas fa-chevron-right" ).addClass( "fas fa-chevron-down" )
    }
  } 

  let changeicon2 = $('#changeicon2')
  const hideFilter2 = () => {
    let x = document.getElementById('hideFilter3');
    if (x.style.display === "block") {
      x.style.display = "none";
      changeicon2.removeClass( "fas fa-chevron-down" ).addClass( "fas fa-chevron-right");  
    } else {
      x.style.display = "block";
      changeicon2.removeClass( "fas fa-chevron-right" ).addClass( "fas fa-chevron-down" )
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
        id: 3,
        img: '../../image/Laptop/acer-nitro-5/nitro-5-1.jpg',
        name: 'Acer Nitro 5 AN515',
        des: '15.6" i5-10300H 8GB 512GB GTX 1660Ti',
        oldPrice: 869.97,
        newPrice: 699.97,
        price: 699.97,
        save: 'You save: £170',
        sale: '11%',
        discount_title: '',
        description: {
            Graphic_card: 'GeForce GTX 1660Ti 6GB',
            Processor: 'Intel Core i5 10300H',
            Screen_size: '15.6 Inch Full HD 144Hz Screen',
            SSD: '512 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Laptop/acer-nitro-5/nitro-5-1.jpg', '../../image/Laptop/acer-nitro-5/nitro-5-2.jpg', 
        '../../image/Laptop/acer-nitro-5/nitro-5-3.jpg', '../../image/Laptop/acer-nitro-5/nitro-5-4.jpg',
        '../../image/Laptop/acer-nitro-5/nitro-5-4.jpg','../../image/Laptop/acer-nitro-5/nitro-5-5.jpg',
        '../../image/Laptop/acer-nitro-5/nitro-5-6.jpg','../../image/Laptop/acer-nitro-5/nitro-5-7.jpg']
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
    {
        id: 11,
        img: '../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5.jpg',
        name: 'Lenovo Legion 5',
        des: '15.6" Ryzen 5 Full HD GeForce RTX 3060 6GB',
        oldPrice: 979.97,
        newPrice: 899.97,
        price: 899.97,
        save: 'You save: £80',
        sale: '8%',
        discount_title: 'FREE GEFORCE NOW FOUNDERS MEMBERSHIP',
        description: {
            Graphic_card: 'GeForce RTX 3060 6GB',
            Processor: 'AMD Ryzen 5 5600H',
            Screen_size: '15.6 Inch Full HD 120Hz Screen',
            SSD: '512 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5.jpg','../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5-2.jpg',
        '../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5-3.jpg','../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5-4.jpg',
        '../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5-5.jpg','../../image/Laptop/Lenovo-Legion-5/Lenovo-Legion-5-6.jpg']
    },
    {
        id: 12,
        img: '../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-1.png',
        name: 'Acer Nitro 5',
        des: '15.6" Ryzen 7 5800H 16 GB 1TB SSD RTX 3060 6GB',
        oldPrice: 1169.97,
        newPrice: 1099.97,
        price: 1099.97,
        save: 'You save: £70',
        sale: '6%',
        discount_title: 'FREE GEFORCE NOW FOUNDERS MEMBERSHIP',
        description: {
            Graphic_card: 'GeForce RTX 3060 6GB',
            Processor: 'AMD Ryzen 7 5800H',
            Screen_size: '15.6 Inch Full HD 120Hz Screen',
            SSD: '1 TB',
            Ram: '16GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-1.png','../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-2.png',
        '../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-3.png','../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-4.png',
        '../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-5.png','../../image/Laptop/Acer-ntro-5-2/acer-nitro-5-6.png']
    },
    {
        id: 13,
        img: '../../image/Laptop/Asus-ROG-G531/Asus-ROG-G531-1.jpg',
        name: 'Asus ROG Strix G G531',
        des: '15.6" i7-9750H 8GB 512GB SSD GTX 1660Ti ',
        oldPrice: 1199.97,
        newPrice: 899.97,
        price: 899.97,
        save: 'You save: £300',
        sale: '25%',
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        description: {
            Graphic_card: 'GeForce GTX 1660Ti 6GB',
            Processor: 'Intel Core i7-9750H',
            Screen_size: '15.6 Inch Full HD 240Hz Screen',
            SSD: '512 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Laptop/Asus-ROG-G531/Asus-ROG-G531-1.jpg','../../image/Laptop/Asus-ROG-G531/Asus-ROG-G531-2.jpg',
        '../../image/Laptop/Asus-ROG-G531/Asus-ROG-G531-3.jpg','../../image/Laptop/Asus-ROG-G531/Asus-ROG-G531-4.jpg',
        '../../image/Laptop/Asus-ROG-G531/Asus-ROG-G531-5.jpg']
    },
    {
        id: 14,
        img: '../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-1.png',
        name: 'MSI Katana GF66',
        des: '15.6" i5-11400H 8GB 512GB SSD 144Hz GTX 1650 4GB',
        oldPrice: '',
        newPrice: 699.97,
        price: 699.97,
        save: '',
        sale: '',
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        description: {
            Graphic_card: 'GeForce GTX 1650 4GB',
            Processor: 'Intel Core i5-11400H',
            Screen_size: '15.6 Inch Full HD 144Hz Screen',
            SSD: '512 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-1.png','../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-2.png',
        '../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-3.png','../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-4.png',
        '../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-5.png','../../image/Laptop/MSI-katana-GF66/MSI-katana-GF66-6.png']
    },
    {
        id: 15,
        img: '../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-1.jpg',
        name: 'Lenovo Legion 7 15IMHg05',
        des: ' 15.6" i7-10875H 144Hz RTX 2070 Super Max-Q 8GB',
        oldPrice: 1895.97,
        newPrice: 1299.97,
        price: 1299.97,
        save: 'You save: £596',
        sale: '31%',
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining', 
        description: {
            Graphic_card: 'GeForce GTX 2070 Super Max-Q 8GB',
            Processor: 'Intel Core i7-10875H',
            Screen_size: '15.6 Inch Full HD 144Hz Screen',
            SSD: '512 GB',
            Ram: '16GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-1.jpg','../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-2.jpg',
        '../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-3.jpg','../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-4.jpg',
        '../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-5.jpg','../../image/Laptop/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-6.jpg']
    },
]

var GBPFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });


 const setLocal = (index,product) => {
    let item = product[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.href = 'https://zandar1.github.io/Project%20A/page/detail/detail1.html'
}
 
const renderList = (product,name) => {
    let str = "";
    product.forEach((item,index) => {  
        str += ` 
        <div onclick="setLocal(${index}, list_product_laptop)" class="item-card">
        <div class="image-item">
            <img src="${item.img}" alt="">
        </div>
        <div class="product-name">${item.name}</div>
        <div class="description">${item.des}</div>
        <div class="new-price">${GBPFormatter.format(item.newPrice)}</div>
        <div class = "reduction" id ="reduction">
                <div class = "old-price">${GBPFormatter.format(item.oldPrice)}</div>
                <span>/</span>
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