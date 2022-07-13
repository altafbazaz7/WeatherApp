const form = document.querySelector("form")
const container = document.getElementById("container")
const API_KEY = "a875d8249d035b83ac81aafcbb773869"
const search = document.getElementById("search")
const details = document.getElementById("details")

const getData = async(city) => {
  details.innerHTML= `<h1>Loading...</h1>`
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  const actualResponse = await response.json()
  console.log(actualResponse);
  return showData(actualResponse)
}

// show data
const showData = (actualResponse) => {
    details.innerHTML = 
        `<h1>${actualResponse.main.temp}&#176 C</h1>
         </div>
         <div class="other-details">
         <div class="icon"><img src="https://openweathermap.org/img/wn/${actualResponse.weather[0].icon}@2x.png" alt="#"></div>  
         <h2 class="condition">${actualResponse.weather[0].main}</h2> `                         
}





form.addEventListener("submit", (event) =>{
    getData(search.value);
    event.preventDefault();
})

