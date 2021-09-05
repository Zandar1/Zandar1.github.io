let bredCrumbs = $('#bred-crumbs');
let default_data_breadCrumbs = [
    {
        label: "Laptops",
        link:'#',
    },
    {
        label: "Business Laptop",
        link:'',
    }
]

let data_breadCrumbs = JSON.parse(localStorage.getItem('detail-bread-crumbs')) || default_data_breadCrumbs;

const renderBr =  () =>{
    let str = '<li class="breadcrumb-item"><a href="#">Home</a></li>';
    data_breadCrumbs.forEach((item,index) => {
        if (index === data_breadCrumbs.length - 1 ){
            str += `<li class="breadcrumb-item active" aria-current="page">${item.label}`
        } else{
            str += `<li class="breadcrumb-item" aria-current="page">${item.label}</li>`;
        }
    });
    return str;
}

breadCrumbs.append(`
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumbs">
        ${renderBr()}
        </ol>
    </nav>
`);
