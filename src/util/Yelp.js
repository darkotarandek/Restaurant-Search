const apiKey = "4O9Lsp5uokoaUxKbHJfE6ok_gmzvAwtBtWgs8-M_M0iCEAQ97iOwiAo0Tu8U-YrL5dKCKDF6-cb3fXp_yXwIB2Yi766eXbbLVDhFxkEVONCulm9lIVtR-jWvDSvlW3Yx";

function search(term, location, sortBy){
    return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
            });
        }
    });
}

module.exports = search;