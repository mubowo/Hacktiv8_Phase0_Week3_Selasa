



function balikString(inputString){

    // declaration
        var storeString;

    // initialization
        storeString = "";

    for(var i = inputString.length-1; i >= 0; i--){
        
        storeString = storeString + inputString[i];
        
    } return storeString;
    
}

console.log(balikString("hello world!"));
