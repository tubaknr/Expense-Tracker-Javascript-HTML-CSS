//etrafına dikdörtgen çiz

document.getElementById("submit").onclick = function(){
    
    var table = document.getElementById("table"); //get from html document
    var namei = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;

    if(!namei=="" || !date=="" || !amount==""){ //if all of the inputs are not empty strings

        var celln = document.createElement("td"); //create a new data cell
        var celld = document.createElement("td");
        var cella = document.createElement("td");
        
        celln.innerHTML = namei; //td element's content = namei (which equals input given user)
        celld.innerHTML = date;
        cella.innerHTML = amount;
        
        var row = document.createElement("tr"); //create a new row element
        row.appendChild(celln); //add elements into the row
        row.appendChild(celld);
        row.appendChild(cella);
        
        table.appendChild(row); //add row into the table

        document.getElementById("name").value = ""; //delete the previous input for the new entry
        document.getElementById("date").value = "";
        document.getElementById("amount").value = "";
    }
}

