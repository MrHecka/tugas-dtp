var baris = 5;
var polaSamaDgn = "=";
var polaBintang = "*";
var spasi = "";

for (let index = baris; index > 0; index--) {

    var hasil = "";

    var jmlhCell = (index * 2) - 1;
    //console.log(jmlhCell);

    for (let index2 = jmlhCell; index2 > 0; index2--) {

        if ((index2 % 2) == 0) {
            hasil = hasil.concat(polaSamaDgn);
        } else {
            hasil = hasil.concat(polaBintang);
        }
    }


console.log(spasi + hasil);
spasi += " ";

}