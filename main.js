document.getElementById("phone-increase").addEventListener('click', function () {
    updatePrice("phone", true);
})
document.getElementById("phone-decrease").addEventListener('click', function () {
    updatePrice("phone", false);
})


// case

document.getElementById("case-increase").addEventListener('click', function () {
    updatePrice("case", true);
})
document.getElementById("case-decrease").addEventListener('click', function () {
    updatePrice("case", false);
})


function getInputValue(id) {
    let currentInput = document.getElementById(id);
    let currentInputNumber = parseInt(currentInput.value);
    return currentInputNumber;
}
function updatePrice(product, isIncrease) {
    const currentInputNumber = getInputValue(product + '-count');
    let inputNumberUpdate = currentInputNumber;
    if (isIncrease == true) {
        inputNumberUpdate = currentInputNumber + 1;
    }
    if (isIncrease == false && currentInputNumber > 0) {
        inputNumberUpdate = currentInputNumber - 1;
    }
    document.getElementById(product + '-count').value = inputNumberUpdate;
    let priceTotal = 0;
    if (product == 'phone') {
        priceTotal = inputNumberUpdate * 1219;
    }
    if (product == 'case') {
        priceTotal = inputNumberUpdate * 59;
    }
    document.getElementById(product + '-total').innerText = "$" +  priceTotal;
    calculateTotal();
}

function calculateTotal() {

    const phoneCount = getInputValue("phone-count");
    const caseCount = getInputValue('case-count');

    const subTotal = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById("sub-total").innerText = "$" + subTotal;

    const tax = subTotal / 10;
    document.getElementById('tax-amount').innerText = "$" + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('total').innerText = "$" + grandTotal;

}

function removeItem(item) {
    const productArea = document.getElementById(item + 'Cart');
    productArea.style.display = "none";
    if (item == 'phone') {
        const caseQuantity = getInputValue('case-count');
        const totalPrice = caseQuantity * 59;
        document.getElementById('sub-total').innerText = totalPrice;
        const tax = Math.round(totalPrice * 0.1);
        document.getElementById('tax-amount').innerText = tax;
        const grandTotal = totalPrice + tax;
        document.getElementById('total').innerText = grandTotal;
        document.getElementById('phone-count').value = 0;
        
    }
    else if (item == 'case') {
        const phoneQuantity = getInputValue("phone-count");
        const totalPrice = phoneQuantity * 1219;
        document.getElementById('sub-total').innerText = totalPrice;
        const tax = Math.round(totalPrice * 0.1);
        document.getElementById('tax-amount').innerText = tax;
        const grandTotal = totalPrice + tax;
        document.getElementById('total').innerText = grandTotal;
        document.getElementById('case-count').value = 0;
        
    }
}

// function calculateTotal(){
//     let phonePrice = document.querySelector("#phone-total").innerText;
//     let phonePriceNumber = parseFloat(phonePrice);
//     console.log(phonePriceNumber);

//     let phoneCasePrice = document.querySelector("#case-total").innerText;
//     let phoneCasePriceNumber = parseFloat(phoneCasePrice);
//     console.log(phoneCasePriceNumber);

//     let subtotal = document.querySelector("#sub-total");
//     subtotal.innerText = phonePriceNumber + phoneCasePriceNumber;

//     let subtotalAmount = document.querySelector("#sub-total").innerText;
//     let subtotalAmountNumber = parseFloat(subtotalAmount);
//     let tax = document.querySelector("#tax-amount");
//     taxAmount = (subtotalAmountNumber *10)/100;
//     tax.innerText = taxAmount;

//     let total = document.querySelector("#total");
//     total.innerText = subtotalAmountNumber + taxAmount;

// }
















// // phone price remove button event handler
// const phoneRemoveBtn = document.getElementById('remove-item1');
// phoneRemoveBtn.addEventListener('click', function(){
//     document.getElementById("phoneCart").style.display = "none";
//     amountRemove("phone-total");
// })

// // case price remove button event handler
// const caseRemoveBtn = document.getElementById("remove-item2");
// caseRemoveBtn.addEventListener('click', function(){
//     document.getElementById("caseCart").style.display = "none";
//     amountRemove("case-total");
// })

// // amount remove from subtotal and total
// function amountRemove(id){
//     const productTotalPrice = document.getElementById(id).innerText;
//     const productTotalPriceNumber = parseFloat(productTotalPrice);
//     const subtotal = document.getElementById('sub-total').innerText;
//     const subtotalNumber = parseFloat(subtotal);
//     const currentSubtotal = subtotalNumber - productTotalPriceNumber;
//     document.getElementById("sub-total").innerText = currentSubtotal;
//     const total = document.getElementById("total").innerText;
//     const totalNumber = parseFloat(total);
//     const currentTotal = totalNumber - productTotalPriceNumber;
//     document.getElementById("total").innerText = currentTotal;
// }








/*
function removeItem(removeId, id) {
    const removeBtn = document.getElementById(removeId);
    removeBtn.addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.remove();

        const changeCount = event.target.parentNode.children[0].children[1].value = 0;
        const productCount = getInputValue(id);
        let subTotal = 0;
        if (removeId == "remove-item1") {
            subTotal = (changeCount * 1219) + (productCount * 59);
        }
        else if (removeId == "remove-item2") {
            subTotal = (productCount * 1219) + (changeCount * 59);
        }
        else{

        }
        document.getElementById("sub-total").innerText = "$" + subTotal;
        const taxAmount = Math.round(subTotal / 10);
        document.getElementById('tax-amount').innerText = "$" + taxAmount;
        const grandTotal = subTotal + taxAmount;
        document.getElementById('total').innerText = "$" + grandTotal;

    })
}
removeItem("remove-item1", "case-count");
removeItem("remove-item2", "phone-count");






/*
function removeItem(id) {
    const removeBtn = document.getElementById("remove-item");
    removeBtn.addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.remove();
        event.target.parentNode.children[0].children[1].value = 0;

        const phnCount = event.target.parentNode.children[0].children[1].value = 0;;
        const casCount = getInputValue('case-count');

        const sbTotal = (phnCount * 1219) + (casCount * 59);
        document.getElementById("sub-total").innerText = sbTotal;

        const taxs = sbTotal / 10;
        document.getElementById('tax-amount').innerText = taxs;

        const grandTotals = sbTotal + taxs;
        document.getElementById('total').innerText = grandTotals;
    })
}
*/
