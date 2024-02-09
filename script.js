const celcus = document.getElementById("Celsius");
const feranite = document.getElementById("Fahrenheit");
const kalvin = document.getElementById("Kelvin");




function computeTemp(Event){
  const currentvalue = +Event.target.value

  switch (Event.target.name) {
    case "celsius":
      kalvin.value = (currentvalue + 273.32).toFixed(2)
      feranite.value = (currentvalue * 1.8 + 32).toFixed(2)
      break;
    case "Fahrenheit":
      celcus.value = ((currentvalue -32)/ 1.8).toFixed(2)
      kalvin.value = ((currentvalue - 32)/ 1.8 +32).toFixed(2)

      break;
      case "Kelvin":
      celcus.value = (currentvalue - 273.32).toFixed(2)
      feranite.value = ((value - 273.32)*1.8 +32).toFixed(2)
      
      break;

    default:
      break;
  }



}




// NOTE FOR THE JS---

// HOW THE SWITCH CSE  USED IN JS
// (TOFIXED) DATA IS USED
// HOW THE fix the data at To fix;


// {onchange="computeTemp(event)}
// this section is usrd to call a function into the HTML section;