const select_container = document.querySelectorAll('.select-container');
const input = document.querySelector('#input');
const getChange = document.querySelector('#getChange');
let value = 1;
let fromer = 'aed';
let to = 'aed';
let data;
let ans = 1;


function showError() {
    alert('Enter a valid number');
    input.value = '';
    document.querySelector('.msg').innerHTML = '';
    input.focus();
}

input.addEventListener('change', () => {
    value = input.value;
});

getChange.addEventListener('click', (e) => {
    e.preventDefault();
    if (value == 0) {
        clicked = true;
        alert('Enter a valid number');
        showError();
        return;
    }
    let str = value.toString();
    console.log(str);

    for (let letters of str) {
        const numberStrings = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        if (!numberStrings.includes(letters)) {
            alert('Enter a valid number');
            showError();
            return;
        }
    }

    console.log(data);
    let curr = data[fromer];
    console.log(curr);

    for (let find in curr) {
        if (find == to) {
            console.log(curr[to]);
            ans = curr[to];
            const msg = document.querySelector('.msg');
            ans = value * ans;
            msg.innerHTML =
                value +
                ' ' +
                fromer.toUpperCase() +
                ' = ' +
                Math.round(ans * 100) / 100 +
                ' ' +
                to.toUpperCase();
        }
    }
});

for (let selector of select_container) {
    const opt = selector.childNodes[3];
    for (let country in countryList) {
        let option = document.createElement('option');
        option.innerHTML = country;
        opt.append(option);
    }
}
let str = select_container[0].childNodes[3].value.substring(0, 2);
select_container[1].childNodes[1].src =
    'https://flagsapi.com/' + str + '/flat/64.png';
select_container[0].childNodes[1].src =
    'https://flagsapi.com/' + str + '/flat/64.png';

select_container[0].childNodes[3].addEventListener('change', () => {
    str = select_container[0].childNodes[3].value.substring(0, 2);
    fromer = select_container[0].childNodes[3].value.toLowerCase();
    select_container[0].childNodes[1].src =
        'https://flagsapi.com/' + str + '/flat/64.png';
    convert();
});

// to
select_container[1].childNodes[3].addEventListener('change', () => {
    str = select_container[1].childNodes[3].value.substring(0, 2);
    to = select_container[1].childNodes[3].value.toLowerCase();
    select_container[1].childNodes[1].src =
        'https://flagsapi.com/' + str + '/flat/64.png';
    convert();
});

// api fetching is done
const convert = async () => {
    try {
        const currency_api = await fetch(
            'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' +
                fromer +
                '.json'
        );
        data = await currency_api.json();
    } catch (msg) {
        console.log(msg);
    }
};
convert();
