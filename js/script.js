document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#quote1').addEventListener('click', () => {
            var request = new XMLHttpRequest;
            request.open('GET', 'cpe_price.json', true);
            request.send();  

            request.onload = () => {
                const data = JSON.parse(request.responseText);

                var price_content = data['HK']['5m']['VE100b'];
                document.querySelector('#sale-price').insertAdjacentHTML("afterend", `<span id="price_content">${price_content}</span>`);
            };
        });
    
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    document.querySelector("#add-gw").addEventListener("click", () => {

        counter1++;

        var city_select = document.querySelector("#gw-city-select").innerHTML;
        var bw_select = document.querySelector("#gw-bw-select").innerHTML;
        var remove_button = `<button type='button' id="${counter1}" class="remove-button" onclick="remove(this)">remove</button>`
        const add_content = `<div class="row" id="row-${counter1}"><div class="solution-content"><select>${city_select}</select></div><div class="solution-content"><select>${bw_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_gw").insertAdjacentHTML("beforeend" ,add_content);

    });

    document.querySelector("#add-cpe").addEventListener("click", () => {
        counter2++;

        var cpe_city_select = document.querySelector("#cpe-city-select").innerHTML;
        var cpe_bw_select = document.querySelector("#cpe-bw-select").innerHTML;
        var cpe_device_select = document.querySelector("#cpe-device-select").innerHTML;
        var remove_button = `<button type='button' class='remove-button' id='${counter2+counter1}' onclick="remove(this)">remove</button>`;
        const add_content = `<div class="row" id="row-${counter2+counter1}"><div class="solution-content"><select>${cpe_city_select}</select></div><div class="solution-content"><select>${cpe_bw_select}</select></div><div class="solution-content"><select>${cpe_device_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_cpe").insertAdjacentHTML("afterend", add_content);
    });

    document.querySelector("#add-cpe-only").addEventListener("click", () => {
        counter3++;

        var cpeonly_city_select = document.querySelector("#cpeonly-city-select").innerHTML;
        var cpeonly_bw_select = document.querySelector("#cpeonly-bw-select").innerHTML;
        var cpeonly_device_select = document.querySelector("#cpeonly-device-select").innerHTML;
        var remove_button = `<button type='button' class='remove-button' id='${counter3+counter2+counter1}' onclick="remove(this)">remove</button>`;
        const add_content = `<div class="row" id="row-${counter3+counter2+counter1}"><div class="solution-content"><select>${cpeonly_city_select}</select></div><div class="solution-content"><select>${cpeonly_bw_select}</select></div><div class="solution-content"><select>${cpeonly_device_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution2_cpe").insertAdjacentHTML("beforeend", add_content);
    });
    
});

function remove(button) {
    let number = button.id
    let row = document.getElementById("row-"+number);
    row.remove()
}