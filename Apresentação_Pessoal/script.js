document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".deck .card");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let current = 0;

    function updateDeck() {

        // remove todas as classes
        cards.forEach(card => {
            card.classList.remove("active", "left", "right", "hidden");
        });

        // calcula posições
        let left = (current - 1 + cards.length) % cards.length;
        let right = (current + 1) % cards.length;

        // aplica classes
        cards[current].classList.add("active");
        cards[left].classList.add("left");
        cards[right].classList.add("right");

        // esconde os outros
        cards.forEach((card, index) => {
            if (index !== current && index !== left && index !== right) {
                card.classList.add("hidden");
            }
        });
    }

    // botão próximo
    next.addEventListener("click", () => {
        current = (current + 1) % cards.length;
        updateDeck();
    });

    // botão anterior
    prev.addEventListener("click", () => {
        current = (current - 1 + cards.length) % cards.length;
        updateDeck();
    });

    // clicar no certificado também traz ele para o centro
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            current = index;
            updateDeck();
        });
    });

    // inicia o deck
    updateDeck();

});