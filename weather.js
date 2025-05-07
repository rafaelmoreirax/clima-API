<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clima Agora</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 2rem;
      background: linear-gradient(to right, #83a4d4, #b6fbff);
      color: #333;
    }
    #weather {
      margin-top: 2rem;
      font-size: 1.2rem;
      background: rgba(255, 255, 255, 0.8);
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input, button {
      padding: 0.5rem;
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <h1>🌤️ Verifique o Clima</h1>
  <input type="text" id="cityInput" placeholder="Digite a cidade" />
  <button onclick="getWeather()">Buscar</button>
  <div id="weather"></div>

  <script>
    async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const apiKey = 'YOUR_API_KEY'; // Substitua por sua chave da OpenWeatherMap
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Cidade não encontrada.');

        const data = await response.json();
        const { name, main, weather } = data;

        document.getElementById('weather').innerHTML = `
          <h2>${name}</h2>
          <p>Temperatura: ${main.temp.toFixed(1)} °C</p>
          <p>Condição: ${weather[0].description}</p>
        `;
      } catch (error) {
        document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
      }
    }
  </script>
</body>
</html>
