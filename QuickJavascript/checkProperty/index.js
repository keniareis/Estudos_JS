const myCheckBox = document.getElementById('myCheckBox');
const VisaBtn = document.getElementById('VisaBtn');
const MastercardBtn = document.getElementById('MastercardBtn');
const PaypalBtn = document.getElementById('PaypalBtn');
const MySubmit = document.getElementById('MySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

MySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }else{
        subResult.textContent = "You are NOT subscribed";
    }

    if(VisaBtn.checked){
        paymentResult.textContent = "Payment method: Visa";
    }else if(MastercardBtn.checked){
        paymentResult.textContent = "Payment method: Mastercard";
    }else if(PaypalBtn.checked){
        paymentResult.textContent = "Payment method: PayPal";
    }else{
        paymentResult.textContent = "Payment method: None selected";
    }

}