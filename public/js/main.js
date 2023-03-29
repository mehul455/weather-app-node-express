const submitbtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_Val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer')
const day = document.getElementById('day');
const today_data = document.getElementById('today_data');
const months = document.getElementById('month');
const click_click = document.getElementById('clickclick')
// days
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let dayss = days[d.getDay()];
day.innerHTML = dayss;
// date
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const mon = new Date();
let months_name = month[mon.getMonth()];

console.log(months)
const date = new Date();
let dates = date.getDate();
const text = `${dates} ${months_name}`
today_data.innerHTML= text









const getInfo = async (e)=>{
e.preventDefault()
let cityVal = cityname.value;
if(cityVal== ''){
city_name.innerText='Plz write the name before search'
data_hide.classList.add('data_hide')
}else{
    try{

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dec075ba999eb7f2be3f402e3d68922d`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;

        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;


        const tem_mode=arrData[0].weather[0].main;
        if(tem_mode == "Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }else  if(tem_mode == "Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
        }else  if(tem_mode == "Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
        }else if(tem_mode == "Haze"){
            temp_status.innerHTML="<i class='fas fa-solid fa-cloud-sun-rain' style='color:yellow;'></i>"
        }else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6;' ></i>"
        }
        // console.log(arrData)

        // console.log(arrData)
        data_hide.classList.remove('data_hide')

    }catch{
        city_name.innerText='Plz Enter the City name Properly'
        data_hide.classList.add('data_hide')

    }

}
// if(cityVal==''){
//     city_name.innerText='';

//     temp.innerText='';
//     temp_status.innerText='';
// }

}


submitbtn.addEventListener('click', getInfo)


$(document).ready(function () {
  
    $('ul.navbar-nav > li')
            .click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});













click_click.addEventListener("click", myFunction);
function myFunction() {
 const zindex = document.getElementById('zindex');
 zindex.classList.toggle('zi')

  }