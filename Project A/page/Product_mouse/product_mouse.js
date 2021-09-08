let list_item = $("#productlist_item");
let list_product_mouse =[
    {
        id: 2,
        img: '../../image/Mouse/logitech-g305/logitech-305-1.jpg',
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
        imgs: ['../../image/Mouse/logitech-g305/logitech-305-1.jpg', '../../image/Mouse/logitech-g305/logitech-305-2.jpg', '../../image/Mouse/logitech-g305/logitech-305-3.jpg', '../../image/Mouse/logitech-g305/logitech-305-4.jpg', '../../image/Mouse/logitech-g305/logitech-305-5.jpg']
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
]

var GBPFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });
