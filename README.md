# ☀️ weather-app-js

Um site simples em HTML e JavaScript que consome a API do OpenWeatherMap para exibir a temperatura atual e a condição climática de qualquer cidade informada pelo usuário. É um ótimo exemplo de como integrar APIs externas com front-end puro.

---

## 📌 Tópicos

- [🌐 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚙️ Como Executar](#️-como-executar)
- [🛠️ Funcionalidades](#️-funcionalidades)
- [🧠 Explicação do Código](#-explicação-do-código)
- [📄 Licença](#-licença)
- [🤝 Contribuindo](#-contribuindo)

---

## 🌐 Sobre o Projeto

O `weather-app-js` é um projeto front-end simples onde o usuário digita o nome de uma cidade e recebe em tempo real as informações de clima da região consultada. Os dados são obtidos da [API do OpenWeatherMap](https://openweathermap.org/current).

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (inline)
- JavaScript (ES6+)
- API pública do OpenWeatherMap

---

## ⚙️ Como Executar

1. **Obtenha uma chave de API gratuita:**
   - Acesse: https://openweathermap.org/api
   - Crie uma conta e gere sua API key.

2. **Clone o repositório:**

```bash
git clone https://github.com/rafaelmoreirax/weather-app-js.git
cd weather-app-js
```

3. **Substitua a chave da API:**
   - No arquivo `main.html`, substitua `YOUR_API_KEY` pela sua chave real.

```javascript
const apiKey = 'YOUR_API_KEY';
```

4. **Abra o projeto no navegador:**
   - Basta abrir o arquivo `main.html`.

---

## 🛠️ Funcionalidades

- [x] Busca por nome de cidade
- [x] Exibição de temperatura atual
- [x] Descrição da condição climática
- [x] Interface visual limpa e responsiva
- [ ] Suporte a previsão para os próximos dias (em planejamento)

---

## 🧠 Explicação do Código

- Utiliza `fetch()` para fazer uma requisição à API do OpenWeatherMap.
- Converte o JSON de resposta e exibe nome da cidade, temperatura e descrição do clima.
- Inclui tratamento de erros caso a cidade não exista.
- O layout é responsivo, simples e utiliza `display: inline-block` com sombra para destacar os dados.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Fork este repositório.
2. Crie uma branch: `git checkout -b minha-melhoria`.
3. Commit suas alterações: `git commit -m 'feat: nova funcionalidade'`.
4. Push para sua branch: `git push origin minha-melhoria`.
5. Abra um Pull Request.

---

## 👤 Autor

Feito com ☀️ por [Rafael Moreira](https://github.com/rafaelmoreirax)
