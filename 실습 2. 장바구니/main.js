let products = document.querySelectorAll(".product");
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let addToCartBtn = product.querySelector(".addCart");
    addToCartBtn.addEventListener("click", addToCart);
}

function addToCart(event) {
    let product = event.target.parentElement;
    let name = product.querySelector("span").textContent;
    let priceText = product.querySelector(".price").textContent; //문자열을 숫자로 반환
    let price = parseInt(priceText.slice(0, -1)); //"원" 뺴기
    // 문자열 자르기 - 뒤에서부터 (시작위치 , 종료 위치 - 1 )
    // 0  1  2  3  4  5
    // 자 바 스 크 립 트
    // -6 -5 -4 -3 -2 -1
    let quantity = parseInt(product.querySelector(".quantity").value);

    if (quantity > 0) {
        //장바구니 목록 추가
        let cartItem = document.createElement("li");
        cartItem.textContent =
            name + " [" + quantity + "개]  : " + price * quantity + "원";

        let cartList = document.querySelector(".cartList");
        cartList.appendChild(cartItem);

        //총 주문금액 수정
        let totalPriceElement = document.querySelector(".totalPrice");
        let totalPrice = parseInt(totalPriceElement.textContent.slice(0, -1));
        totalPrice += price * quantity;
        totalPriceElement.textContent = totalPrice + "원";
    }
}