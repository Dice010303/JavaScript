
//장바구니 담기

let num = document.querySelectorAll(".product")

for(let i=0;i<num.length ; i++) {
    let product = num[i];
    let addBtn = product.querySelector(".addCart");
    addBtn.addEventListener('click', addcart);
}

function addcart(event) {
    let product = event.target.parentElement;
    let product_name = product.querySelector("span").textContent;
    let price = product.querySelector(".price").textContent;
    let origin_price = price.slice(0,-1);
    let quantify = product.querySelector(".quantify").value;
    console.log(quantify);

    let result = document.createElement("li");
    result.textContent=product_name +"    "+ quantify + "개" +"     " + price;
    document.querySelector("ul").appendChild(result);
}