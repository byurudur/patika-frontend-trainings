document.addEventListener("DOMContentLoaded", () => {
    const jokeContainer = document.getElementById("joke");
    const newJokeBtn = document.getElementById("new-joke-btn");

    async function fetchJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            jokeContainer.textContent = data.value;
        } catch (error) {
            jokeContainer.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
        }
    }

    newJokeBtn.addEventListener("click", fetchJoke);

    // Sayfa yüklendiğinde ilk şakayı çek
    fetchJoke();
});
