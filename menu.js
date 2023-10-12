const data = [
    {
        id: 1,
        name: '經典漢堡套餐',
        eName: 'Classic Hamburger Package',
        img: './assets/product_1.png',
        price: 120,
        isOnFire: true
    },
    {
        id: 2,
        name: '英俊香腸',
        eName: 'Handsome Sausage',
        img: './assets/product_2.png',
        price: 1024,
        isOnFire: false
    },
    {
        id: 3,
        name: '漢堡兄弟',
        eName: 'Hamburg Brothers',
        img: './assets/product_3.png',
        price: 792,
        isOnFire: false
    },
    {
        id: 4,
        name: '完美願望',
        eName: 'Dragon Ball Package',
        img: './assets/product_4.png',
        price: 999999,
        isOnFire: false
    },
]
const list = document.querySelector(".category-main-items");
const cart = document.querySelector('.category-main-cart-round');
let cartNum = [];
let content = '';
function getData(){
    data.forEach(function(item){
        content += `<li class="category-main-items-card">
        <div class="category-main-items-card-top">
            <img src=${item.img} alt="" />
            <i class="fa-regular fa-heart card-top-icon"></i>
            ${
                item.isOnFire? `<div class="ribbon-wrap">
                <div class="ribbon">熱銷美食</div>
            </div>` : ``
            }
        </div>
        <div class="category-main-items-card-body">
            <h3>${item.name}<br /><span>${item.eName}</span></h3>
            <hr />
            <p>${item.price.toLocaleString()}</p>
            <button type="button" onclick="pushCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
        </div>
    </li>`
    })
    list.innerHTML = content;
}
function pushCart(name){
    cartNum.push(name)
    cart.textContent = cartNum.length;
}
const input = document.querySelector('#search')
function filterData(){
    let newData = data.filter(function(item){
        return item.name.includes(input.value) == 1 || item.eName.includes(input.value) == 1
    })
    content = '';
    newData.forEach(function(item){
        content += `<li class="category-main-items-card">
        <div class="category-main-items-card-top">
            <img src=${item.img} alt="" />
            <i class="fa-regular fa-heart card-top-icon"></i>
            ${
                item.isOnFire? `<div class="ribbon-wrap">
                <div class="ribbon">熱銷美食</div>
            </div>` : ``
            }
        </div>
        <div class="category-main-items-card-body">
            <h3>${item.name}<br /><span>${item.eName}</span></h3>
            <hr />
            <p>${item.price.toLocaleString()}</p>
            <button type="button" onclick="pushCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
        </div>
    </li>`
    })
    list.innerHTML = content;
}
getData();
