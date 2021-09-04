let products_popular = [
    {
        id: 1,
        img: '../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-1.jpg',
        name: 'Microsoft Surface Pro 7',
        des: '12.3" i7-1065G7 16GB RAM ',
        oldPrice: '£1448.97',
        newPrice: '£1219.97',
        price: '£1219.97',
        description: {
            Processor: 'Intel Core i7',
            Screen_size: '12.3 inch',
            SSD: '256GB',
            Warranty: '1 year',
            Ram: '16GB',
        },
        discount_title: '',
        save: '£229',
        sale: '16%',
        imgs: ['../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-1.jpg', '../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-2.jpg', '../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-3.jpg','../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-4.jpg','../../image/Microsoft-Surface-i7/Microsoft -Surface-i7-5.jpg'],
    },
    {
        id: 2,
        img: '../../image/Mouse/logitech-g305/logitech-305-1.jpg',
        name: 'Logitech G305 Black',
        des: 'Wireless Gaming Mouse',
        oldPrice: '',
        newPrice: '£41.98',
        price: '£41.98',
        description: {
            Programmable_buttons: '6',
            Wired_or_Wireless: 'Wireless',
            Mouse_Type: 'Optical',
            Colour: 'Black',
        },
        discount_title: '',
        save: '',
        sale: '',
        imgs: ['../../image/Mouse/logitech-g305/logitech-305-1.jpg', '../../image/Mouse/logitech-g305/logitech-305-2.jpg', '../../image/Mouse/logitech-g305/logitech-305-3.jpg', '../../image/Mouse/logitech-g305/logitech-305-4.jpg', '../../image/Mouse/logitech-g305/logitech-305-5.jpg']
    },
    {
        id: 3,
        img: '../../image/acer-nitro-5/nitro-5-1.jpg',
        name: 'Acer Nitro 5 AN515',
        des: '15.6" i5-10300H 8GB 512GB GTX 1660Ti',
        oldPrice: '£869.97',
        newPrice: '£699.97',
        price: '£699.97',
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
        save: '£170',
        sale: '11%',
        imgs: ['../../image/acer-nitro-5/nitro-5-1.jpg', '../../image/acer-nitro-5/nitro-5-2.jpg', '../../image/acer-nitro-5/nitro-5-3.jpg', '../../image/acer-nitro-5/nitro-5-4.jpg','../../image/acer-nitro-5/nitro-5-4.jpg','../../image/acer-nitro-5/nitro-5-5.jpg','../../image/acer-nitro-5/nitro-5-6.jpg','../../image/acer-nitro-5/nitro-5-7.jpg']
    },
    {
        id: 4,
        img: '../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2.png',
        name: 'HyperX Cloud II',
        des: 'Wireless Gaming Headset',
        oldPrice: '£149.99',
        newPrice: '£104.99',
        price: '£104.99',
        discount_title: '',
        description: {
            Wired_or_Wireless: 'Low-latency 2.4 GHz Wireless with long-lasting battery life',
            Microphone: 'Built-in mic monitoring',
            Simulated_surround_sound: 'HyperX 7.1 surround sound',
            Noise_cancelling: 'Passive noise cancelling',
        },
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: '£45',
        sale: '43%',
        imgs: ['../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2.png', '../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-2.png',
        '../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-3.png','../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-4.png','../../image/Headphones/hyperx-cloud-2/hyperx-cloud-2-5.png']
    },
    {
        id: 5,
        img: '../../image/Macbook-air-13/macbook-air-13-1.jpg',
        name: 'Apple MacBook Air 13',
        des: '13" Apple M1 8GB 256GB SSD',
        oldPrice: '£1099.97',
        newPrice: '£899.97',
        price: '£899.97',
        description: {
            Processor: 'M1',
            Screen_size: '13.3 Inch 2560 x 1600',
            SSD: '256 GB',
            Ram: '8GB',
            Warranty: '1 year',
            Operating_System: 'MacOS',
        },
        discount_title: '<i class="fas fa-fire"></i> SELLING FAST! Less than 10 remaining',
        save: '£200',
        sale: '18%',
        imgs: ['../../image/Macbook-air-13/macbook-air-13-1.jpg', '../../image/Macbook-air-13/macbook-air-13-2.jpg', '../../image/Macbook-air-13/macbook-air-13-3.jpg']
    },
]


let business_product = [
    {
        id: 6,
        img: '../../image/Dell-Latitude-3520/Dell-Latitude-3520-1.jpg',
        name: 'Dell Latitude 3520',
        des: '15.6" i5-10210U 8GB 256GB SSD',
        oldPrice: '£769.97',
        newPrice: '£709.97',
        price: '£709.97',
        save: '£60',
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
        imgs: ['../../image/Dell-Latitude-3520/Dell-Latitude-3520-1.jpg', '../../image/Dell-Latitude-3520/Dell-Latitude-3520-2.jpg', 
        '../../image/Dell-Latitude-3520/Dell-Latitude-3520-3.jpg','../../image/Dell-Latitude-3520/Dell-Latitude-3520-4.jpg',
        '../../image/Dell-Latitude-3520/Dell-Latitude-3520-5.jpg','../../image/Dell-Latitude-3520/Dell-Latitude-3520-6.jpg']
    },

    {
        id: 7,
        img: '../../image/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-1.jpg',
        name: 'HP ZBook Firefly 15 G7',
        des: '15.6" i7-10510U 16GB 512GB SSD ',
        oldPrice: '£1508.97',
        newPrice: '£1429.97',
        price: '£1429.97',
        save: '£79',
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
        imgs: ['../../image/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-1.jpg','../../image/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-2.jpg',
        '../../image/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-3.jpg','../../image/HP-ZBook-Firefly-15/HP-ZBook-Firefly-15-4.jpg'],
    },
    {
        id: 8,
        img: '../../image/Lenovo-V14-ADA/Lenovo-V14-ADA-1.jpg',
        name: 'Lenovo V14-ADA',
        des: ' 14" Ryzen 3 3250U 8 GB RAM 256 GB SSD',
        oldPrice: '£489.97',
        newPrice: '£447.97',
        price: '£447.97',
        sale: '9%',
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
        imgs: ['../../image/Lenovo-V14-ADA/Lenovo-V14-ADA-1.jpg','../../image/Lenovo-V14-ADA/Lenovo-V14-ADA-2.jpg'
                ,'../../image/Lenovo-V14-ADA/Lenovo-V14-ADA-3.jpg','../../image/Lenovo-V14-ADA/Lenovo-V14-ADA-4.jpg']
    },
    {
        id: 9,
        img: '../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-1.jpg',
        name: 'Asus ExpertBook P2',
        des: '14" i5-10210U 8GB 256GB SSD',
        oldPrice: '£753.97',
        newPrice: '£594.97',
        price: '£594.97',
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
        imgs: ['../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-1.jpg','../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-2.jpg',
        '../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-3.jpg','../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-4.jpg',
        '../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-5.jpg','../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-6.jpg',
        '../../image/Asus-ExpertBook-P2/Asus-ExpertBook-P2-7.jpg',]
    },
    {
        id: 10,
        img: '../../image/Acer-TravelMate-P2/Acer-TravelMate-P2.png',
        name: 'Acer TravelMate P2',
        des: ' 15.6" i7-10510U 8GB 512GB SSD',
        oldPrice: '£789.97',
        newPrice: '£699.97',
        price: '£699.97',
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
        imgs:['../../image/Acer-TravelMate-P2/Acer-TravelMate-P2.png','../../image/Acer-TravelMate-P2/Acer-TravelMate-P2-2.jpg',
        '../../image/Acer-TravelMate-P2/Acer-TravelMate-P2-3.jpg','../../image/Acer-TravelMate-P2/Acer-TravelMate-P2-4.jpg',
        '../../image/Acer-TravelMate-P2/Acer-TravelMate-P2-5.jpg']
    },
]

let gaming_product = [
    {
        id: 11,
        img: '../../image/Lenovo-Legion-5/Lenovo-Legion-5.jpg',
        name: 'Lenovo Legion 5',
        des: '15.6" Ryzen 5 Full HD GeForce RTX 3060 6GB',
        oldPrice: '£979.97',
        newPrice: '£899.97',
        price: '£699.97',
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
        imgs: ['../../image/Lenovo-Legion-5/Lenovo-Legion-5.jpg','../../image/Lenovo-Legion-5/Lenovo-Legion-5-2.jpg',
        '../../image/Lenovo-Legion-5/Lenovo-Legion-5-3.jpg','../../image/Lenovo-Legion-5/Lenovo-Legion-5-4.jpg',
        '../../image/Lenovo-Legion-5/Lenovo-Legion-5-5.jpg','../../image/Lenovo-Legion-5/Lenovo-Legion-5-6.jpg']
    },
    {
        id: 12,
        img: '../../image/Acer-ntro-5-2/acer-nitro-5-1.png',
        name: 'Acer Nitro 5',
        des: '15.6" Ryzen 7 5800H 16 GB 1TB SSD RTX 3060 6GB',
        oldPrice: '£1169.97',
        newPrice: '£1099.97',
        price: '£1099.97',
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
        imgs: ['../../image/Acer-ntro-5-2/acer-nitro-5-1.png','../../image/Acer-ntro-5-2/acer-nitro-5-2.png',
        '../../image/Acer-ntro-5-2/acer-nitro-5-3.png','../../image/Acer-ntro-5-2/acer-nitro-5-4.png',
        '../../image/Acer-ntro-5-2/acer-nitro-5-5.png','../../image/Acer-ntro-5-2/acer-nitro-5-6.png']
    },
    {
        id: 13,
        img: '../../image/Asus-ROG-G531/Asus-ROG-G531-1.jpg',
        name: 'Asus ROG Strix G G531',
        des: '15.6" i7-9750H 8GB 512GB SSD GTX 1660Ti ',
        oldPrice: '£1199.97',
        newPrice: '£899.97',
        price: '£899.97',
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
        imgs: ['../../image/Asus-ROG-G531/Asus-ROG-G531-1.jpg','../../image/Asus-ROG-G531/Asus-ROG-G531-2.jpg',
        '../../image/Asus-ROG-G531/Asus-ROG-G531-3.jpg','../../image/Asus-ROG-G531/Asus-ROG-G531-4.jpg',
        '../../image/Asus-ROG-G531/Asus-ROG-G531-5.jpg','../../image/Asus-ROG-G531/Asus-ROG-G531-6.jpg']
    },
    {
        id: 14,
        img: '../../image/MSI-katana-GF66/MSI-katana-GF66-1.png',
        name: 'MSI Katana GF66',
        des: '15.6" i5-11400H 8GB 512GB SSD 144Hz GTX 1650 4GB',
        oldPrice: '',
        newPrice: '£699.97',
        price: '£699.97',
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
        imgs: ['../../image/MSI-katana-GF66/MSI-katana-GF66-1.png','../../image/MSI-katana-GF66/MSI-katana-GF66-2.png',
        '../../image/MSI-katana-GF66/MSI-katana-GF66-3.png','../../image/MSI-katana-GF66/MSI-katana-GF66-4.png',
        '../../image/MSI-katana-GF66/MSI-katana-GF66-5.png','../../image/MSI-katana-GF66/MSI-katana-GF66-6.png']
    },
    {
        id: 15,
        img: '../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-1.jpg',
        name: 'Lenovo Legion 7 15IMHg05',
        des: ' 15.6" i7-10875H 144Hz RTX 2070 Super Max-Q 8GB',
        oldPrice: '£1895.97',
        newPrice: '£1299.97',
        price: '£1299.97',
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
        igms: ['../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-1.jpg','../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-2.jpg',
        '../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-3.jpg','../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-4.jpg',
        '../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-5.jpg','../../image/Lenovo-Legion 7-15IMHg05/Lenovo-Legion 7-15IMHg05-6.jpg']
    },
]

let monitors =[
    {
        id: 16,
        img: '../../image/Monitors/BenQ-ZOWIE-XL2411K/BenQ-ZOWIE-XL2411K-1.png',
        name: 'BenQ ZOWIE XL2411K',
        des: '24" 144Hz Full HD e-Sports Monitor',
        oldPrice: '£299.97',
        newPrice: '£184.97',
        price: '£184.97',
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
        oldPrice: '£164.97',
        newPrice: '£144.97',
        price: '£1299.97',
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
        oldPrice: '',
        newPrice: '£809.97',
        price: '£809.97',
        sale: '',
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
        oldPrice: '£184.97',
        newPrice: '£149.97',
        price: '£149.97',
        sale: '19%',
        description: {
            Screen_size: '27 Inch',
            Response_time: '4MS',
            Refresh_Rate: '75Hz', 
            Resolution: '1920 x 1080 Full HD Resolution',
            Panel_type: 'IPS',
            Warranty: '3 years',
            Ports: 'HDMI VGA',
        },
        igms: ['../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-1.jpg','../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-2.jpg',
        '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-3.jpg','../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-4.jpg',
        '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-5.jpg','../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-6.jpg',
        '../../image/Monitors/Lenovo-ThinkVision-S27i-10/Lenovo-ThinkVision-S27i-10-7.jpg']
    },
   
    {
        id: 20,
        img: '../../image/Monitors/Samsung-S32R750U-32/Samsung-S32R750U-32-1.png',
        name: 'Samsung S32R750U 32"',
        des: '4K Ultra HD Clamp-Type Monitor ',
        oldPrice: '£429.97',
        newPrice: '£329.97',
        price: '£329.97',
        sale: '23%',
        description: {
            Screen_size: '32 Inch',
            Response_time: '4MS',
            Refresh_Rate: '60Hz', 
            Resolution: '3840 x 2160 Ultra HD 4K Resolution',
            Panel_type: 'VA',
            Warranty: '2 years',
            Ports: 'HDMI',
    },
},
]


let category = $('#category')

const showTitle = (title, idShow) => {
    category.append(`
 
    <div id="all-product">
    <div class = "new-product">
    <div class="new-product-title">
        ${title}
    </div>
    <div class="view-all">
        <span class = "view-all-products">Browse all products</span>
        <i class="fal fa-angle-right"></i>
    </div>
    </div>

    <div class="show-item">
    <div class="container">
        <div class="row" id="${idShow}">
        </div>
    </div>
    </div>
    </div>
`)
}
showTitle('Most popular', 'show-item-1')

const setLocal = (index, product) => {
    let item = product[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.replace('https://zandar1.github.io/Project%20A/page/detail/detail1.html')
}

const showProduct = (product, idShow, name) => {
    let showItem = $(`#${idShow}`)
    product.forEach((item, index) => {
        showItem.append(
            `
                <div onclick="setLocal(${index}, ${name})" class="col-xl-3 col-sm-6 col-md-3 width-col-cate">
               
                    <div class="item-card">
                    <div class="image-item">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="product-name">${item.name}</div>
                    <div class="description">${item.des}</div>
                    <div class="new-price">${item.newPrice}</div>
                    <div class = "reduction">
                            <div class = "old-price">${item.oldPrice}</div>
                            <span  style ="font-size: 20px; padding: 0 6px 0 6px;">/</span>
                            <div class = "sale-off"> Save ${item.sale}</div>
                        </div>
                </div>
                

            </div>
        `
        )
    })
}

showProduct(products_popular, 'show-item-1', 'products_popular')

showTitle('Business laptop', 'show-item-2')
showProduct(business_product, 'show-item-2', 'business_product')

showTitle('Laptop Gaming','show-item-3')
showProduct(gaming_product, 'show-item-3','gaming_product')

showTitle('Monitors','show-item-4')
showProduct(monitors, 'show-item-4','monitors')

$(document).load($(window).bind("resize", listenWidth));

    function listenWidth( e ) {
        if($(window).width()<720)
        {
       $(".view-all-products").html("<div>Browse all</div>");
        } 
    }








