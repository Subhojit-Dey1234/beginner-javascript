const office = document.querySelector('.Office');
const image = document.querySelector('.image');
const CountrySide = document.querySelector('.CountrySide');
const playGround = document.querySelector('.PlayGround');

office.addEventListener('mouseover',function(){
    image.src = 'images/map-blue.png';
})
office.addEventListener('mouseout',function(){
    image.src = 'images/original.png';
})


CountrySide.addEventListener('mouseover',function(){
    image.src = 'images/map-red.png';
})
CountrySide.addEventListener('mouseout',function(){
    image.src = 'images/original.png';
})


playGround.addEventListener('mouseover',function(){
    image.src = 'images/map-green.png';
})
playGround.addEventListener('mouseout',function(){
    image.src = 'images/original.png';
})