const select_container = document.querySelectorAll(".select-container");

for (let selector of select_container) {
    const opt = selector.childNodes[3];

    for (let country in countryList) {
        let option = document.createElement("option");
        option.innerHTML = country;
        opt.append(option);
    }
}


console.dir(select_container[0].childNodes[1].src);

select_container[0].childNodes[1].src = "https://flagsapi.com/" + UN + ""
// select_container[0].childNodes[1].outterHTML = 

// img src=\"https://flagsapi.com/

