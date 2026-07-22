// Loader

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

}


// Cursor Glow

const glow = document.querySelector(".cursor-glow");

if(glow){
    document.addEventListener("mousemove",(e)=>{

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });
}

/*====================================
PROJECT DATA
====================================*/

const projects = [

{
title:"Fee Management System",

category:"Desktop Application",

image:"assets/images/project-images/project1.jpeg",

tech:"HTML • PHP • CSS • JavaScript • MySQL",

description:"A complete Fee Management System developed for International Computer College Shakargarh to automate student fee operations. The system allows administrators to manage students, generate automatic fee schedules, collect payments, and print professional fee receipts. It also tracks institutional expenses and generates detailed monthly financial reports for better decision-making.",

features:[
"Student Record Management",
"Auto Fee Schedule",
"Fee Collection",
"Payment History",
"Receipt Generation",
"Expense Management",
"Monthly Reports",
"Income & Expense Tracking",
"Pending Fee Alerts",
"Installment Management",
"Dashboard Analytics",
"Search & Filter Records",
"Financial Report Generation",
"Secure Admin Panel",
"Data Backup & Recovery"
]

},

{

title:"AI Powered Smart Blind Assistant",

category:"Artificial Intelligence",

image:"assets/images/project-images/project2.jpeg",

tech:"Python • OpenCV • YOLO • Speech Recognition",

description:"An intelligent assistive system developed using YOLOv8 and Computer Vision to support visually impaired individuals. The application detects nearby objects and obstacles in real time and provides instant audio feedback for safe navigation. Designed with a focus on accuracy, low latency, and enhanced user mobility through AI-powered object detection and voice guidance.",

features:[
"Real-Time Object Detection",
"Obstacle Recognition",
"Audio Navigation Assistance",
"YOLOv8 Integration",
"Computer Vision Processing",
"Low-Latency Detection",
"Safe Indoor & Outdoor Navigation",
"Live Camera Monitoring",
"AI-Based Visual Assistance",
"User-Friendly Interface"
]

},

{

title:"CND Real-Time Banking Transaction Processing",

category:"Computer Networks",

image:"assets/images/project-images/project3.jpeg",

tech:"Cisco Packet Tracer • Networking",

description:"A secure banking management system built with MySQL to handle real-time financial transactions efficiently. The project uses Stored Procedures, Triggers, and optimized database design to ensure accurate fund transfers and transaction logging. It emphasizes security, data integrity, and high-performance database operations.",

features:[
"Customer Account Management",
"Real-Time Fund Transfer",
"Secure Transaction Processing",
"Stored Procedures",
"Database Triggers",
"Audit Log Management",
"B-Tree Index Optimization",
"Balance Validation",
"Transaction History",
"MySQL Database Integration"
]

},

{

title:"Brainify Mobile App",

category:"Android Application",

image:"assets/images/project-images/project4.jpeg",

tech:"Java • Kotlin • Firebase • XML",

description:"An interactive Android learning application developed using Kotlin and the Android SDK. The app provides subject-wise study material and MCQ-based assessments with a clean and user-friendly interface. It is designed to improve learning engagement while delivering a smooth mobile experience.",

features:[
"Student Authentication",
"MCQ-Based Assessments",
"Subject-Wise Learning",
"Interactive Quiz System",
"Progress Tracking",
"Modern Android UI",
"Kotlin Development",
"Learning Dashboard",
"Easy Navigation",
"Responsive Mobile Design"
]

},

{

title:"Hospital Management Network Architecture",

category:"Network Design",

image:"assets/images/project-images/project5.jpeg",

tech:"Cisco Packet Tracer",

description:"A comprehensive hospital network infrastructure designed using Cisco Packet Tracer. The project implements VLANs to securely separate hospital departments and improve network efficiency. It ensures reliable communication, secure data flow, and optimized traffic management across the organization.",

features:[
"Hospital Network Design",
"VLAN Configuration",
"Department Segmentation",
"Cisco Packet Tracer Simulation",
"Network Security",
"Traffic Management",
"IP Address Planning",
"Router & Switch Configuration",
"Scalable Network Infrastructure",
"Reliable Data Communication"
]

},

{

title:"Airline Management System",

category:"Database System",

image:"assets/images/project-images/project6.jpeg",

tech:"Java • MySQL",

description:"A database-driven airline management solution developed using MySQL and XAMPP. The system efficiently manages flight schedules, passenger information, airport operations, and booking records. It provides a structured and scalable database architecture for smooth airline management.",

features:[
"Passenger Management",
"Flight Scheduling",
"Airport Management",
"Booking Management",
"MySQL Database",
"Flight Status Tracking",
"Ticket Reservation",
"Data Management",
"Admin Dashboard",
"Report Generation"
]

},

{

title:"Balloon Shooter Game",

category:"Game Development",

image:"assets/images/project-images/project7.jpeg",

tech:"Java",

description:"A classic 2D Balloon Shooter Game developed in x86 Assembly Language using DOS interrupts and low-level graphics programming. The game features real-time keyboard controls, collision detection, score tracking, and optimized performance. It demonstrates strong knowledge of hardware-level programming and memory management.",

features:[
"2D Arcade Gameplay",
"Balloon Shooting Mechanics",
"Real-Time Collision Detection",
"Score Tracking",
"Keyboard Controls",
"x86 Assembly Programming",
"DOS Interrupt Graphics",
"Memory Optimization",
"Game Over & Restart",
"Retro Pixel Interface"
]

},

{

title:"Cloud Distributed Computing Simulation",

category:"Cloud Computing",

image:"assets/images/project-images/project8.jpeg",

tech:"CloudSim",

description:"A distributed computing simulation developed in C++ to demonstrate fault-tolerant task scheduling and workload distribution. The system automatically detects node failures and migrates pending tasks to healthy nodes. It focuses on load balancing, high availability, and reliable distributed system performance.",

features:[
"Distributed Task Scheduling",
"Node Crash Detection",
"Automatic Task Migration",
"Load Balancing",
"Fault Tolerance",
"C++ Implementation",
"Cluster Simulation",
"High Availability",
"Resource Management",
"Performance Optimization"
]

}

];


/*====================================
GET ELEMENTS
====================================*/

const modal=document.querySelector(".project-modal");

const cards=document.querySelectorAll(".project-card");

const closeBtn=document.querySelector(".close-modal");

const modalImage=document.getElementById("modal-image");

const modalTitle=document.getElementById("modal-title");

const modalCategory=document.getElementById("modal-category");

const modalTech=document.getElementById("modal-tech");

const modalDescription=document.getElementById("modal-description");

const modalFeatures=document.getElementById("modal-features");

let currentProject=0;

/*====================================
LOAD PROJECT
====================================*/

function loadProject(index){

currentProject=index;

const project=projects[index];

modalImage.src=project.image;

modalTitle.innerHTML=project.title;

modalCategory.innerHTML=project.category;

modalTech.innerHTML=project.tech;

modalDescription.innerHTML=project.description;

modalFeatures.innerHTML="";

project.features.forEach(feature=>{

modalFeatures.innerHTML+=`
<li><i class="fa-solid fa-circle-check"></i> ${feature}</li>
`;

});

}


/*====================================
OPEN PROJECT
====================================*/

cards.forEach(card=>{

card.addEventListener("click",()=>{

const index=card.dataset.project;

loadProject(index);

modal.classList.add("active");

document.body.style.overflow="hidden";

});

});


/*====================================
CLOSE MODAL
====================================*/

closeBtn.addEventListener("click",()=>{

modal.classList.remove("active");

document.body.style.overflow="auto";

});


/*====================================
CLICK OUTSIDE TO CLOSE
====================================*/

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

document.body.style.overflow="auto";

}

});
/*====================================
NEXT & PREVIOUS
====================================*/

const nextBtn = document.querySelector(".next-project");
const prevBtn = document.querySelector(".prev-project");

nextBtn.addEventListener("click",(e)=>{

e.stopPropagation();

currentProject++;

if(currentProject>=projects.length){

currentProject=0;

}

loadProject(currentProject);

});


prevBtn.addEventListener("click",(e)=>{

e.stopPropagation();

currentProject--;

if(currentProject<0){

currentProject=projects.length-1;

}

loadProject(currentProject);

});


/*====================================
KEYBOARD SUPPORT
====================================*/

document.addEventListener("keydown",(e)=>{

if(!modal.classList.contains("active")) return;

if(e.key==="Escape"){

modal.classList.remove("active");

document.body.style.overflow="auto";

}

if(e.key==="ArrowRight"){

currentProject++;

if(currentProject>=projects.length){

currentProject=0;

}

loadProject(currentProject);

}

if(e.key==="ArrowLeft"){

currentProject--;

if(currentProject<0){

currentProject=projects.length-1;

}

loadProject(currentProject);

}

});


/*====================================
IMAGE LOADING EFFECT
====================================*/

modalImage.addEventListener("load",()=>{

modalImage.style.opacity="0";

modalImage.style.transform="scale(.96)";

setTimeout(()=>{

modalImage.style.transition=".35s";

modalImage.style.opacity="1";

modalImage.style.transform="scale(1)";

},100);

});


/*====================================
STOP PROPAGATION
====================================*/

document.querySelector(".modal-box").addEventListener("click",(e)=>{

e.stopPropagation();

});


/*====================================
SMOOTH SCROLL TO PROJECTS
====================================*/

document.querySelectorAll('a[href="#projects"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#projects").scrollIntoView({

behavior:"smooth"

});

});

});
/*====================================
CERTIFICATE DATA
====================================*/

const certificates = [

{
title:"Advance Certificate in Information Technology",
image:"assets/images/certificates/cert1.jpeg",
issued:"National Vocational & Technical Training Commission (NAVTTC)",
skills:[
"Computer Fundamentals",
"MS Word",
"MS Excel",
"MS PowerPoint",
"Internet & Email",
"Windows",
"Typing Skills"
]
},

{
title:"Web Development, Graphic Designing & Digital Marketing",
image:"assets/images/certificates/cert2.jpeg",
issued:"Tenzsoft",
skills:[
"HTML",
"CSS",
"JavaScript",
"Graphic Designing",
"Canva",
"Adobe Photoshop",
"Digital Marketing",
"Social Media Marketing"
]
},

{
title:"Foundations: Data, Data, Everywhere",
image:"assets/images/certificates/cert3.jpeg",
issued:"Google Coursera",
skills:[
"Data Analysis",
"Data Collection",
"Data Cleaning",
"Spreadsheets",
"SQL Basics",
"Data Ethics"
]
},

{
title:"AI Fundamentals",
image:"assets/images/certificates/cert4.jpeg",
issued:"Google Coursera",
skills:[
"Artificial Intelligence",
"Machine Learning Basics",
"Generative AI",
"Prompt Engineering",
"Responsible AI",
"AI Applications"
]
}

];


/*====================================
GET ELEMENTS
====================================*/

const certModal=document.querySelector(".certificate-modal");
const certCards=document.querySelectorAll(".certificate-card");
const certClose=document.querySelector(".close-cert");
const certImage=document.getElementById("certificate-preview");
const certTitle=document.getElementById("cert-title");
const certIssued=document.getElementById("cert-issued");
const certSkills=document.getElementById("cert-skills");
const nextCert=document.querySelector(".next-cert");
const prevCert=document.querySelector(".prev-cert");

let currentCert=0;


/*====================================
LOAD CERTIFICATE
====================================*/

function loadCertificate(index){

currentCert=index;

const cert=certificates[index];

certImage.src=cert.image;

certTitle.innerHTML=cert.title;

certIssued.innerHTML=cert.issued;

certSkills.innerHTML="";

cert.skills.forEach(skill=>{

certSkills.innerHTML+=`
<li><i class="fa-solid fa-circle-check"></i> ${skill}</li>
`;

});

}


/*====================================
OPEN CERTIFICATE
====================================*/

certCards.forEach(card=>{

card.addEventListener("click",()=>{

loadCertificate(card.dataset.cert);

certModal.classList.add("active");

document.body.style.overflow="hidden";

});

});


/*====================================
CLOSE
====================================*/

certClose.addEventListener("click",()=>{

certModal.classList.remove("active");

document.body.style.overflow="auto";

});


certModal.addEventListener("click",(e)=>{

if(e.target===certModal){

certModal.classList.remove("active");

document.body.style.overflow="auto";

}

});


/*====================================
NEXT
====================================*/

nextCert.addEventListener("click",(e)=>{

e.stopPropagation();

currentCert++;

if(currentCert>=certificates.length){

currentCert=0;

}

loadCertificate(currentCert);

});


/*====================================
PREVIOUS
====================================*/

prevCert.addEventListener("click",(e)=>{

e.stopPropagation();

currentCert--;

if(currentCert<0){

currentCert=certificates.length-1;

}

loadCertificate(currentCert);

});


/*====================================
KEYBOARD
====================================*/

document.addEventListener("keydown",(e)=>{

if(!certModal.classList.contains("active")) return;

if(e.key==="Escape"){

certModal.classList.remove("active");

document.body.style.overflow="auto";

}

if(e.key==="ArrowRight"){

currentCert++;

if(currentCert>=certificates.length){

currentCert=0;

}

loadCertificate(currentCert);

}

if(e.key==="ArrowLeft"){

currentCert--;

if(currentCert<0){

currentCert=certificates.length-1;

}

loadCertificate(currentCert);

}

});


/*====================================
STOP PROPAGATION
====================================*/

document.querySelector(".certificate-box").addEventListener("click",(e)=>{

e.stopPropagation();

});

/*====================================
EDUCATION SCROLL ANIMATION
====================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const educationObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateX(0)";
            entry.target.style.transition="all .8s ease";

        }

    });

},{
    threshold:0.2
});

timelineItems.forEach((item,index)=>{

    item.style.opacity="0";

    item.style.transform=index%2===0
    ?"translateX(-80px)"
    :"translateX(80px)";

    educationObserver.observe(item);

});
/*=============================
EMAIL JS
=============================*/

emailjs.init("YKb0y6NtyaT-EZFE-");

const contactForm=document.querySelector("#contact-form");

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const btn=contactForm.querySelector("button");

btn.innerHTML="Sending...";

btn.disabled=true;

emailjs.send("service_cvw6dn5","template_826jj5r",{

name:contactForm.querySelectorAll("input")[0].value,

email:contactForm.querySelectorAll("input")[1].value,

subject:contactForm.querySelectorAll("input")[2].value,

message:contactForm.querySelector("textarea").value

})

.then(()=>{

alert("Message Sent Successfully!");

contactForm.reset();

btn.innerHTML="Send Message";

btn.disabled=false;

})

.catch(()=>{

alert("Something went wrong.");

btn.innerHTML="Send Message";

btn.disabled=false;

});

});
