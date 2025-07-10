const select_container = document.querySelectorAll(".select-container");



const convert = async()=>{
    const currency_api = await fetch("https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json");
    const data = currency_api.json();
    console.log(data);
}
convert();

for (let selector of select_container) {
    const opt = selector.childNodes[3];

    for (let country in countryList) {
        let option = document.createElement("option");
        option.innerHTML = country;
        opt.append(option);
    }
}
let str = (select_container[0].childNodes[3].value).substring(0,2);

select_container[1].childNodes[1].src = "https://flagsapi.com/"+str+"/flat/64.png";
select_container[0].childNodes[1].src = "https://flagsapi.com/"+str+"/flat/64.png";

console.dir(select_container[0].childNodes[3]);



select_container[0].childNodes[3].addEventListener("change",()=>{
 str = (select_container[0].childNodes[3].value).substring(0,2);

select_container[0].childNodes[1].src = "https://flagsapi.com/"+str+"/flat/64.png";
})




select_container[1].childNodes[3].addEventListener("change",()=>{
 str = (select_container[1].childNodes[3].value).substring(0,2);

select_container[1].childNodes[1].src = "https://flagsapi.com/"+str+"/flat/64.png";
})
