
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const cardContainerDiv = document.getElementById('card-container');

function searchRecommendation() {
    const input = document.getElementById('input').value.toLowerCase();

    cardContainerDiv.innerHTML = '';

    var recommendation;
    var country;
    let is_found = false;
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            switch (input) {
                case 'beach':
                case 'beaches':
                case 'beache':
                    recommendation = data.beaches;
                    is_found = true;
                    break;
                case 'temples':
                case 'temple':
                case 'temple':
                    recommendation = data.temples;
                    is_found = true;
                    break;
                case 'australia':
                    country = data.countries[0];
                    recommendation = country.cities;
                    is_found = true;
                    break;
                case 'japan':
                    country = data.countries[1];
                    recommendation = country.cities;
                    is_found = true;
                    break;
                case 'brazil':
                    country = data.countries[2];
                    recommendation = country.cities;
                    is_found = true;
                    break;

            }
            if (is_found) {
                recommendation.forEach(item => {
                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'card';
                    cardDiv.innerHTML += `<img src="assets/img/${item.imageUrl}" alt="${item.description}" />`;

                    const cardContentDiv = document.createElement('div');
                    cardContentDiv.className = 'card__content';

                    cardContentDiv.innerHTML += `<h2>${item.name}</h2>`;
                    cardContentDiv.innerHTML += `<p>${item.description}</p>`;
                    cardContentDiv.innerHTML += `<button class="btn">Visit</button>`;

                    cardDiv.appendChild(cardContentDiv);
                    cardContainerDiv.appendChild(cardDiv);
                });
            }
        })
        .catch(error => {
            console.log(error);

        });

}

function clearRecommendation() {
    cardContainerDiv.innerHTML = '';
}



btnSearch.addEventListener('click', searchRecommendation);
btnClear.addEventListener('click', clearRecommendation);