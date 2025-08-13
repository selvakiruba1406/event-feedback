import { add, multiply } from './mathUtils.js';
import greet from './mathUtils.js';
import { createCard, createProfileCard } from './cardUtils.js';

const createCardBtn = document.getElementById("createCardBtn");
const addProfileBtn = document.getElementById("addProfileBtn");
const cardContainer = document.getElementById("cardContainer");

// Run math functions
console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(4, 2));
greet("Selva");

// Create normal card
createCardBtn.addEventListener("click", () => {
    createCard(cardContainer);
});

// Create profile card with user input
addProfileBtn.addEventListener("click", () => {
    const name = prompt("Enter Name:");
    const role = prompt("Enter Role:");

    if (name && role) {
        createProfileCard(cardContainer, name, role);
    }
});
