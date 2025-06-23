async function getWeather() {
  const city = document.getElementById('city').value;
   if(city===""){
    alert("you have to write something!");
    return;
  }

  const apiKey = 'b855c42ce447b4b85f374e3e1dc400e5';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
 
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('result').innerHTML = ` <p><strong>Weather in ${data.name}:</strong></p>
                                                      <p>Temperature: ${data.main.temp}°C</p>
                                                      <p>Description: ${data.weather[0].description}</p> `;
    } else {
      document.getElementById('result').innerText = 'City not found!';
    }
  } catch (error) {
    document.getElementById('result').innerText = 'Error fetching data.';
  }
}
function clearWeather(){
  document.getElementById('city').value='';
  document.getElementById('result').innerHTML='';
}