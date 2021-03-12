function compute()
{   //get the value of principal
    var principal = parseInt(document.getElementById("principal").value)
    //check If the user entered zero or negative values 
    if(principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus() 
        return false
    }
    //get the value of rate
    var rate = parseFloat(document.getElementById("rate").value) ;
 
    //get the value of total number of years
    var years = parseInt(document.getElementById("years").value) ;
    
    //calculate interest
    var interest = principal * years * rate /100
    
    //convert the number of years to actual year
    var actualYearInfuture = new Date().getFullYear() + years - 1

    //send results to the <span> tag with id "result"
    document.getElementById("result").innerHTML = `If you deposit ${"<mark>"}${principal}${"</mark>"},${"<br>"}
                                                    at an interest rate of ${"<mark>"}${rate} %${"</mark>"} ${"<br>"}
                                                    You will receive an amount of ${"<mark>"}${interest}${"</mark>"}, ${"<br>"}
                                                     in the year ${"<mark>"}${actualYearInfuture}${"</mark>"};`
   
 
}

//reads the value of the range slider and displays it in rhe <span> tag adjacent to the slider
function showRange(){
    var rate = document.getElementById("rate");
    range.innerHTML = rate.value + "%"
  } 
 addEventListener("input", showRange)

 

        