document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#quote1').addEventListener('click', () => {
            var request = new XMLHttpRequest;
            request.open('GET', '/cpe_price.json', true);
            request.send();  

            request.onload = () => {
                const data = JSON.parse(request.responseText);
                console.log(data);

                var city = document.getElementById('city-select').value
                console.log(city);

                var price_content = data['HK']['5m']['VE100b'];
                document.querySelector('#sale-price').innerHTML += `<span id="price_content">${price_content}</span>`;
            };
        });

    document.querySelector("#add-gw").addEventListener("click", () => {
        var city_select = document.querySelector("#gw-city-select").innerHTML;
        var bw_select = document.querySelector("#gw-bw-select").innerHTML;
        var remove_button = "<button type='button' id='remove'>remove</button>"
        const add_content = `<div class="row"><div class="solution-content"><select>${city_select}</select></div><div class="solution-content"><select>${bw_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_gw").insertAdjacentHTML("afterend" ,add_content);

    });

    document.querySelector("#add-cpe").addEventListener("click", () => {
        var cpe_city_select = document.querySelector("#cpe-city-select").innerHTML;
        var cpe_bw_select = document.querySelector("#cpe-bw-select").innerHTML;
        var cpe_device_select = document.querySelector("#cpe-device-select").innerHTML;
        var remove_button = "<button type='button' id='remove'>remove</button>";
        const add_content = `<div class="row"><div class="solution-content"><select>${cpe_city_select}</select></div><div class="solution-content"><select>${cpe_bw_select}</select></div><div class="solution-content"><select>${cpe_device_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_cpe").insertAdjacentHTML("afterend", add_content);
    });
});