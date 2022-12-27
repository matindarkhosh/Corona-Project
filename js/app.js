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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69bad67a76msh67092ae29475b81p1c579ajsncfd233107572',
		'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
	}
};

fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True', options)
	.then(response => response.json())
	.then(data23 => {
  
  
    for(let e=0;e<=6;e++){
      console.log(data23.articles[e]);
      let title2 = data23.articles.author;
      let summary = data23.articles.summary;
const blog = document.querySelector(".blog");
    const boxBlog = `        <div class="title">
    <h2>BLOG</h2>
    <a href="#">See More</a>
</div>

<div class="boxs">
    <div>
        <div class="blog-box">
            <div class="org-box">
                <img src="./images/doctor-with-stethoscope-hands-hospital-background.png" alt="">
                <div class="overlay">
                    <div class="content-blog">
                        <h3>${title2[0]}</h3>
                        <p>${summary[0]}</p>
                    </div>
                </div>
            </div>
            <div class="org-box">
                <img src="./images/doctor-with-stethoscope-hands-hospital-background.png" alt="">
                <div class="overlay">
                    <div class="content-blog">
                        <h3>${title2[1]}</h3>
                        <p>${summary[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="blog-box">
            <div class="org-box">
                <img src="./images/doctor-with-stethoscope-hands-hospital-background.png" alt="">
                <div class="overlay">
                    <div class="content-blog">
                        <h3>${title2[2]}</h3>
                        <p>${summary[2]}</p>
                    </div>
                </div>
            </div>
            <div class="org-box">
                <img src="./images/doctor-with-stethoscope-hands-hospital-background.png" alt="">
                <div class="overlay">
                    <div class="content-blog">
                        <h3>${title2[3]}</h3>
                        <p>${summary[3]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="blog-box">
            <div class="org-box">
                <img src="./images/doctor-with-stethoscope-hands-hospital-background.png" alt="">
                <div class="overlay">
                    <div class="content-blog">
                        <h3>${title2[4]}</h3>
                        <p>${summary[4]}</p>
                    </div>
                </div>
            </div>
            <div class="org-box">
                <img src="./images/doctor-with-stethoscope-hands-hospital-background.png" alt="">
                <div class="overlay">
                    <div class="content-blog">
                        <h3>${title2[5]}</h3>
                        <p>${summary[5]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>`;
      blog.innerHTML = boxBlog;
      
      

    }
     
  })
	.catch(err => console.error(err));

  

  const btnc  = document.querySelector("btnc").addEventListener("click" ,
  
  )
