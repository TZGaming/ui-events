/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: link variabelen
let designLink = document.querySelector('a[href="#design"]')
let frontendLink = document.querySelector('a[href="#frontend"]')
let andLink = document.querySelector('a[href="#and"]')
let developmentLink = document.querySelector('a[href="#development"]')
let sprintLink = document.querySelector('a[href="#sprint-5"]')
let fixLink = document.querySelector('a[href="#fix"]')
let theLink = document.querySelector('a[href="#the"]')
let flowLink = document.querySelector('a[href="#flow"]')
let userLink = document.querySelector('a[href="#user"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)



// Frontend animatie click event
frontendLink.addEventListener('click', scaleHandler)

// Scale functie
function scaleHandler() {
    frontendLink.classList.toggle('scale')
}


// & animatie click event
andLink.addEventListener('click', transformHandler)

// Transform functie
function transformHandler() {
    andLink.classList.toggle('transform')
}


// Development animatie click event
developmentLink.addEventListener('dblclick', shakeHandler)

// Shake functie
function shakeHandler() {
    developmentLink.classList.toggle('shake')
}


// Sprint 5 animatie click event
sprintLink.addEventListener('click', focusHandler)

// Focus functie
function focusHandler() {
    sprintLink.classList.toggle('focus')
}


// Select het element in de HTML
const fix = document.getElementById("fix");

// Fix animatie click event
fixLink.addEventListener('mouseover', textchangeHandler)

// Text content functie
function textchangeHandler() {
    document.getElementById("fix").textContent = "Wat?";
}



// The animatie click event
theLink.addEventListener('mouseout', rotateHandler)

// Rotatie animatie functie
function rotateHandler() {
    theLink.classList.toggle('rotate')
}


// Event listener voor de muis direction
flowLink.addEventListener("mouseenter", rotateUpHandler);
flowLink.addEventListener("mouseleave", rotateDownHandler);

// Functie voor de upwards flip
function rotateUpHandler() {
    flowLink.classList.add("rotateUp");
        setTimeout(() => {
        flowLink.classList.remove("rotateUp");
    }, 500);
}

// Functie voor de downwards flip
function rotateDownHandler() {
    flowLink.classList.add("rotateDown");
        setTimeout(() => {
        flowLink.classList.remove("rotateDown");
    }, 500);
}



// Color key functie
document.addEventListener('keyup', keyColorHandler);

function keyColorHandler(event) {
    const key = event.key;

    const colors = {
        a: 'red',
        b: 'blue',
        c: 'green',
        d: 'orange',
        e: 'purple'
    };

    if (colors[key]) {
        userLink.style.color = colors[key];
    }
}


// Ballon
const interfaceLink = document.querySelector('#interface');

document.addEventListener('keydown', () => {
    interfaceLink.classList.add('balloon-big');
});

document.addEventListener('keyup', () => {
    interfaceLink.classList.remove('balloon-big');
});



const eventsLink = document.querySelector('a[href="#events"]');

let fontSize = 32; // beginwaarde

eventsLink.addEventListener("wheel", (event) => {

  if (event.deltaY < 0) {
    // scroll omhoog → vergroten
    fontSize += 1;
  } else {
    // scroll omlaag → verkleinen
    fontSize -= 1;
  }

  // Text kan niet te klein worden
  fontSize = Math.max(6, fontSize);

  eventsLink.style.fontSize = fontSize + "px";
});
