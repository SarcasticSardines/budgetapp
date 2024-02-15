import { savetolocalStorage, getlocalStorage, removefromlocalStorage } from "./localstorage.js";

let displayTotal = document.getElementById("displayTotal");
let shown = document.getElementById("shown");
let total = document.getElementById("total");
let setTotal = document.getElementById("setTotal");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let showFund = document.getElementById("showFund");

let moni = "";

setTotal.addEventListener("click", ()=>{
    displayTotal.innerHTML = "";
    bigMoney();
});

add.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        moni = add.value;
        addTransaction(e);
    }
});

subtract.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        moni = subtract.value;
        subTransaction(e);
    }
})

const bigMoney = () =>{
    moni = total.value;
    // let shown = document.createElement("h2");
    shown.textContent = moni;
    savetolocalStorage(moni);
    // displayTotal.append(shown);

    let col = document.createElement("div");
    col.className = "col-6";
    let colJr = document.createElement("div");
    colJr.className = "col-6";
    col.textContent = "Set Total Funds ";
    colJr.textContent = moni;
    let hr = document.createElement("hr");
    hr.className = "mt-2"

    showFund.append(col);
    showFund.append(colJr);
    showFund.append(hr);

}
bigMoney();

const addTransaction = () =>{

    let col = document.createElement("div");
    col.className = "col-6";
    let colJr = document.createElement("div");
    colJr.className = "col-6";
    col.textContent = "Funds Added";
    colJr.textContent = "+" + moni;
    let hr = document.createElement("hr");
    hr.className = "mt-2"

    showFund.append(col);
    showFund.append(colJr);
    showFund.append(hr);

}

const subTransaction = () =>{

    let col = document.createElement("div");
    col.className = "col-6";
    let colJr = document.createElement("div");
    colJr.className = "col-6";
    col.textContent = "Funds Removed";
    colJr.textContent = "-" + moni;
    let hr = document.createElement("hr");
    hr.className = "mt-2"

    showFund.append(col);
    showFund.append(colJr);
    showFund.append(hr);

}
// add func to manipulate total
// OR manipulate total inside add + subtract funcs
//manipulate localstorage variable