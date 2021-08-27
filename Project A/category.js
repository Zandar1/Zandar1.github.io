let products_popular = [
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T fake 1',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫',
        price: '23,990,000₫',
        description: {
            Graphic_card: 'Radeon Graphics eeee',
            Processor: 'AMD Ryzen 7 5700 U yyyyy',
            Screen_size: '15.6 inch Full HD Screen yyyyy',
            SSD: '512 GB',
            tung: 'i"m tung'
        },
        imgs: ['../../img/desktop-computer-500x500.jpeg', '../../img/desktop-computer2-500x500.jpeg', '../../img/img-cate.png']
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T fake 2',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫',
        price: '23,990,000₫',
        description: {
            Graphic_card: 'Radeon Graphics kkkkkk',
            Processor: 'AMD Ryzen 7 5700 U aaaaa',
            Screen_size: '15.6 inch Full HD Screen iiiii',
            SSD: '512 GB',
        },
        imgs: ['../../img/desktop-computer-500x500.jpeg', '../../img/desktop-computer2-500x500.jpeg', '../../img/img-cate.png']
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T fake 3',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫',
        price: '23,990,000₫',
        description: {
            Graphic_card: 'Radeon Graphics okkk1 ',
            Processor: 'AMD Ryzen 7 5700 U awesdf ',
            Screen_size: '15.6 inch Full HD Screen hhhhhh',
            SSD: '512 GB',
        },
        imgs: ['../../img/desktop-computer-500x500.jpeg', '../../img/desktop-computer2-500x500.jpeg', '../../img/img-cate.png']
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫',
        price: '23,990,000₫',
        description: {
            Graphic_card: 'Radeon Graphics',
            Processor: 'AMD Ryzen 7 5700 U',
            Screen_size: '15.6 inch Full HD Screen',
            SSD: '512 GB',
        },
        imgs: ['../../img/desktop-computer-500x500.jpeg', '../../img/desktop-computer2-500x500.jpeg', '../../img/img-cate.png']
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫',
        price: '23,990,000₫',
        description: {
            Graphic_card: 'Radeon Graphics',
            Processor: 'AMD Ryzen 7 5700 U',
            Screen_size: '15.6 inch Full HD Screen',
            SSD: '512 GB',
        },
        imgs: ['../../img/desktop-computer-500x500.jpeg', '../../img/desktop-computer2-500x500.jpeg', '../../img/img-cate.png']
    },
]
let business_product = [
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
]


let category = $('#category')

const showTitle = (title, idShow) => {
    category.append(`
 
    <div id="all-product">
    <div class="name-category">
        ${title}
    </div>
    <div class="go-to-all">
        <span>Browse all products</span>
        <span><i class="fal fa-angle-right"></i></span>
    </div>
    </div>

    <div class="show-item">
    <div class="container">
        <div class="row" id="${idShow}">
        </div>
    </div>

    </div>
`)
}
showTitle('Most popular', 'show-item-1')

const setLocal = (index, product) => {
    let item = product[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.replace('file:///Users/tungdev/Documents/ProjectWeb16/page/detail/index.html')
}

const showProduct = (product, idShow, name) => {
    let showItem = $(`#${idShow}`)
    product.forEach((item, index) => {
        showItem.append(
            `
                <div onclick="setLocal('${index}, ${name}')" class="col-xl-3 col-sm-6 col-md-3 width-col-cate">
               
                    <div class="item-card">
                    <div class="image">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="description">${item.des}</div>
                    <div class="name">${item.name}</div>
                    <div class="new-price">${item.oldPrice}</div>
                    <div class="old-price">${item.newPrice}</div>
                </div>
                

            </div>
        `
        )
    })
}

showProduct(products_popular, 'show-item-1', 'products_popular')

showTitle('Business laptop', 'show-item-2')
showProduct(business_product, 'show-item-2', 'business_product')