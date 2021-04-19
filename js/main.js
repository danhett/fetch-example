/* insert interactivity here! */

window.addEventListener("load", () => {  
  let loc = "Manchester,uk";
  let key = "XXXXXX"
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
  

  fetch(url)
  .then(response => response.json())
  .then(data => processData(data));
})

function processData(data) {
  // get the part we need, which is today's description text
  let responseText = data.weather[0].description.toLowerCase();

  // check to see if the text is present.
  if(responseText.indexOf("rain") == -1) {
    console.log("It is not raining.");
  }
  else {
    console.log("It is raining.");
  }

  // OTHER WAYS TO DO THIS:
  // - check weather code range (see docs)
  // - check precipitation level etc
  // but you get the idea. :)
}