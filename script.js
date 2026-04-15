function showSection(section){
    document.getElementById("about").style.display = "none";
    document.getElementById("market").style.display = "none";

    document.getElementById(section).style.display = "block";
}

function logout(){
    window.location.href = "index.html";
}

function showProduct(name){
    document.getElementById("popup").style.display = "block";
    document.getElementById("productName").innerText = name;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function beli(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("buyPopup").style.display = "block";
}

function closeBuy(){
    document.getElementById("buyPopup").style.display = "none";
}

function jualBarang(){
    alert("Silakan hubungi admin via WhatsApp: 085708829924 untuk konfirmasi penjualan.");
}
