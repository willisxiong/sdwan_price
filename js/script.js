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
    
    let counter = 0;

    document.querySelector("#add-gw").addEventListener("click", () => {
        counter++;

        var city_select = document.querySelector("#gw-city-select").innerHTML;
        var bw_select = document.querySelector("#gw-bw-select").innerHTML;
        var remove_button = `<button type='button' class='remove-button' id='${counter}'>remove</button>`
        const add_content = `<div class="row" id="${counter}"><div class="solution-content"><select>${city_select}</select></div><div class="solution-content"><select>${bw_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_gw").insertAdjacentHTML("afterend" ,add_content);

        let buttons = document.querySelectorAll(".remove-button");
        console.log(buttons);
        buttons.forEach(element => {
            element.addEventListener("click", () => {
                console.log(element);
                const row_element = document.getElementById(element.id).getElementsByClassName(".row");
                row_element.remove();
            });
        });

    });

    document.querySelector("#add-cpe").addEventListener("click", () => {
        var cpe_city_select = document.querySelector("#cpe-city-select").innerHTML;
        var cpe_bw_select = document.querySelector("#cpe-bw-select").innerHTML;
        var cpe_device_select = document.querySelector("#cpe-device-select").innerHTML;
        var remove_button = "<button type='button' class='remove-button' id='remove'>remove</button>";
        const add_content = `<div class="row"><div class="solution-content"><select>${cpe_city_select}</select></div><div class="solution-content"><select>${cpe_bw_select}</select></div><div class="solution-content"><select>${cpe_device_select}</select></div>` + remove_button + `</div>`;

        document.querySelector("#solution1_cpe").insertAdjacentHTML("afterend", add_content);
    });

    console.log(counter);

    
});