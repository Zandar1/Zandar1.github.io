let default_data_cart = [
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
      id: 2,
      name: "other product",
      discount_title: "SELLING FAST! Less than 10 remaining",
      price: 10000,
      description: {
        Graphic_card: "Radeon Graphics",
        Processor: "AMD Ryzen 7 5700 U",
        Screen_size: "15.6 inch Full HD Screen",
        SSD: "512 GB",
      },
      imgs: [
        "../../img/desktop-computer-500x500.jpeg",
        "../../img/desktop-computer2-500x500.jpeg",
      ],
    },
    {
      id: 1,
      name: "ok i = 1 nha",
      discount_title: "SELLING FAST! Less than 10 remaining",
      price: 40542,
      description: {
        Graphic_card: "Radeon Graphics",
        Processor: "AMD Ryzen 7 5700 U",
        Screen_size: "15.6 inch Full HD Screen",
        SSD: "512 GB",
      },
      imgs: [
        "../../img/desktop-computer-500x500.jpeg",
        "../../img/desktop-computer2-500x500.jpeg",
      ],
    },
    {
      id: 3,
      name: "this okla",
      discount_title: "SELLING FAST! Less than 10 remaining",
      price: 40542,
      description: {
        Graphic_card: "Radeon Graphics",
        Processor: "AMD Ryzen 7 5700 U",
        Screen_size: "15.6 inch Full HD Screen",
        SSD: "512 GB",
      },
      imgs: [
        "../../img/desktop-computer-500x500.jpeg",
        "../../img/desktop-computer2-500x500.jpeg",
      ],
    },
    {
      id: 1,
      name: "ok i = 1 nha",
      discount_title: "SELLING FAST! Less than 10 remaining",
      price: 40542,
      description: {
        Graphic_card: "Radeon Graphics",
        Processor: "AMD Ryzen 7 5700 U",
        Screen_size: "15.6 inch Full HD Screen",
        SSD: "512 GB",
      },
      imgs: [
        "../../img/desktop-computer-500x500.jpeg",
        "../../img/desktop-computer2-500x500.jpeg",
      ],
    },
    {
      id: 3,
      name: "this okla",
      discount_title: "SELLING FAST! Less than 10 remaining",
      price: 40542,
      description: {
        Graphic_card: "Radeon Graphics",
        Processor: "AMD Ryzen 7 5700 U",
        Screen_size: "15.6 inch Full HD Screen",
        SSD: "512 GB",
      },
      imgs: [
        "../../img/desktop-computer-500x500.jpeg",
        "../../img/desktop-computer2-500x500.jpeg",
      ],
    },
    {
      id: 3,
      name: "this okla",
      discount_title: "SELLING FAST! Less than 10 remaining",
      price: 40542,
      description: {
        Graphic_card: "Radeon Graphics",
        Processor: "AMD Ryzen 7 5700 U",
        Screen_size: "15.6 inch Full HD Screen",
        SSD: "512 GB",
      },
      imgs: [
        "../../img/desktop-computer-500x500.jpeg",
        "../../img/desktop-computer2-500x500.jpeg",
      ],
    },
  ];
  let infomatin_checkout = $("#infomatin_checkout");
  let list_cart = $("#list-cart");
  let data_cart = () => {
    return JSON.parse(localStorage.getItem("data-cart")) || default_data_cart;
  };
  
  // check cac id trung nhau, va loai bo no
  let list_data_duplicate = [];
  let list_no_duplicate = [];
  let list_duplicate_render = [];
  
  
  const renderCount = (item) => {
    let count = 0;
    //   console.log(`list_data_duplicate`, list_data_duplicate);
    list_data_duplicate.forEach((it) => {
      if (it.id === item.id) {
        count += 1;
      }
    });
    return count;
  };
  
  const updateLocal = (data) => {
    localStorage.setItem("data-cart", JSON.stringify(data));
    updateList();
  }
  const addProduct = (id) => {
    // tao ra arr moi va update lai local stogreate
  
    let index = data_cart().findIndex((item) => item.id === id);
    let item = data_cart()[index];
    let newData = [...data_cart()];
    newData.push(item)
    updateLocal(newData)
  };
  
  const handleDelete = (id) => {
    let index = data_cart().findIndex((item) => item.id === id);
    let newData = [...data_cart()];
    newData.splice(index, 1)
    return newData
  }
  const reduceProduct = (id) => {
    let newData = handleDelete(id)
    updateLocal(newData)
  }
  
  const deleteProduct = (id) => {
    let data = [...data_cart()]
    let newData =[]
    data.forEach(item => {
      if(+id !== +item.id) {
        newData.push(item)
      }
    });
    updateLocal(newData)
  }
  
  
  const append = (item, count) => {
    list_cart.append(`
    <li>
    <div class="left-li">
      <img src="${item.imgs[0]}" alt="" />
    </div>
  
    <div class="right-li">
      <div>${item.id}</div>
      <div>${item.name}</div>
      <div>${item.price}</div>
      <div>
        Quantity <button onclick="reduceProduct(${item.id})">-</button> ${count} <button onclick="addProduct(${item.id})">+</button>
      </div>
      <div onclick="deleteProduct(${item.id})">delete</div>
    </div>
  </li>
  `);
  }
  const totalPrice = () => {
    let price = 0;
    data_cart().forEach((item) => {
      price += item.price;
    });
    return price;
  };
  
  
  const updataCheckout = () => {
    infomatin_checkout.html("");
    infomatin_checkout.append(`
      <div>Basket detail</div>
      <div>Total quantity: ${data_cart().length}</div>
      <div>Total price : ${totalPrice()}</div>
      <div>Proceed to checkout</div>
  `);
  };
  
  const updateList = () => {
    list_cart.html("");
    let data = data_cart()
    data.forEach((item, index) => {
  
      let id = item.id
      let isExist = false
  
      if(index > 0) {
        for(let i = index-1; i>=0; i--) {
          if(id === data[i].id) {
            isExist = true
          }
        }
      }
      if(!isExist) {
        // neu khong trungg lap lapp-> thi moi append
        let count = 0
        for(let i = 0; i< data.length; i++) {
          if(data[i].id === id) {
            count ++
          }
        }
        append(item, count)
      }
    });
    updataCheckout();
  };
  updateList();
  
  
  
  