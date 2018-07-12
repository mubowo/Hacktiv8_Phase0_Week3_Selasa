
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


//console.log(input);
function dataHandling2(input){
    
    var intInput = input;
    var monthName = "";
    var monthNumber;
    var monthNumberSplit;
    var monthValue;
    var monthDescending;
    var monthJoin;
    var maxCharacter;
    
    intInput.splice(1,1, "Roman Alamsyah Elsharawy");
    intInput.splice(2,1,"Provinsi Bandar Lampung");
       
    intInput.splice(4,1,"Pria","SMA International Metro");
    console.log(intInput);
    
    monthNumber = intInput[3];
    //console.log(monthNumber);
    monthNumberSplit = monthNumber.split("/");
    console.log(monthNumberSplit);
    monthValue = monthNumberSplit[1];
    //console.log(monthNumber);
    
    switch (monthValue) {
        case "01" : monthName = " Januari "; break;
        case "02" : monthName = " Februari "; break;
        case "03" : monthName = " Maret "; break;
        case "04" : monthName = " April "; break;
        case "05" : monthName = " Mei "; break;
        case "06" : monthName = " Juni "; break;
        case "07" : monthName = " Juli "; break;
        case "08" : monthName = " Agustus "; break;
        case "09" : monthName = " September "; break;
        case "10" : monthName = " Oktober "; break;
        case "11" : monthName = " November "; break;
        case "12" : monthName = " Desember "; break;
    }
    console.log(monthName);
    
    // Sorting
    //console.log(typeof monthNumber);
    monthDescending = monthNumberSplit.sort(function(a, b){ return b-a });
    console.log(monthDescending);
    
    // gabungkan semua elemen menggunakan join 
    // dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
    monthNumberSplit = monthNumber.split("/");
    monthJoint = monthNumberSplit.join("-");
    console.log(monthJoint);
    
    /*
    Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. 
    Gunakan slice untuk menghapus kelebihan karakter dan console.log nama 
    yang sudah di-slice, sebelum
    di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
    */
    maxCharacter = intInput[1].slice(0,15);
    console.log(maxCharacter);
    
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", 
 "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
