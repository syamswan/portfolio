document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const content = document.querySelectorAll(".content");

  navItems.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      navItems.forEach((navItem) => navItem.classList.remove("navActiveStyle"));
      item.classList.add("navActiveStyle");
      content[index].scrollIntoView();
      document.getElementsByClassName('navbar-collapse').navbar.classList.remove('show')
    });
  });

  window.addEventListener("scroll", function () {
    const headerNav = document.querySelector("nav");

    if (window.pageYOffset > 0) {
      headerNav.classList.add("scrolled");
    } else {
      headerNav.classList.remove("scrolled");
      navItems.forEach((navItem) => navItem.classList.remove("navActiveStyle"));
    }

    handleScroll(navItems, content);
  });

  loadHomeInfo();
  loadAboutInfo();
  loadExperienceInfo();
  loadWorkInfo();
});

function navbarBrandClick() {
  const content = document.querySelectorAll(".content");
  content[0].scrollIntoView();
}

function handleScroll(navItems, content) {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  content.forEach((section, index) => {
    if (scrollPosition !== 0) {
      if (
        scrollPosition > section.offsetTop - 60 &&
        scrollPosition < section.offsetTop + section.offsetHeight - 60
      ) {
        navItems.forEach((item) => item.classList.remove("navActiveStyle"));
        navItems[index].classList.add("navActiveStyle");
      } else if (scrollPosition > section.offsetTop - 200) {
        navItems.forEach((item) => item.classList.remove("navActiveStyle"));
        navItems[index].classList.add("navActiveStyle");
      }
    }
  });
}

function loadHomeInfo() {
  const content = `I have over 3 plus years of experience in designing, developing, and  maintaining front-end web
  applications. I excel in collaborating with cross-functional teams and consistently deliver projects on time.
  Currently I am focused on developing projects in angular using machine learning in cyber security at CISAI.`;

  document.getElementById("homeContent").innerHTML = content;
}

function loadAboutInfo() {
  const content1 = ` Hello! My name is Syam Sundar S, and I enjoy creating interactive web applications. My interest in
  web development started back in 2019 when I was doing my internship program at Kadayanallur, where I
  learned the basics of HTML, CSS, and JavaScript. In my final year, I worked on a project using
  WordPress to create an online organic shop, which taught me in-depth knowledge about HTML, CSS, and
  the basics of web application flow.`;

  const content2 = ` I have the privilege of working at CISAI/Innspark, where I initially started my career as a fresher.
  I began as a graphic designer, creating brochures and wireframes. After three months, I transitioned
  to the development field as a front-end developer, and I now work as a Senior Front-End Developer. I
  have developed many projects, such as vehicle tracking systems, news portals, and health and
  cybersecurity projects. My current focus is on designing and developing projects based on machine
  learning.`;

  document.getElementById("aboutContent").innerHTML =
    content1 + "<br> <br>" + content2;

  addAboutSkills();
}

function addAboutSkills() {
  let skillList = ["Javascript", "Jquery", "Angular", "Reactjs"];
  let skillListPercentage = ["100%", "100%", "90%", "60%"];

  let skillsId = document.getElementById("aboutMeSkills");

  skillList.forEach((element, index) => {
    let progressBar = `<li> 
                   <span style="display:flex; justify-content: space-between; font-size:14px">
                   <span> ${element} </span>
                   <span> ${skillListPercentage[index]} </span>
                   </span>
                   <div class="progress">
                   <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${skillListPercentage[index]}" style="width: ${skillListPercentage[index]}" aria-valuemin="0" aria-valuemax="100"></div> 
                   </div>
                   </li>`;
    let skills = `<li> ${element} </li>`;
    skillsId.innerHTML += progressBar;
  });
}

function loadExperienceInfo() {
  const totalExp = 2;
  const expDate = ["Jan 2021 - Present", "Jun 2019 - July 2019"];
  const expLink = ["https://innspark.in/", "http://dreamcybersolutions.com/"];
  const expPlace = [
    "Innspark / CISAI, Kollam - Kerala",
    "Dream Cyber Solutions, Kadayanallur - Tamil Nadu",
  ];
  const expContentArray = [
    "Specializing in JavaScript and Angular, I took on leadership roles in developing user-friendly interfaces for a range of projects, including vehicle tracking systems, AI initiatives, and networking solutions. My efforts ensured seamless and intuitive user experiences, significantly enhancing project outcomes. Additionally, I provided mentorship and support to junior front-end developers, fostering a collaborative environment that strengthened our tech team and improved overall efficiency. Through my expertise and guidance, I contributed to the successful delivery of high-quality, innovative solutions.",
    "Hands-on experience in front-end web development, focusing on HTML, CSS, and JavaScript during the internship at this Company. Developed foundational skills in creating and styling web pages, as well as implementing basic interactivity.",
  ];
  const expType = ["", "(Internship)"];

  for (let index = 0; index < totalExp; index++) {
    const expContent = `
   <div class="row mb-3"> 
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"></div> 
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
    <span> ${expDate[index]} <br /> ${expType[index]}</span>
    </div>
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
       <a href=${expLink[index]} class="experiencePlace">
          <h6>${expPlace[index]} </h6>
          <i class="fa fa-external-link"></i>
       </a>
    <p class="paraTag">
      ${expContentArray[index]}
    </p>
    </div>
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
    </div>
    </div>
    `;

    document.getElementById("experienceContent").innerHTML += expContent;
  }
}

function loadWorkInfo() {
  let workInfoId = document.getElementById("workContent");

  let workHeading = [
    "Covid Portal",
    "Vehicle Tracking",
    "Accommodation System",
    "Cyber Security",
    "Firewall Portal",
    "News portal",
    "AI and ML portal",
  ];

  let workContentData = [
    "In my first project, the COVID portal, I was responsible for implementing minor modifications, creating new pages, and integrating REST APIs. This involved making adjustments to existing features, designing and coding new sections of the portal, and ensuring seamless communication between the front end and the back end through API integration. These tasks allowed me to enhance the portal's functionality and user experience.",
    "In the vehicle tracking project, which was my first front-end application I led, I began with minor modifications and bug fixes. Over time, I gradually took control and became responsible for the whole application's front end, making significant contributions to its development and functionality. Here I implemented vehicle tracking in the application using OpenStreetMap, enhancing its mapping and navigation capabilities.",
    "Worked on enhancing an existing accommodation system, focusing on modifications related to room allocation and other Front end related functionalities. This project involved improving user experience and optimizing the system's efficiency.",
    "Contributed to the development of configuration page and security dashboard pages etc..., enhancing the functionality and usability of these key cybersecurity tools.Also, utilized regular expressions (regex) to enhance data validation and processing.",
    "I led the development of a firewall portal, creating various pages and dashboards from scratch. I also managed access control functionalities, such as IP blacklisting and whitelisting, handled commit processes, and designed algorithms to display differences.",
    "I served as the sole front-end developer on a news portal project, where I were responsible for implementing and integrating features related to both live and local news. This involved close collaboration with backend teams to ensure seamless data integration.",
    "Utilized Angular to develop an AI and ML portal focused on file prediction and detection to prevent future attacks. Collaborated with the AI team to define the flow and procedures, developed the user interface, and integrated REST APIs for seamless functionality.",
  ];

  let vehicleTech = [
    {
      techList: [
        "JavaScript",
        "Jquery",
        "HTML",
        "CSS",
        "AJAX",
        "API Integration",
      ],
    },
    {
      techList: [
        "JavaScript",
        "Jquery",
        "HTML",
        "CSS",
        "OpenStreet Maps",
        "AJAX",
        "API Integration",
      ],
    },
    {
      techList: [
        "JavaScript",
        "Jquery",
        "HTML",
        "CSS",
        "AJAX",
        "API Integration",
      ],
    },
    {
      techList: [
        "JavaScript",
        "Jquery",
        "HTML",
        "CSS",
        "AJAX",
        "API Integration",
      ],
    },
    {
      techList: [
        "JavaScript",
        "Jquery",
        "HTML",
        "CSS",
        "AJAX",
        "API Integration",
        "Regex",
      ],
    },
    {
      techList: [
        "JavaScript",
        "Jquery",
        "HTML",
        "CSS",
        "AJAX",
        "API Integration",
      ],
    },
    {
      techList: ["Angular", "CSS", "API Integration"],
    },
  ];

  for (let index = 0; index < workHeading.length; index++) {
    let techUsed = "";

    let techs = vehicleTech[index];

    techs.techList.forEach((e) => {
      techUsed += `<span class="techUsedClass"> ${e} </span>`;
    });

    let workInfoData = `
    <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <span>
     <h5> ${workHeading[index]} </h5>
     <p class="paraTag"> ${workContentData[index]} </p>
    </span>
    <p style="display:flex" class="flex-wrap">
    ${techUsed}
    </p>
    </div>`;

    workInfoId.innerHTML += workInfoData;
  }
}
