let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () =>{
    cart.classList.add('active')
}
closeCart.onclick = () =>{
    cart.classList.remove('active')
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready()
}

function ready(){
    var removeCartBtn = document.getElementsByClassName('cart-remove');
    for(var i = 0;i<removeCartBtn.length; i++){
        var button = removeCartBtn[i];
        button.addEventListener('click',removeCartItem);
    }

    var quantityInputs  = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i< quantityInputs; i++){
        var Input = quantityInputs[i];
        input.addEventListener('change',quantityChange);
    }
    var addCart  = document.getElementsByClassName('add-cart');
    for(var i = 0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click',addCartClicked);

}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
   totalupdate;
}

function quantityChange(event){
   var Input = event.target;
   if (isNaN(Input.value)||Input.value <=0){
    Input.value = 0;
   }
   totalupdate();
}

function addCartClicked(event){
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName('product-title');
    var price = shopProduct.getElementsByClassName('price').innerText;
    var productImg = shopProduct.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);
    totalupdate
}

function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartiItemName = cartItems.getAttributeNames('cart-product-title');
    for(var i = 0;i<cartiItemName.length;i++){
        if (cartiItemName[i].innerText == title){
            alert('anda telah memasukkan barang ini ke keranjang');
            return;
        }
    }
}
var cartBoxContent = ''

function totalupdate(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var jumlah = 0;
    for(var i = 0;i<cartBoxes.length;i++){
        var cartbox = cartBoxes;
        var priceElement = cartbox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat.apply(priceElement.innerHTML.replace("Rp",""));
        var quantity = quantityElement.value;
        total += price*quantity;

        document.getElementsByClassName('total-price')[0].innerHTML= 'Rp '+total;
    }
 }
}