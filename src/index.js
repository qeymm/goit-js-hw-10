import { fetchBreeds, fetchCatByBreeds } from "./cat-api";

const breedSelectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

//Dropdown List
function chooseBreed() {
    fetchBreeds().then(data => {
        loaderEl.classList.replace('loader', 'is-hidden')

        let optionsMarkUp = data.map(({id, name}) => {
            return `<option value="${id}">${name}</option>`;
        });
        breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkUp.join(''));
        breedSelectEl.classList.remove('is-hidden');
    });
}

chooseBreed();

breedSelectEl.addEventListener('change', (e) => {
    
    loaderEl.classList.replace('is-hidden', 'loader');

    catInfoEl.classList.add('is-hidden');

    let breedId = e.target.value;

    fetchCatByBreeds(breedId).then(data => {
        const { url, breeds } = data[0];
        const { name, description, temperament } = breeds[0];
        catInfoEl.innerHTML = `
            <img src="${url}" alt="${name}" width="400"/>
            <div>
                <h2>${name}</h2>
                <p>${description}</p>
                <p><strong>Temperament:</strong> ${temperament}</p>
            </div>
        `;
        catInfoEl.classList.remove('is-hidden');
        loaderEl.classList.add('is-hidden');
        errorEl.classList.add('is-hidden');
    })
});