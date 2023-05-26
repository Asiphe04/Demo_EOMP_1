// Projects
let projects = [
  {
    id: 1,
    name: "Hulu",
    img: "/Asiphe_Ndimlana_EOMP/assets/images/projects/hulu.png",
    desc: " A website for streaming and downloading movies/series",
  },
  {
    id: 2,

    name: "Calender",
    img: "/Asiphe_Ndimlana_EOMP/assets/images/projects/calender.png",
    desc: "A calender.",
  },
  {
    id: 3,
    name: "Tables",
    img: "/Asiphe_Ndimlana_EOMP/assets/images/projects/Tables.png",
    desc: " A table with nforation about our classmates/collegues and a contact form at the bottom.",
  },
  {
    id: 4,
    name: "Intro-About-Me",
    img: "/Asiphe_Ndimlana_EOMP/assets/images/projects/first-portfolio.png",
    desc: "Information about me",
  },
  {
    id: 5,
    name: "Mini-exercise",
    img: "/Asiphe_Ndimlana_EOMP/assets/images/projects/mini-exercise.png",
    desc: " A mini-exercise we did in class. It includes HTML and CSS",
  },
  {
    id: 6,
    name: "Non-Profit-Org",
    img: "/Asiphe_Ndimlana_EOMP/assets/images/projects/ngo.jpg",
    desc: "Another project we did about an NGO , i ws the group leader and I did the Home Page.",
  },
];

let dispProjects = document.querySelector(".projects");
projects.forEach((data) => {
  dispProjects.innerHTML += ` 
   
   
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
        <h3 class="text-center">${data.name}</h3> 
       <img src="${data.img}" class="car">
       </div> 
       <div class="flip-card-back">
       <div class="text-container">
       <p id= "desc" class="display-5">${data.desc}</p>  
        </div>
        </div>
       
        </div>`;
});
