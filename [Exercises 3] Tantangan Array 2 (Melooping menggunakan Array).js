

var dataArr01 ="" ;
var dataArr02 ="";
var j = 0;

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]


function dataHandling(input) {
    
       
    for (var i = 0; i < input.length; i++) {

        
        for (j=0; j <= input.length; j++){
        
            dataArr01 = dataArr01 + input[i][j];
            
            switch (j){
                case 0 : console.log("Nomor Id : " + dataArr01); break;
                case 1 : console.log("Nama Lengkap : " + dataArr01); break;
                case 2 : dataArr02 = dataArr01; break;
                case 3 : console.log("TTL : "+ dataArr02 +" "+ dataArr01); break;
                case 4 : console.log("Hobi : " + dataArr01); break;
                default : ;
          
            }   dataArr01 = "";
                
        } console.log("");
       
    }  console.log("");
} 

dataHandling(input);
