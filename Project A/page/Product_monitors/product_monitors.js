let list_item = $("#productlist_item");
let list_product_monitors =[
    {
        id: 16,
        img: '../../image/Monitors/BenQ-ZOWIE-XL2411K/BenQ-ZOWIE-XL2411K-1.png',
        name: 'BenQ ZOWIE XL2411K',
        des: '24" 144Hz Full HD e-Sports Monitor',
        oldPrice: 299.97,
        newPrice: 184.97,
        price: 184.97,
        save: 'You save: 115£',
        sale: '38%',
        discount_title: '',
        description: {
            Graphic_card: 'GeForce GTX 2070 Super Max-Q 8GB',
            Processor: 'Intel Core i7-10875H',
            Screen_size: '15.6 Inch Full HD 144Hz Screen',
            SSD: '512 GB',
            Ram: '16GB',
            Warranty: '1 year',
            Operating_System: 'Windows 10',
        },
        imgs: ['../../image/Monitors/BenQ-ZOWIE-XL2411K/BenQ-ZOWIE-XL2411K-1.png','../../image/Monitors/BenQ-ZOWIE-XL2411K/BenQ-ZOWIE-XL2411K-2.jpg',
        '../../image/Monitors/BenQ-ZOWIE-XL2411K/BenQ-ZOWIE-XL2411K-3.jpg','../../image/Monitors/BenQ-ZOWIE-XL2411K/BenQ-ZOWIE-XL2411K-4.jpg']
    },

    {
        id: 17,
        img: '../../image/Monitors/Acer-Nitro-RG270/Acer-Nitro-RG270-1.jpg',
        name: 'Acer Nitro RG270',
        des: '27" IPS Full HD Gaming Monitor ',
        oldPrice: 164.97,
        newPrice: 144.97,
        price: 1299.97,
        save: 'You save: £20',
        sale: '12%',
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining', 
        description: {
            Screen_size: '27 Inch',
            Response_time: '1MS',
            Refresh_Rate: '75Hz', 
            Resolution: '1920 x 1080',
            Panel_type: 'IPS',
            Warranty: '1 year',
            Ports: 'HDMI VGA',
        },
        imgs: ['../../image/Monitors/Acer-Nitro-RG270/Acer-Nitro-RG270-1.jpg','../../image/Monitors/Acer-Nitro-RG270/Acer-Nitro-RG270-2.jpg',
        '../../image/Monitors/Acer-Nitro-RG270/Acer-Nitro-RG270-3.jpg','../../image/Monitors/Acer-Nitro-RG270/Acer-Nitro-RG270-4.jpg']
    },

    {
        id: 18,
        img: '../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-1.jpg',
        name: 'Samsung C49HG90',
        des: '49" QLED Freesync 144Hz Curved Gaming Monitor',
        oldPrice: 900.97,
        newPrice: 809.97,
        price: 809.97,
        save: 'You save: £91',
        sale: '10%',
        discount_title:'',
        description: {
            Screen_size: '49 Inch',
            Response_time: '1MS',
            Refresh_Rate: '144Hz', 
            Resolution: '3840 x 1080',
            Panel_type: 'VA',
            Warranty: '2 years',
            Ports: 'HDMI DisplayPort',
        },
        imgs: ['../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-1.jpg','../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-2.jpg',
        '../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-3.jpg','../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-4.jpg',
        '../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-5.jpg','../../image/Monitors/Samsung-C49HG90/Samsung-C49HG90-6.jpg']
    },

    {
        id: 19,
        img: '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-1.jpg',
        name: 'Lenovo ThinkVision S27i-10',
        des: '27" IPS Full HD Monitor',
        oldPrice: 184.97,
        newPrice: 149.97,
        price: 149.97,
        save: 'You save: £35',
        sale: '19%',
        discount_title:'',
        description: {
            Screen_size: '27 Inch',
            Response_time: '4MS',
            Refresh_Rate: '75Hz', 
            Resolution: '1920 x 1080 Full HD Resolution',
            Panel_type: 'IPS',
            Warranty: '3 years',
            Ports: 'HDMI VGA',
        },
        imgs: ['../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-1.jpg','../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-2.jpg',
        '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-3.jpg','../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-4.jpg',
        '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-5.jpg','../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-6.jpg',
        '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-7.jpg']
    },
   
    {
        id: 20,
        img: '../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-1.png',
        name: 'Samsung S32R750U',
        des: '32" 4K Ultra HD Clamp-Type Monitor ',
        oldPrice: 429.97,
        newPrice: 329.97,
        price: 329.97,
        save: 'You save: £100',
        sale: '23%',
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining', 
        description: {
            Screen_size: '32 Inch',
            Response_time: '4MS',
            Refresh_Rate: '60Hz', 
            Resolution: '3840 x 2160 Ultra HD 4K Resolution',
            Panel_type: 'VA',
            Warranty: '2 years',
            Ports: 'HDMI',    
        },
    imgs: ['../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-1.png','../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-2.png',
    '../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-3.png','../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-4.png',
    '../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-5.png','../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-6.png'],
    },
   
  
    {
        id: 37,
        img: '../../image/Mouse/ASUS-ROG-Keris/ASUS-ROG-Keris-1.jpg',
        name: 'Asus ROG Keris',
        des: 'Wireless Lightweight Gaming Mouse',
        oldPrice: 98.99,
        newPrice: 89.99,
        price: 89.99,
        discount_title: '',
        save: 'You save: £9',
        sale: '9%',
        description: {
            Programmable_buttons: '6',
            Wired_or_Wireless: 'Wired',
            Mouse_Type: 'Optical',
            Colour: 'Grey',
        },
        imgs: ['../../image/Mouse/ASUS-ROG-Keris/ASUS-ROG-Keris-1.jpg', '../../image/Mouse/ASUS-ROG-Keris/ASUS-ROG-Keris-2.jpg',
        '../../image/Mouse/ASUS-ROG-Keris/ASUS-ROG-Keris-3.jpg','../../image/Mouse/ASUS-ROG-Keris/ASUS-ROG-Keris-4.jpg',
        '../../image/Mouse/ASUS-ROG-Keris/ASUS-ROG-Keris-5.jpg']
    },

    {
        id: 38,
        img: '../../image/Mouse/Steelseries-Rival-110/Steelseries-Rival-110-1.jpg',
        name: 'Steelseries Rival 110',
        des: 'Gaming Mouse',
        oldPrice: 45.99,
        newPrice: 39.99,
        price: 39.99,
        discount_title: '',
        save: 'You save: £6',
        sale: '13%',
        description: {
            Programmable_buttons: '7',
            Wired_or_Wireless: 'Wireless',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        imgs: ['../../image/Mouse/Steelseries-Rival-110/Steelseries-Rival-110-1.jpg', '../../image/Mouse/Steelseries-Rival-110/Steelseries-Rival-110-2.jpg',
        '../../image/Mouse/Steelseries-Rival-110/Steelseries-Rival-110-3.jfif']
    },

    {
        id: 39,
        img: '../../image/Mouse/Apple-Magic-Mouse-2/Apple-Magic-Mouse-2-1.jpg',
        name: 'Apple Magic Mouse 2',
        des: '',
        oldPrice: 81.97,
        newPrice: 63.97,
        price: 63.97,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £18',
        sale: '22%',
        description: {
            Wired_or_Wireless: 'Wireless-Bluetooth',
            Mouse_Type: 'Laser',
            Colour: 'White',
        },
        imgs: ['../../image/Mouse/Apple-Magic-Mouse-2/Apple-Magic-Mouse-2-1.jpg', '../../image/Mouse/Apple-Magic-Mouse-2/Apple-Magic-Mouse-2-2.jpg',
        '../../image/Mouse/Apple-Magic-Mouse-2/Apple-Magic-Mouse-2-3.jpg','../../image/Mouse/Apple-Magic-Mouse-2/Apple-Magic-Mouse-2-4.jpg']
    },


    {
        id: 40,
        img: '../../image/Mouse/HyperX-Pulsefire-Dart/HyperX-Pulsefire-Dart-1.jpg',
        name: 'HyperX Pulsefire Dart',
        des: 'Wireless Gaming Mouse',
        oldPrice: 67.99,
        newPrice: 50.99,
        price: 50.99,
        discount_title: '',
        save: 'You save: £17',
        sale: '25%',
        description: {
            Programmable_buttons: '6',
            Wired_or_Wireless: 'Wireless',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        imgs: ['../../image/Mouse/HyperX-Pulsefire-Dart/HyperX-Pulsefire-Dart-1.jpg', '../../image/Mouse/HyperX-Pulsefire-Dart/HyperX-Pulsefire-Dart-2.jpg',
        '../../image/Mouse/HyperX-Pulsefire-Dart/HyperX-Pulsefire-Dart-3.jpg','../../image/Mouse/HyperX-Pulsefire-Dart/HyperX-Pulsefire-Dart-4.jpg',
        '../../image/Mouse/HyperX-Pulsefire-Dart/HyperX-Pulsefire-Dart-5.jpg']
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
 
const renderList = (product) => {
    let str = "";
    product.forEach((item,index) => {  
        str += ` 
        <div onclick="setLocal(${index},list_product_monitors)" class="item-card">
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
  filterList(list_product_monitors);

  