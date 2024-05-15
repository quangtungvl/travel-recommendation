const input = document.getElementById('input').value.toLowerCase();
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');


function searchRecommendation() {

    const cardContainerDiv = document.getElementById('card-container');
    cardContainerDiv.innerHTML = '';

    var recommendation;
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
                case 'countries':
                case 'country':
                case 'countrie':
                case 'countri':
                case 'countr':
                    recommendation = data.countries;
                    is_found = true;
                    break;
                case 'temples':
                case 'temple':
                case 'temple':
                    recommendation = data.temples;
                    is_found = true;
                    break;
            }
            if(is_found){
                recommendation.forEach(item => {
                    const cardDiv = document.createElement('card');
                    cardDiv.innerHTML+=`<img src="assets/img/${item.imageUrl}" alt="${item.description}" />`;
                    cardDiv.innerHTM += `<div class="card__content">`;
                    cardDiv.innerHTM += `<h2>${item.name}</h2>`;
                    cardDiv.innerHTM += `<p>${item.description}</p>`;
                    cardDiv.innerHTM += `<button class="btn">Explore</button>`;
                    cardDiv.innerHTM += `</div>`;
                    cardContainerDiv.addchild(cardDiv);
                });
            }
        })
        .catch(error => {
            console.log(error);

        });

}

function clearRecommendation() {

}



btnSearch.addEventListener('click', searchRecommendation);
btnClear.addEventListener('click', clearRecommendation);