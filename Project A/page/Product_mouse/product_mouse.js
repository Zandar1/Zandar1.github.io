let list_item = $("#productlist_item");
let list_product_mouse =[
    {
        id: 2,
        img: '../../image/Mouse/logitech-g305/logitech-305-1.png',
        name: 'Logitech G305 Black',
        des: 'Wireless Gaming Mouse',
        oldPrice: '',
        newPrice: 41.98,
        price: 41.98,
        discount_title: '',
        save: '',
        sale: '',
        description: {
            Programmable_buttons: '6',
            Wired_or_Wireless: 'Wireless',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        imgs: ['../../image/Mouse/logitech-g305/logitech-305-1.png', '../../image/Mouse/logitech-g305/logitech-305-2.jpg', '../../image/Mouse/logitech-g305/logitech-305-3.jpg', '../../image/Mouse/logitech-g305/logitech-305-4.jpg', '../../image/Mouse/logitech-g305/logitech-305-5.jpg']
    },

    {
        id: 21,
        img: '../../image/Mouse/Logitech-G-Pro/Logitech-G-Pro-1.png',
        name: 'Logitech G Pro Hero',
        des: 'Pro series Gaming Mouse',
        oldPrice: 69.99,
        newPrice: 49.99,
        price: 49.99,
        discount_title: '',
        save: 'You save: £20',
        sale: '29%',
        description: {
            Programmable_buttons: '6',
            Wired_or_Wireless: 'Wired',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        imgs: ['../../image/Mouse/Logitech-G-Pro/Logitech-G-Pro-1.png', '../../image/Mouse/Logitech-G-Pro/Logitech-G-Pro-2.png',
        '../../image/Mouse/Logitech-G-Pro/Logitech-G-Pro-3.png', '../../image/Mouse/Logitech-G-Pro/Logitech-G-Pro-4.png']
    },
    {
        id: 22,
        img: '../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-1.jpg',
        name: 'M65 RGB ELITE Tunable',
        des: 'FPS Gaming Mouse',
        oldPrice: 59.99,
        newPrice: 55.99,
        price: 55.99,
        discount_title: '',
        save: 'You save: £4',
        sale: '7%',
        description: {
            Programmable_buttons: '8',
            Wired_or_Wireless: 'Wired',
            Mouse_Type: 'Optical',
            Colour: 'White',
        },
        imgs: ['../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-1.jpg', '../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-2.png',
        '../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-3.png', '../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-4.png', 
        '../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-5.png','../../image/Mouse/M65-RGB-ELITE/M65-RGB-ELITE-6.png']
    },

    {
        id: 23,
        img: '../../image/Mouse/Razer-DeathAdder/Razer-DeathAdder-1.jpg',
        name: 'Razer DeathAdder',
        des: 'Gaming Mouse',
        oldPrice: 51.97,
        newPrice: 27.97,
        price: 27.97,
        discount_title: '',
        save: 'You save: £24',
        sale: '7%',
        description: {
            Programmable_buttons: '5',
            Wired_or_Wireless: 'Wired',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        imgs: ['../../image/Mouse/Razer-DeathAdder/Razer-DeathAdder-1.jpg', '../../image/Mouse/Razer-DeathAdder/Razer-DeathAdder-2.jpg',
        '../../image/Mouse/Razer-DeathAdder/Razer-DeathAdder-3.jpg']
    },



]

var GBPFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });


  const setLocal = (index,product) => {
    let item = product[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.replace('https://zandar1.github.io/Project%20A/page/detail/detail1.html')
}
 
const renderList = (list,name) => {
    let str = "";
    list.forEach((item,index) => {  
        str += ` 
        <div onclick="setLocal('${index}', '${name}')" class="item-card">
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
  filterList(list_product_mouse);

  