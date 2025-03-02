const button=document.getElementById("search");
const input=document.getElementById("input-button");
const cityName=document.getElementById("city-name");
const cityTime=document.getElementById("city-time");
const cityTemp=document.getElementById("city-temp");
input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        document.getElementById("search").click();
    }
});
async function getData(cityName) {
    const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1bbbdca62e7445a18b8100645252602&q=${cityName}&aqi=yes`);
    return await promise.json()
}
button.addEventListener("click",async ()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
    cityTime.innerText=`${result.location.localtime}`;
    cityTemp.innerText=`${result.current.temp_c}`;
    
})