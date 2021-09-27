let list_item = $("#productlist_item");
let list_product_keyboard =[
    {
        id: 41,
        img: '../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-1.jpg',
        name: 'Razer Tartarus Chroma',
        des: 'Expert Gaming Keyboard',
        oldPrice: 79.97,
        newPrice: 64.97,
        price: 64.97,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £15',
        sale: '19%',
        description: {
            Wired_or_Wireless: 'Wired',
            Keyboard_Technology:'Mechanical',
            Key: 'Anti-Ghosting, 25 fully programmable keys',
            Colour: 'Black',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-1.jpg', '../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-2.jpg',
         '../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-3.jpg', '../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-4.jpg',
        '../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-5.png','../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-6.jpg',
        '../../image/Keyboards/Razer-Tartarus-Chroma/Razer-Tartarus-Chroma-7.jpg'],
        brand: "Razer",
    },

    {
        id: 42,
        img: '../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-1.jpg',
        name: 'AKKO 3098 DS',
        des: 'Wired Mechanical Keyboard',
        oldPrice: 93.99,
        newPrice: 81.99,
        price: 81.99,
        discount_title: '',
        save: 'You save: £12',
        sale: '13%',
        description: {
            Wired_or_Wireless: 'Wired',
            Keyboard_Technology:'Mechanical',
            Number_of_Keys:	'98',
            Key: 'PBT Doubleshot Keycaps and Anti-Ghosting',
            Colour: 'Green',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-1.jpg', '../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-2.jpg',
        '../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-3.jpg', '../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-4.jpg',
        '../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-5.jpg','../../image/Keyboards/AKKO-3098-DS/AKKO-3098-DS-6.jpg']
    },
    {
        id: 43,
        img: '../../image/Keyboards/Ducky-One-2/Ducky-One-2-1.jpg',
        name: 'Ducky One 2 Phantom Black',
        des: 'Wired Mechanical Keyboard',
        oldPrice: 82.99,
        newPrice: 77.99,
        price: 77.99,
        discount_title: '',
        save: 'You save: £5',
        sale: '6%',
        description: {
            Switch: 'Cherry MX',
            Wired_or_Wireless: 'Wired',
            Key: 'PBT Doubleshot Keycaps and Anti-Ghosting',
            Colour: 'Black',
            Warranty: '1 year',
        },
        imgs: ['../../image/Keyboards/Ducky-One-2/Ducky-One-2-1.jpg', '../../image/Keyboards/Ducky-One-2/Ducky-One-2-2.jpg',
        '../../image/Keyboards/Ducky-One-2/Ducky-One-2-3.jpg', '../../image/Keyboards/Ducky-One-2/Ducky-One-2-4.jpg', 
        '../../image/Keyboards/Ducky-One-2/Ducky-One-2-5.jpg']
    },

    {
        id: 44,
        img: '../../image/Keyboards/Logitech-G913/Logitech-G913-1.png',
        name: 'Logitech G913',
        des: 'TKL LIGHTSPEED Wireless Clicky',
        oldPrice: 177.97,
        newPrice: 144.97,
        price: 144.97,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £33',
        sale: '19%',
        description: {
            Switch:	'GL (Clicky / Tactile / Linear)',
            LED:'Lightsync RGB',
            Wired_or_Wireless: 'Wireless up to 40 hours',
            Number_of_Keys:	'87 + 9 function keys ',
            Colour: 'Black',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/Logitech-G913/Logitech-G913-1.png', '../../image/Keyboards/Logitech-G913/Logitech-G913-2.png',
        '../../image/Keyboards/Logitech-G913/Logitech-G913-3.png','../../image/Keyboards/Logitech-G913/Logitech-G913-4.png',
        '../../image/Keyboards/Logitech-G913/Logitech-G913-5.png']
    },

    {
        id: 45,
        img: '../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-1.png',
        name: 'Corsair K63',
        des: 'Wireless Mechanical Gaming Keyboard',
        oldPrice: 96.99,
        newPrice: 83.99,
        price: 83.99,
        discount_title: '',
        save: 'You save: £13',
        sale: '13%',
        description: {
            Switch:	'Cherry MX Red Mechanical',
            Number_of_Keys:	'87',
            Wired_or_Wireless: 'Wireless Bluetooth 4.2/ USB 3.0',
            Key: 'ABS and Anti-Ghosting',
            Size: 'TKL',
            Colour: 'Black',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-1.png', '../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-2.png',
        '../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-3.png','../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-4.png',
        '../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-5.png','../../image/Keyboards/Corsair-K63-Wireless/Corsair-K63-Wireless-6.png']
    },

    {
        id: 46,
        img: '../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-1.png',
        name: 'HyperX Alloy Core RGB',
        des: 'Membrane Gaming Keyboard',
        oldPrice: 44.99,
        newPrice: 31.99,
        price: 31.99,
        discount_title: '',
        save: 'You save: £13',
        sale: '29%',
        description: {
            Number_of_Keys:	'115',
            Wired_or_Wireless: 'Wired',
            Key: 'Quiet, responsive keys with anti-ghosting functionality',
            Function: 'Spill resistant,Keyboard Lock Mode',
            Size: 'Full size',
            Colour: 'Black',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-1.png', '../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-2.jpg',
        '../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-3.jpg','../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-4.jpg',
        '../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-5.jpg','../../image/Keyboards/HyperX-Alloy-Core-RGB/HyperX-Alloy-Core-RGB-6.jpg']
    },

    {
        id: 47,
        img: '../../image/Keyboards/iKBC-CD87-PD/iKBC-CD87-PD-1.jpg',
        name: 'iKBC CD87 PD',
        des: 'Wired Mechanical Keyboard',
        oldPrice: 60.97,
        newPrice: 54.97,
        price: 54.97,
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: 'You save: £6',
        sale: '10%',
        description: {
            Switch:	'Cherry Blue/ Red/ Brown',
            Number_of_Keys:	'87',
            Wired_or_Wireless: 'Wired',
            Key: 'PBT Doubleshot Keycaps and Anti-Ghosting',
            Size: 'TKL',
            Colour: 'Black',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/iKBC-CD87-PD/iKBC-CD87-PD-1.jpg', '../../image/Keyboards/iKBC-CD87-PD/iKBC-CD87-PD-2.jpg',
        '../../image/Keyboards/iKBC-CD87-PD/iKBC-CD87-PD-3.jpg','../../image/Keyboards/iKBC-CD87-PD/iKBC-CD87-PD-4.jpg']
    },

    {
        id: 48,
        img: '../../image/Keyboards/Steelseries-Apex-3/Steelseries-Apex-3-1.jpg',
        name: 'Steelseries Apex 3',
        des: 'Water resistant gaming keyboard',
        oldPrice: 52.99,
        newPrice: 43.99,
        price: 43.99,
        discount_title: '',
        save: 'You save: £9',
        sale: '17%',
        description: {
            Switch:	'SteelSeries Whisper-Quiet Switches',
            Number_of_Keys:	'104',
            LED: 'Customizable 10-zone RGB illumination reacts to games and Discord',
            Function: 'IP32 water resistant for protection against spills',
            Wired_or_Wireless: 'Wired',
            Key: 'ABS',
            Size: 'Full size',
            Colour: 'Black',
            Warranty: '2 year',
        },
        imgs: ['../../image/Keyboards/Steelseries-Apex-3/Steelseries-Apex-3-1.jpg', '../../image/Keyboards/Steelseries-Apex-3/Steelseries-Apex-3-2.jpg',
        '../../image/Keyboards/Steelseries-Apex-3/Steelseries-Apex-3-3.jpg','../../image/Keyboards/Steelseries-Apex-3/Steelseries-Apex-3-4.jpg',
        '../../image/Keyboards/Steelseries-Apex-3/Steelseries-Apex-3-5.jpg']
    },


    {
        id: 49,
        img: '../../image/Keyboards/Logitech-MK540/Logitech-MK540-1.jpg',
        name: 'Logitech MK540',
        des: 'Advanced Wireless Keyboard and Mouse',
        oldPrice: 75.97,
        newPrice: 58.97,
        price: 58.97,
        discount_title: '',
        save: 'You save: £17',
        sale: '25%',
        description: {
            Programmable_buttons: '6',
            Wired_or_Wireless: 'Wireless',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        imgs: ['../../image/Keyboards/Logitech-MK540/Logitech-MK540-1.jpg', '../../image/Keyboards/Logitech-MK540/Logitech-MK540-2.jpg',
        '../../image/Keyboards/Logitech-MK540/Logitech-MK540-3.jpg']
    },


]

var GBPFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });


  const setLocal = (index,list) => {
    let item = list[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.href = 'https://zandar1.github.io/Project%20A/page/detail/detail1.html'
}
 
const renderList = (list) => {
    let str = "";
    list.forEach((item,index) => { 
        str += ` 
        <div onclick="setLocal(${index},list_product_keyboard)" class="item-card">
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
  filterList(list_product_keyboard);

  let filters = {
    price: -1,
    new: -1,
    brand: -1,
    rangePrice: {
      from: -1,
      to: -1
    }
  };

  const handleFilterBrands= (data, order) => {
    let newData;
    if (order === 1) {
      newData = data.filter((item) => {
        return item.brandNew === "Denon";
      });
    }
    if (order === 2) {
      newData = data.filter((item) => {
        return item.brandNew === "Pioneer";
      });
    }
    if (order === 3) {
      newData = data.filter((item) => {
        return item.brandNew === "Numark";
      });
    }
    if (order === 4) {
      newData = data.filter((item) => {
        return item.brandNew === "Akai";
      });
    }
    return newData;
  };

  const handleFilter = () => {
    // làm nhiệm vụ filter theo object filters
    let newData = [...list_product_keyboard];
    for (let f in filters) {
      if (filters[f] === -1) {
        delete filters[f];
      }
    }}

  const filterBrands = (dom) => {
    const order = +dom.value
    filters.brandNew = order;
    handleFilter();
  };