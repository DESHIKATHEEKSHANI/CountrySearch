loadItems();

async function loadItems() {

    let res = await fetch("https://restcountries.com/v3.1/all");
    let countries = await res.json();
    let body = "";
    countries.forEach(element => {  
        console.log(element);  
        body += `  
            <div class="card mb-3 country-card me-4" style="max-width: 400px;" id="country-card">  
                <div class="row g-0">  
                    <div class="col-md-4">  
                        <img src="${element.flags.svg}" class="img-fluid rounded-start" alt="Country Flag" id="country-flag">  
                    </div>  
                    <div class="col-md-8">  
                        <div class="card-body">  
                            <h5 class="card-title" id="country-name">${element.name.common}</h5>  
                            <p class="card-text"><strong>Capital:</strong> <span id="country-capital">${element.capital ? element.capital[0] : 'N/A'}</span></p>  
                            <p class="card-text"><strong>Region:</strong> <span id="country-region">${element.region}</span></p>  
                            <p class="card-text"><strong>Population:</strong> <span id="country-population">${element.population.toLocaleString()}</span></p>  
                            <a href="${element.maps.googleMaps}" id="google-maps-link" class="btn btn-primary" target="_blank">View on Google Maps</a>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        `;  
    });  


    console.log(body);

    document.getElementById("row").innerHTML = body;
}

function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            
           <div class="card mb-3 country-card me-2" style="max-width: 600px;" id="country-card">  
                <div class="row g-0">  
                    <div class="col-md-4">  
                        <img src="${element.flags.svg}" class="img-fluid rounded-start" alt="Country Flag" id="country-flag">  
                    </div>  
                    <div class="col-md-8">  
                        <div class="card-body">  
                            <h5 class="card-title" id="country-name">${element.name.common}</h5>  
                            <p class="card-text"><strong>Capital:</strong> <span id="country-capital">${element.capital ? element.capital[0] : 'N/A'}</span></p>  
                            <p class="card-text"><strong>Region:</strong> <span id="country-region">${element.region}</span></p>  
                            <p class="card-text"><strong>Population:</strong> <span id="country-population">${element.population.toLocaleString()}</span></p>  
                            <p class="card-text">${element.flags.alt}</p>
                            <a href="${element.maps.googleMaps}" id="google-maps-link" class="btn btn-primary" target="_blank">View on Google Maps</a>  
                        </div>  
                    </div>  
                </div>  
            </div>  
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}