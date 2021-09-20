let list_item = $("#productlist_item");
let list_headphones =[
    {
        id: 4,
        img: '../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2.png',
        name: 'HyperX Cloud II',
        des: 'Wireless Gaming Headset',
        oldPrice: 149.99,
        newPrice: 104.99,
        price: 104.99,
        discount_title: '',
        save: 'You save: £45',
        sale: '43%',
        description: {
            Wired_or_Wireless: 'Low-latency 2.4 GHz Wireless with long-lasting battery life',
            Microphone: 'Built-in mic monitoring',
            Simulated_surround_sound: 'HyperX 7.1 surround sound',
            Noise_cancelling: 'Passive noise cancelling',
        },
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        imgs: ['../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2.png', '../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-2.png',
        '../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-3.png','../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-4.png','../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-5.png']
    },

    {
        id: 29,
        img: '../../image/Headphones/Apple-AirPo-Max/Apple-AirPo-Max-2.jpg',
        name: 'Apple AirPods Max',
        des: 'Sky Blue',
        oldPrice: 549,
        newPrice: 449,
        price: 449,
        discount_title: '',
        save: 'You save: £100',
        sale: '18%',
        description: {
            Noise_cancelling: 'Active Noise Cancellation',
            Wired_or_Wireless: 'Up to 20 hours of listening call on a single charge',
            Function: 'Transparency mode, Adaptive EQ, Intuitive Digital Crown Control',
            Quality:  'Rich, high-quality audio and voice',      
            Colour: 'Blue',
        },
        imgs: ['../../image/Headphones/Apple-AirPo-Max/Apple-AirPo-Max-1.jpg', '../../image/Headphones/Apple-AirPo-Max/Apple-AirPo-Max-2.jpg',
        '../../image/Headphones/Apple-AirPo-Max/Apple-AirPo-Max-3.jpg']
    },
    {
        id: 30,
        img: '../../image/Headphones/Sony_Wireless/Sony_Wireless_1.jpg',
        name: 'Sony WH1000XM3',
        des: 'Wireless Noise Cancelling Headphones',
        oldPrice: 149,
        newPrice: 99,
        price: 99,
        discount_title: '',
        save: 'You save: £50',
        sale: '33%',
        description: {
            Noise_cancelling: 'Automatic Artifical Intelligences Noise Cancelling',
            Wired_or_Wireless: 'Wireless, full time charge 3hours,  35 hours of battery life',
            Quick_charging: '10 Minutes charge for 60minutes playback',
            Voice_Assistant: 'hands free helps on Android and IOS',
            Earpads: 'Soft oval shaped earpads - All day comfort',
            Colour: 'White',
        },
        imgs: ['../../image/Headphones/Sony_Wireless/Sony_Wireless_1.jpg', '../../image/Headphones/Sony_Wireless/Sony_Wireless_2.jpg',
        '../../image/Headphones/Sony_Wireless/Sony_Wireless_3.jpg', '../../image/Headphones/Sony_Wireless/Sony_Wireless_4.jpg']
    },

    {
        id: 31,
        img: '../../image/Headphones/Logitech_G_Pro_Gen 2/Logitech_G_Pro_Gen 2_1.png',
        name: 'Logitech G Pro Gen 2',
        des: 'Gaming Headset',
        oldPrice: 94.95,
        newPrice: 78.95,
        price: 78.95,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £16',
        sale: '20%',
        description: {
            Wired_or_Wireless: 'Wired',
            Sound_Modes:'Surround Headset, 2.0 (Hardware), 7.1 (Software)',
            Microphone: 'Uni-directional Microphone, Removable Microphone, Flexible Microphone-arm',
            Simulated_surround_sound: 'DTS Headphone:X 7.1, DTS',
            Noise_cancelling: 'Active noise cancellation',
        },
        imgs: ['../../image/Headphones/Logitech_G_Pro_Gen 2/Logitech_G_Pro_Gen 2_1.png', '../../image/Headphones/Logitech_G_Pro_Gen 2/Logitech_G_Pro_Gen 2_2.png',
        '../../image/Headphones/Logitech_G_Pro_Gen 2/Logitech_G_Pro_Gen 2_3.png','../../image/Headphones/Logitech_G_Pro_Gen 2/Logitech_G_Pro_Gen 2_4.png']
    },

    {
        id: 32,
        img: '../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_1.png',
        name: 'Razer Kraken Tournament',
        des: 'Green',
        oldPrice: 83.99,
        newPrice: 78.99,
        price: 78.99,
        discount_title: '',
        save: 'You save: £5',
        sale: '6%',
        description: {
            Wired_or_Wireless: 'Wired',
            Sound_Modes:'2.0 (Hardware), Surround Headset',
            Microphone: 'Uni-directional Microphone, Retractable Microphone',
            Noise_cancelling: 'Passive noise cancellation',
        },
        imgs: ['../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_1.png', '../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_2.png',
        '../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_3.png','../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_4.png',
        '../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_5.png','../../image/Headphones/Razer_Kraken_Tournament/Razer_Kraken_Tournament_6.jpg']
    },

    {
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
    location.replace = 'https://zandar1.github.io/Project%20A/page/detail/detail1.html'
}
 
const renderList = (list) => {
    let str = "";
    list.forEach((item,index) => {  
        str += ` 
        <div onclick="setLocal(${index}, list_headphones)" class="item-card">
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
  filterList(list_headphones);

  