const concepts = [
    {
        name: "Class",
        description: "A blueprint for creating objects."
    },
    {
        name: "Method",
        description: "Defines behavior of an object."
    },
    {
        name: "Encapsulation",
        description: "Protects internal object data."
    },
    {
        name: "Abstraction",
        description: "Hides complexity and exposes only what is necessary."
    }
];

const exampleDefinitions = {
    
    class: "Creates a Person object, assigns a name, and prints it.",
    method: "Creates an object and calls its method.",
    abstraction: "Implements an abstract method in a derived class.",
    encapsulation: "Sets and retrieves a private variable using public methods."
};

document.addEventListener("DOMContentLoaded", init);

function init()
{
    trackVisit();
    displayConcepts();
    setupButton();
    setupExampleSelector();
    updateYear();
}

function startLearning()
{
    const container = document.querySelector(".button-container");
    if (!container) return;
        const oldMessage = container.querySelector("p");

    if (oldMessage) oldMessage.remove();
        const message = document.createElement("p");
        message.textContent = "Redirecting to Concepts page, please wait…";
        container.appendChild(message);

    setTimeout(() =>
    {
        window.location.href = "concepts.html";
    }, 2000);
}

function setupButton()
{
    const button = document.getElementById("startBtn");
    if (button)
        button.addEventListener("click", startLearning);
}


function trackVisit()
{
    let visits = localStorage.getItem("visits");
    visits = visits ? Number(visits) + 1 : 1;
    localStorage.setItem("visits", visits);
    console.log(`Visits: ${visits}`);
}

function displayConcepts()
{
    const container = document.querySelector(".card-container");
    if (!container) return;
        container.innerHTML = concepts.map(concept =>

            `<article class="card">

                <h3>${concept.name}</h3>

                <p>${concept.description}</p>

            </article>`
    ).join("");
}

function setupExampleSelector() {
    const selector = document.getElementById("exampleSelector");
    if (!selector) return;
    const examples = document.querySelectorAll(".example-card");

    selector.addEventListener("change", () => {
        examples.forEach(example => {
            example.style.display = "none";
        });

        const value = selector.value;
        if (value) {
            const selected = document.getElementById(`example-${value}`);
            if (selected) selected.style.display = "block";
        }
    });
}

function updateYear()
{
    const year = document.getElementById("year");
    if (year)
        year.textContent = new Date().getFullYear();
}