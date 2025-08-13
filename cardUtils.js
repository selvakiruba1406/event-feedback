export function createCard(container) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>Sample Card</h3>
        <p>This is a dynamically created card.</p>
        <button class="remove-btn">Delete</button>
    `;

    // Delete event
    card.querySelector(".remove-btn").addEventListener("click", () => {
        card.remove();
    });

    container.appendChild(card);
}

export function createProfileCard(container, name, role) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${role}</p>
        <button class="remove-btn">Remove</button>
    `;

    card.querySelector(".remove-btn").addEventListener("click", () => {
        card.remove();
    });

    container.appendChild(card);
}
