let searchTimer
let myList = $('#my-list')
let myInput = $('#my-input')
let xmouse
let ymouse

/* let dataHistory = [
    {
        id : new Date().getTime(),
        label:'test1',
    }
] */

$('body').click((event) => {
    event.stopPropagation()
    event.preventDefault()
    xmouse = event.clientX
    ymouse = event.clientY
    /* console.log('x :>> ', x)
    console.log('y :>> ', y); */
    let widthList =myList.outerWidth();
    let heightList = myList.outerHeight();
    let offset = myList.offset();
    let top = offset.top;
    let left = offset.left;
    let right = left + widthList;

    // lay them kich thuoc offset o input
    let widthInput =myInput.outerWidth();
    let heightInput = myInput.outerHeight();
    let offsetInput = myInput.offset();
    let topInput = offsetInput.top;
    let leftInput = offsetInput.left;
    let rightInput = leftInput + widthInput

    // chuot trong o input
    if (ymouse >= topInput && ymouse <= (topInput + heightInput) && xmouse >= leftInput && xmouse <= rightInput) {
        myList.show()
    }else if(ymouse < top || ymouse > (heightList + top) || xmouse < left || xmouse > right){
        myList.hide()
    }
})

const getHistoryFromLocal = () =>{
    let data = localStorage.getItem('data-history') ? JSON.parse(localStorage.getItem('data-history')): []
    return data
}
const onSearch = (label) => {
    /* console.log('value :>> ', value); */
    // luu data vao local storage
    let newData = [...getHistoryFromLocal()]
    newData.unshift(
        {
            id: new Date().getTime(),
            label
        }
    )
    localStorage.setItem('data-history',JSON.stringify(newData))
    updateList()
}

const onChange = (event)=> {
   /*  console.log('event :>> ', event);
    if (!searchTimer){
        clearTimeout(searchTimer);
    }
    searchTimer=setTimeout(() =>{
        console.log('this is test')
    },2000); */
    if(event.which === 13){
        onSearch(event.target.value)
    }
}

const updateList = () => {
    myList.html('')
    doublearray()
    myList.show()
}



// dat 1 bien chua mang gia tri gi => undefined
// gan bien do vao function set timeout
// neu !biendo => khong lam gi
// nguoc lai co bien do thi thuc hien set timeout



// tao 1 array gom id va label goi ra dom ul 
// chay vong lap array roi sau do append vao ul
/* 
let array = [
    {
        id: 1,
        label: 'test1', 
    },
    {
        id: 2,
        label: 'test2',
    },
    {
        id: 3,
        label: 'test3',
    } 
] */



const doublearray = () =>{
    getHistoryFromLocal().forEach((item,index) =>{
        myList.append(`
        <li>
             <div class = 'clock'>clock</div>
              <div class = 'label'>${item.label}</div>
             <div data-id = "${item.id}"class = 'bin' onclick = 'handleDelete(this)'>Xoa</div>
             </li>
        `);
    })
}

const checkblur = (event) => {
    /* console.log('event :>> ', event);
    console.log('myList :>> ', myList); */
    /* domul.hide() */
    // lay cac kich thuoc can thiet
    /* let widthList =myList.width();
    let heightList = myList.height();
    let offset = myList.offset();
    let top = offset.top;
    let left = offset.left;
    let right = $(window).width() -left- widthList */

    // lay vi tri con tro chuot
    var x = event.clientX;
    var y = event.clientY;
 /*   console.log('x :>> ', x);
   console.log('y :>> ', y); */
}

const filterById = (id, arr) => {
    let index = arr.findIndex(item => item.id === Number(id))
    let newArr = [...arr]
    newArr.splice(index,1)
    return newArr
}

const handleDelete = (dom) =>{
    /* event.stopPropagation() */
    let id = dom.dataset.id
    let newData = filterById(id, [...getHistoryFromLocal()])
    localStorage.setItem('data-history',JSON.stringify(newData))
    updateList()
    /* let id = dom.dataset.id */  /* check lai cu phap */
}
// ham xoa khi click vao bin
// b1: lay data tu local = ham getHistoryFromLocal()
// b2 : tao 1 array moi clone tu buoc 1 
// b3: check xem user click vao item co id la gi , bang cach them data-id cho dom (dom)
// b4: filter data array tu local (loai tru phan tu co id duoc click)
// b5: update lai local storage

//  bai tap 
// cho 1 mang co 10 phan tu gom cac objec gom id name age
// cho id bat ki -> tim va xoa phan tu co trung id do trong mang

/* let arr = [
    {
        id : 10,
        name : 'a',
        age : 12,
    },

    {
        id : 19,
        name : 'b', 
        age : 31,
    },
    {
        id : 17,
        name : 'f', 
        age : 31,
    },
    {
        id : 23,
        name : 'c', 
        age : 31,
    },
    {
        id : 40,
        name : 'd', 
        age : 31,
    },
    {
        id : 6,
        name : 'e', 
        age : 31,
    }
]
const deleteitem = (id) => {
    let index = arr.findIndex(item => item.id === id)
    let newArr = [...arr]
    newArr.splice(index,1)
    return newArr
}
let result = deleteitem(40)
console.log('result :>> ', result); */