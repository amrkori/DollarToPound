let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

dollar.onkeyup = function(){
    pound.value = dollar.value * 46.84;
}

pound.onkeyup = function(){
    dollar.value = pound.value / 46.84;
}

