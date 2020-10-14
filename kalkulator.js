function kali()
{

var kal = document.getElementById("kalkulator");
var a = parseFloat(kal.satu.value);
var b = parseFloat(kal.dua.value);

var total = a * b;

kal.hasil.value = total;
  console.log(kal.hasil.value)
}

function bagi()
{

var kal = document.getElementById("kalkulator");
var a = parseFloat(kal.satu.value);
var b = parseFloat(kal.dua.value);

var total = a / b;

kal.hasil.value = total;
  console.log(kal.hasil.value)
}

function tambah()
{

var kal = document.getElementById("kalkulator");
var a = parseFloat(kal.satu.value);
var b = parseFloat(kal.dua.value);

var total = a + b;

kal.hasil.value = total;
  console.log(kal.hasil.value)
}

function kurang()
{

var kal = document.getElementById("kalkulator");
var a = parseFloat(kal.satu.value);
var b = parseFloat(kal.dua.value);

var total = a - b;

kal.hasil.value = total;
  console.log(kal.hasil.value)
}

 

function pangkat()
{

var kal = document.getElementById("kalkulator");
var a = parseFloat(kal.satu.value);
var b = parseFloat(kal.dua.value);

var total = Math.pow(a,b);

kal.hasil.value = total;
  console.log(kal.hasil.value)
}

