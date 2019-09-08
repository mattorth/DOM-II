// Your code goes here
const welcomeHeading = document.querySelector('.container.home .intro h2');
welcomeHeading.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
});

allImages = document.querySelectorAll('img');
allImages.forEach((image) => {
    image.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale(1.3)';
        event.target.style.transition = 'transform 0.5s';
        console.log('mouseenter');
    });

    image.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1.0)';
        event.target.style.transition = 'trasform 0.5s';
    });
});

const textContentColor = document.querySelectorAll('.text-content');

textContentColor.forEach((textBox) => {
    window.addEventListener('keydown', (event) => {
        event.target.style.backgroundColor = 'yellow';
        console.log('keydown');
    });

    window.addEventListener('keyup', (event) => {
        event.target.style.backgroundColor = '';
        console.log('keyup');
    });
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.style.borderColor = 'red';
        console.log('click');
        event.stopPropagation();
    });
});

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((para) => {
    para.addEventListener('dblclick', (event) => {
        event.target.style.color = "blue";
        console.log(para);
    });
});

paragraphs.forEach((para) => {
    para.addEventListener('mousedown', function(event) {
        event.target.style.color = 'green';
    });

    para.addEventListener('mouseup', function(event) {
        event.target.style.color = 'dodgerblue';
    });
});

window.addEventListener('resize', function() {
    alert('You have resized the screen.');
});

const firstDestination = document.querySelector('.container.home .content-pick .destination');

firstDestination.addEventListener('click', function(event) {
    firstDestination.style.backgroundColor = 'red'
});

const navElements = document.querySelectorAll('.main-navigation .container.nav-container .nav .nav-link');

navElements.forEach((nav) => {
    nav.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('default prevented');
    })
})











// const funBusImage = document.querySelector('.container.home .intro img');

// funBusImage.draggable = 'true';

// funBusImage.addEventListener('dragstart', (event) => {
//     // event.preventDefault();
//     event.dataTransfer.setData("text", event.target.id);
// });



// funBusImage.addEventListener('dragend', (event) => {
//     event.preventDefault();

//     event.target.appendChild(funBusImage);

//     funBusImage.parentNode.removeChild(funBusImage);
// })

// document.addEventListener("dragover", function(event) {
//     event.preventDefault();
//   }, false);