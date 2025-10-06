const textareaDom = document.getElementById("textarea");
const currentAccount = document.getElementById("current-account");
const currentCash = document.getElementById("current-cash");
let totalAccount = 0;
let totalCash = 0;
let line = 0;

function handleBalanceChange(){
    totalAccount = parseFloat(currentAccount.value);
    totalCash = parseFloat(currentCash.value);
    line++;
    textareaDom.value += `${line}, Current account balance: ${totalAccount}, Current cash balance: ${totalCash}\n`;
}

const operationDom = document.getElementById("bank-select");
const quantityDom = document.getElementById("bank-quantity");

function handleOperation(){
    const quantity = parseFloat(quantityDom.value);

    if (operationDom.value == "Deposit" && quantity <= totalCash){
        totalAccount += quantity;
        totalCash -= quantity;
        line++;
        textareaDom.value += `${line}, Deposit: ${quantity}, Current account balance: ${totalAccount}, Current cash balance: ${totalCash}\n`;
    } else if (operationDom.value == "Withdraw" && quantity <= totalAccount){
        totalAccount -= quantity;
        totalCash += quantity;
        line++;
        textareaDom.value += `${line}, Withdraw: ${quantity}, Current account balance: ${totalAccount}, Current cash balance: ${totalCash}\n`;
    } else {
        line++;
        textareaDom.value += `${line}, ERROR\n`;
    }
}
