//components for item #1
function displayInformation() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let telephone = document.getElementById("telephone").value;
    let major = document.getElementById("major").value;

    let message = `Hello! ${name}, I see that you are from ${address} 
    and you are also pursuing your degree ${major} 
    and you can be contacted using ${telephone}.`;

    document.getElementById("output").innerText = message;
}

//components for item #2
function calculateProfit() {
        
    let totalSales = document.getElementById("totalSales").value;
    
    let profit = totalSales * 0.23;
    
    document.getElementById("profit")
    .innerText = "Projected Profit: $" + profit.toFixed(2);
}

//components for item #3
function calculateDistance() {
    let speed = 60;

    let distance5Hours = speed * 5;
    let distance8Hours = speed * 8;
    let distance12Hours = speed * 12;

    document.getElementById("distance5Hours")
    .innerText = "The distance the car will travel in 5 hours: " + distance5Hours + " miles";
    document.getElementById("distance8Hours")
    .innerText = "The distance the car will travel in 8 hours: " + distance8Hours + " miles";
    document.getElementById("distance12Hours")
    .innerText = "The distance the car will travel in 12 hours: " + distance12Hours + " miles";
}

// components for item #4
function calculateMPG() {

    let milesDriven = document.getElementById("milesDriven").value;
    let gallonsUsed = document.getElementById("gallonsUsed").value;

    let mpg = milesDriven / gallonsUsed;

    document.getElementById("mpgResult")
    .innerText = "Your car's MPG is: " + mpg.toFixed(2) + " miles per gallon";
}

//components for item #5
function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    
    let fahrenheit = (9/5) * celsius + 32;
    
    document.getElementById("fahrenheitResult")
    .innerText = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + "°F";
}

//COMPONENETS FOR ITEN #6
function calculateCalories() {
    const cookiesPerBag = 40;
    const servingsPerBag = 10;
    const caloriesPerServing = 300;
    
    const caloriesPerCookie = (caloriesPerServing * servingsPerBag) / cookiesPerBag;
    
    let cookiesEaten = document.getElementById("cookiesEaten").value;

    let totalCalories = cookiesEaten * caloriesPerCookie;

    document.getElementById("caloriesResult")
    .innerText = "Total calories consumed: " + totalCalories.toFixed(2) + " calories";
}

//components for item #7
function calculatePercentages() {
    let males = parseInt(document.getElementById("males").value);
    let females = parseInt(document.getElementById("females").value);

    let totalStudents = males + females;

    let malePercentage = (males / totalStudents) * 100;
    let femalePercentage = (females / totalStudents) * 100;

    document.getElementById("malePercentageResult")
    .innerText = "Percentage of males: " + malePercentage.toFixed(2) + "%";
    document.getElementById("femalePercentageResult")
    .innerText = "Percentage of females: " + femalePercentage.toFixed(2) + "%";
}