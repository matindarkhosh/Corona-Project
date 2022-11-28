const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
        label: 'TOTAL CASES',
        backgroundColor: '#02BC77',
        borderColor: '#02E4AF', 
        data: [10, 25, 18, 34, 42, 37, 43],
      }]
  };
  const data2 = {
    labels: labels,
    datasets: [{
        label: 'T',
        backgroundColor: '#F85252',
        borderColor: '#F85252', 
        data: [59, 39, 49, 42, 53, 8, 8],
      }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const config2 = {
    type: 'line',
    data: data2,
    options: {}
  };
  const myChart = new Chart(document.getElementById('TotalChart'), config);
  const DeathChart = new Chart(document.getElementById('DeathChart'), config2);


  // https://restcountries.com/v3.1/name/iran?fullText=true

//filter
let countryinput = document.querySelector(".fildes select").value;
const submit= document.querySelector(".filter");
let testedv = document.querySelector(".tested");
let infectedv = document.querySelector(".infected");
let deadv = document.querySelector(".dead");
let recoveredv = document.querySelector(".recovered");
submit.addEventListener("click", findcountry);

function findcountry(){
    const url = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;  
    fetch(url)
    .then(response => response.json())
    .then(data12 => {
      console.log(data12);
      for(let i=0; i<=45;i++){
        // console.log(data12[i].country);
      let {infected,tested,recovered,deceased} = data12[i];
        if(countryinput === data12[i].country){
          // console.log(`country: ${countryinput} infected: ${infected} tested: ${tested}`);

          testedv.innerHTML = tested;
          infectedv.innerHTML = infected;
          deadv.innerHTML = deceased;
          recoveredv.innerHTML = recovered; 



        }else{
          console.log("is not found");
        }
      
      // const countryFilter = data12.filter(item => item == data12[i].country);

}
 
    });



      

}


document.addEventListener('DOMContentloaded' , () => {

  const selectDrop = document.querySelector(".countries");

  fetch('https://restcountries.com/v3.1/all').then(res =>{
  return res.json();
  }).then(data14 =>{
    let output = "";
    data14.forEach(country =>{
      output += `<option>${country.name}</option>`;
    })

    selectDrop.innerHTML = output;

  }).catch(err => {
    console.log(err)
  })



});