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
            Screen_size: '24 Inch',
            Response_time: '1MS',
            Refresh_Rate: '144Hz', 
            Resolution: '1920 x 1080',
            Panel_type: 'TN',
            Warranty: '1 year',
            Ports: 'HDMI DP1.2',
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
        img: '../../image/Monitors/BenQ-ZOWIE-XL2546K/BenQ-ZOWIE-XL2546K-1.jpg',
        name: 'BenQ ZOWIE XL2546K',
        des: '24.5" Full HD e-Sports Gaming Monitor',
        oldPrice: 539.97,
        newPrice: 429.97,
        price: 429.97,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £110',
        sale: '20%',
        description: {
            Screen_size: '24.5 Inch',
            Response_time: '1MS',
            Refresh_Rate: '240Hz', 
            Resolution: '1920x1080',
            Panel_type: 'TN',
            Warranty: '2 years',
            Ports: 'HDMI Displayport',    
        },
        imgs: ['../../image/Monitors/BenQ-ZOWIE-XL2546K/BenQ-ZOWIE-XL2546K-1.jpg', '../../image/Monitors/BenQ-ZOWIE-XL2546K/BenQ-ZOWIE-XL2546K-2.jpg',
        '../../image/Monitors/BenQ-ZOWIE-XL2546K/BenQ-ZOWIE-XL2546K-3.jpg','../../image/Monitors/BenQ-ZOWIE-XL2546K/BenQ-ZOWIE-XL2546K-4.jpg']
    },

    {
        id: 38,
        img: '../../image/Monitors/LG-32GN500-B/LG-32GN500-B-1.png',
        name: 'LG 32GN500-B',
        des: '31.5" IPS Full HD 165Hz Monitor',
        oldPrice: 384.97,
        newPrice: 199.97,
        price: 199.97 ,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £185',
        sale: '48%',
        description: {
            Screen_size: '32 Inch',
            Response_time: '1MS',
            Refresh_Rate: '165Hz', 
            Resolution: '1920x1080',
            Panel_type: 'VA',
            Warranty: '1 years',
            Ports: 'HDMI Displayport',    
        },
        imgs: ['../../image/Monitors/LG-32GN500-B/LG-32GN500-B-1.png', '../../image/Monitors/LG-32GN500-B/LG-32GN500-B-2.png',
        '../../image/Monitors/LG-32GN500-B/LG-32GN500-B-3.png','../../image/Monitors/LG-32GN500-B/LG-32GN500-B-4.png',
        '../../image/Monitors/LG-32GN500-B/LG-32GN500-B-5.png','../../image/Monitors/LG-32GN500-B/LG-32GN500-B-6.png']
    },

    {
        id: 39,
        img: '../../image/Monitors/AOC-CQ32G2SE/AOC-CQ32G2SE-1.jpg',
        name: 'AOC CQ32G2SE',
        des: '32" QHD 165Hz 1ms FreeSync Gaming Monitor',
        oldPrice: 424.97,
        newPrice: 319.97,
        price: 319.97,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £105',
        sale: '25%',
        description: {
            Screen_size: '32 Inch',
            Response_time: '1MS',
            Refresh_Rate: '165Hz', 
            Resolution: '2560x1440',
            Panel_type: 'VA',
            Warranty: '1 years',
            Ports: 'HDMI Displayport',    
        },
        imgs: ['../../image/Monitors/AOC-CQ32G2SE/AOC-CQ32G2SE-1.jpg', '../../image/Monitors/AOC-CQ32G2SE/AOC-CQ32G2SE-2.jpg',
        '../../image/Monitors/AOC-CQ32G2SE/AOC-CQ32G2SE-3.jpg','../../image/Monitors/AOC-CQ32G2SE/AOC-CQ32G2SE-4.jpg',
        '../../image/Monitors/AOC-CQ32G2SE/AOC-CQ32G2SE-5.jpg']
    },


    {
        id: 40,
        img: '../../image/Monitors/LG-27UL550/LG-27UL550-1.png',
        name: 'LG 27UL550',
        des: '27" IPS 4K UHD HDR Monitor',
        oldPrice: 359.97,
        newPrice: 229.97,
        price: 229.97,
        discount_title: '',
        save: 'You save: £130',
        sale: '36%',
        description: {
            Screen_size: '27 Inch',
            Response_time: '5MS',
            Refresh_Rate: '60Hz', 
            Resolution: '3840 x 2160 Ultra HD 4K Resolution',
            Panel_type: 'IPS',
            Warranty: '1 years',
            Ports: 'HDMI Displayport',  
        },
        imgs: ['../../image/Monitors/LG-27UL550/LG-27UL550-1.png', '../../image/Monitors/LG-27UL550/LG-27UL550-2.png',
        '../../image/Monitors/LG-27UL550/LG-27UL550-3.png','../../image/Monitors/LG-27UL550/LG-27UL550-4.png',
        '../../image/Monitors/LG-27UL550/LG-27UL550-5.png','../../image/Monitors/LG-27UL550/LG-27UL550-6.png']
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

  