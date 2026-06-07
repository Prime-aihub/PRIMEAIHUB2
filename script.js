/* ======================
PARTICLES GENERATOR
====================== */

const particles = document.getElementById("particles");

if(particles){

for(let i=0;i<120;i++){

let p = document.createElement("div");

p.classList.add("particle");

p.style.left = Math.random()*100 + "%";

p.style.animationDuration =
(5 + Math.random()*15) + "s";

p.style.animationDelay =
Math.random()*5 + "s";

particles.appendChild(p);

}

}

/* ======================
THREE JS AI GLOBE
====================== */

const aiBg =
document.getElementById("ai-bg");

if(aiBg && typeof THREE !== "undefined"){

const scene =
new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

aiBg.appendChild(
renderer.domElement
);

const geometry =
new THREE.SphereGeometry(
5,
64,
64
);

const material =
new THREE.MeshBasicMaterial({
wireframe:true,
color:0x00ffff
});

const globe =
new THREE.Mesh(
geometry,
material
);

scene.add(globe);

camera.position.z = 10;

function animate(){

requestAnimationFrame(
animate
);

globe.rotation.y += 0.002;

globe.rotation.x += 0.001;

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
'resize',
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});

}

/* ======================
ROBOT EYES FOLLOW MOUSE
====================== */

const eyes =
document.querySelectorAll('.eye');

document.addEventListener(
'mousemove',
(e)=>{

const x =
(e.clientX /
window.innerWidth - 0.5) * 8;

eyes.forEach(eye=>{

eye.style.transform =
`translateX(${x}px)`;

});

});

/* ======================
WHATSAPP CONTACT FORM
====================== */

function sendWhatsApp(){

let name =
document.getElementById("name")?.value || "";

let email =
document.getElementById("email")?.value || "";

let message =
document.getElementById("message")?.value || "";

if(name === "" ||
email === "" ||
message === ""){

alert(
"Please fill all fields first."
);

return;

}

let phone =
"919004130508";

let text =

`🚀 New PrimeAiHub Inquiry

👤 Name: ${name}

📧 Email: ${email}

💬 Message:
${message}

Sent From:
PrimeAiHub Website`;

let url =

`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

window.open(
url,
"_blank"
);

}

/* ======================
SMOOTH REVEAL ANIMATION
====================== */

const cards =
document.querySelectorAll(
'.card,.why-box'
);

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1;

entry.target.style.transform =
'translateY(0px)';

}

});

},
{
threshold:0.1
}
);

cards.forEach(card=>{

card.style.opacity = 0;

card.style.transform =
'translateY(50px)';

card.style.transition =
'all .8s ease';

observer.observe(card);

});
