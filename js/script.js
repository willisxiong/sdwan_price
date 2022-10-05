

document.addEventListener("DOMContentLoaded", () => {
    //count price for solution1
    document.querySelector('#quote1').addEventListener('click', () => {
            // Initiate http request and send to server
            var request1 = new XMLHttpRequest();
            var request2 = new XMLHttpRequest();
            request1.open('GET', './cpe_price.json', true);
            request2.open('GET', './gw_price.json', true);
            request1.send();
            request2.send();
            

            var gw_cities = document.querySelectorAll("#gw-city-select");
            var gw_bws = document.querySelectorAll("#gw-bw-select");

            // Fetch the gw json data, then count and display price
            request2.onload = () => {
                const data = JSON.parse(request2.responseText);  
                const gw_price_all = [];
                var gw_price_total = 0.00;              

                for (var i=0; i<gw_cities.length; i++) {
                    var gw_city_value = gw_cities[i].value;
                    var gw_bw_value = gw_bws[i].value;
                    var gw_price = data[gw_city_value][gw_bw_value];
                    gw_price_all.push(gw_price);
                };


                for (var j=0; j<gw_price_all.length; j++) {
                    gw_price_total = gw_price_total + gw_price_all[j];
                };

                console.log(gw_price_all);
                console.log(gw_price_total);

                var price_content = `<span id="sol1-gw-price">${gw_price_total}</span>`

                //display price for solution in sidebar
                document.querySelector("#sol1-gw-price").innerHTML = price_content + " USD";


            };

            var cpe_cities = document.querySelectorAll("#cpe-city-select");
            var cpe_bws = document.querySelectorAll("#cpe-bw-select");
            var cpe_devices = document.querySelectorAll("#cpe-device-select");

            // Fetch the cpe json data, then count and display price
            request1.onload = () => {
                const data = JSON.parse(request1.responseText);
                const cpe_price_all = [];
                var cpe_price_total = 0.00;

                for (var i=0; i<cpe_cities.length; i++) {
                    var cpe_city_value = cpe_cities[i].value;
                    var cpe_bw_value = cpe_bws[i].value;
                    var cpe_device_value = cpe_devices[i].value;
                    var cpe_price = data[cpe_city_value][cpe_bw_value][cpe_device_value];
                    if (cpe_price < 0) {
                        alert(`Invalid bandwidth or device in CPE selection${i+1} in Solution1`);
                    } else {cpe_price_all.push(cpe_price);};
                    
                };
                
                for (var j=0; j<cpe_cities.length; j++) {
                    cpe_price_total += cpe_price_all[j];
                };

                console.log(cpe_price_all);
                console.log(cpe_price_total);

                var price_content = `<span id="sol1-cpe-price">${cpe_price_total}</span>`

                //display price for solution1 in sidebar
                document.querySelector("#sol1-cpe-price").innerHTML = price_content + " USD";
            };

            
            
    });
    
    //count row number for each gw and cpe in solution1
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    

    //listen to Add Gateway and Add CPE button event in solution1
    // Add or Delete selection rows
    document.querySelector("#add-gw").addEventListener("click", () => {

        counter1++;

        var city_select = document.querySelector("#gw-city-select").innerHTML;
        var bw_select = document.querySelector("#gw-bw-select").innerHTML;
        var remove_button = `<button type='button' id="${counter1}" class="remove-button" onclick="remove(this)">remove</button>`
        const add_content = `<div class="row" id="row-${counter1}"><div class="solution-content"><select id="gw-city-select">${city_select}</select></div><div class="solution-content"><select id="gw-bw-select">${bw_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_gw").insertAdjacentHTML("beforeend" ,add_content);

    });

    document.querySelector("#add-cpe").addEventListener("click", () => {
        counter2++;

        var cpe_city_select = document.querySelector("#cpe-city-select").innerHTML;
        var cpe_bw_select = document.querySelector("#cpe-bw-select").innerHTML;
        var cpe_device_select = document.querySelector("#cpe-device-select").innerHTML;
        var remove_button = `<button type='button' class='remove-button' id='${counter2+counter1}' onclick="remove(this)">remove</button>`;
        const add_content = `<div class="row" id="row-${counter2+counter1}"><div class="solution-content"><select id="cpe-city-select">${cpe_city_select}</select></div><div class="solution-content"><select id="cpe-bw-select">${cpe_bw_select}</select></div><div class="solution-content"><select id="cpe-device-select">${cpe_device_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_cpe").insertAdjacentHTML("afterend", add_content);
    });
    

    //listen to Add CPE button event in solution2
    document.querySelector("#add-cpe-only").addEventListener("click", () => {
        counter3++;

        var cpeonly_city_select = document.querySelector("#cpeonly-city-select").innerHTML;
        var cpeonly_bw_select = document.querySelector("#cpeonly-bw-select").innerHTML;
        var cpeonly_device_select = document.querySelector("#cpeonly-device-select").innerHTML;
        var remove_button = `<button type='button' class='remove-button' id='${counter3+counter2+counter1}' onclick="remove(this)">remove</button>`;
        const add_content = `<div class="row" id="row-${counter3+counter2+counter1}"><div class="solution-content"><select id="cpeonly-city-select">${cpeonly_city_select}</select></div><div class="solution-content"><select id="cpeonly-bw-select">${cpeonly_bw_select}</select></div><div class="solution-content"><select id="cpeonly-device-select">${cpeonly_device_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution2_cpe").insertAdjacentHTML("beforeend", add_content);
    });

    //count price for solution2
    document.querySelector("#quote2").addEventListener("click", () => {
        var request = new XMLHttpRequest();
        request.open("GET", "./cpe_price.json", true);
        request.send();

        var cpeonly_cities = document.querySelectorAll("#cpeonly-city-select");
        var cpeonly_bws = document.querySelectorAll("#cpeonly-bw-select");
        var cpeonly_devices = document.querySelectorAll("#cpeonly-device-select");

        request.onload = () => {
            const data = JSON.parse(request.responseText);
            const cpeonly_price_all = [];
            var cpeonly_price_total = 0.00;

            for (var i=0; i<cpeonly_cities.length; i++) {
                var cpeonly_city_value = cpeonly_cities[i].value;
                var cpeonly_bw_value = cpeonly_bws[i].value;
                var cpeonly_device_value = cpeonly_devices[i].value;
                var cpeonly_price = data[cpeonly_city_value][cpeonly_bw_value][cpeonly_device_value];
                if (cpeonly_price < 0) {
                    alert(`Invalid bandwidth or device in CPE selection${i+1} in Solution2`);
                } else {cpeonly_price_all.push(cpeonly_price);};
                
            };
            
            for (var j=0; j<cpeonly_cities.length; j++) {
                cpeonly_price_total += cpeonly_price_all[j];
            };

            console.log(cpeonly_price_all);
            console.log(cpeonly_price_total);

            var price_content = `<span id="sol2-cpe-price">${cpeonly_price_total}</span>`;

            //display price for solution2 in sidebar
            document.querySelector("#sol2-cpe-price").innerHTML = price_content + " USD";
            
        };

    });

    var price_content1 = `<span id="sol2-cpe-price">0.00 USD</span>`
    var price_content2 = `<span id="sol1-gw-price">0.00 USD</span>`
    var price_content3 = `<span id="sol1-cpe-price">0.00 USD</span>`
    document.querySelector("#solution2-cpe-price").insertAdjacentHTML("beforeend", price_content1);
    document.querySelector("#solution1-gw-price").insertAdjacentHTML("beforeend", price_content2);
    document.querySelector("#solution1-cpe-price").insertAdjacentHTML("beforeend", price_content3);


    
});

//remove button action
function remove(button) {
    let number = button.id
    let row = document.getElementById("row-"+number);
    row.remove()
};