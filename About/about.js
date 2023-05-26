// Navbar Menu
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("blurred", window.scrollY > 0);
});
// Education

let education = [
  {
    id: 1,
    course: "Web Developer @",
    place: "Life Choices Academy",
    Period: "Apr 2023 - Present",
    desc: "Currently learning HTML ,CSS, Javascript and many more",
  },
  {
    id: 2,
    course: "Grade 8-12 @",
    place: "Butterworth High School",
    Period: "Jan 2017 - Dec 2021",
    desc: "  Passed Grade 12",
  },
  {
    id: 3,
    course: "Grade R - 7 @",
    place: "Little Angels School",
    Period: "Jan 2008 - Dec 2016",
    desc: "Finished Primary and Intermidate phase",
  },
];

let dispEducation = document.querySelector(".education");
education.forEach((data) => {
  dispEducation.innerHTML += `
  <br>
      <div class="edu-card">
      <p class="display-4">${data.course}</p>  
      <div class="edu-card-body">
      <p class="display-5">${data.place}</p>
      <p class="display-5">${data.Period}</p>
      <p class="display-5">${data.desc}</p>
 
     
      </div>
      </div>`;
});
