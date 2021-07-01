let DOG_URL = "https://dog.ceo/api/breed/affenpinscher/images/random";
const BREED_URL = "https://dog.ceo/api/breeds/list/all";

const doggos = document.querySelector(".doggo-div");
const container = document.getElementById("container");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function (response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}

function getBreeds() {
    const promise = fetch(BREED_URL);
    promise.then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
        .then(function (processedResponse) {
            const breeds = processedResponse.message;
            for (breed in breeds) {
                let option = document.createElement("option");
                let node = document.createTextNode(breed);
                option.value = breed;
                option.appendChild(node);
                container.appendChild(option);
            }
        });
}

function chooseBreed(value) {
    DOG_URL = "https://dog.ceo/api/breed/"+ value +"/images/random";
    console.log('here', DOG_URL);
}

getBreeds();
document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);