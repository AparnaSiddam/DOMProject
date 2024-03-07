window.addEventListener('mouseover', function(e){
    allStyles();

})

function allStyles(){

const header = document.querySelector('h1');
const para = document.querySelector('p');
const ulList = document.querySelector('ul');
const divv = document.querySelector('div');
const lists = document.querySelectorAll('li');
const form = document.querySelector('form');
const nameN = document.querySelector('#name');
const password = document.querySelector('#password');
const btn = document.querySelector('input[type="submit"]');


document.body.style.backgroundColor = '#eee';
document.body.style.fontFamily = 'Arial';
document.body.style.height = '100vh';

header.style.textAlign = 'center';
header.style.color = 'green';

para.style.textAlign = 'center';
para.style.color = 'green';

ulList.style.backgroundColor = '#999';
ulList.style.padding = '20px';
ulList.style.listStyleType = 'none';
ulList.style.fontWeight = 'bold';
ulList.style.textAlign = 'center';


ulList.querySelector(`li:first-child`).style.color = 'blue';
ulList.querySelector(`li:first-child`).style.padding = '10px';

ulList.querySelector(`li:nth-child(2)`).style.color = 'green';
ulList.querySelector(`li:nth-child(2)`).style.padding = '10px';

ulList.querySelector(`li:nth-child(3)`).style.color = 'yellow';
ulList.querySelector(`li:nth-child(3)`).style.padding = '10px';

ulList.querySelector(`li:nth-child(4)`).style.color = 'pink';
ulList.querySelector(`li:nth-child(4)`).style.padding = '10px';

ulList.querySelector(`li:nth-child(5)`).style.color = 'orangered';
ulList.querySelector(`li:nth-child(5)`).style.padding = '10px';

ulList.querySelector(`li:nth-child(6)`).style.color = 'skyblue';
ulList.querySelector(`li:nth-child(6)`).style.padding = '10px';

ulList.querySelector(`li:nth-child(7)`).style.color = 'red';
ulList.querySelector(`li:nth-child(7)`).style.padding = '10px';

ulList.querySelector(`li:nth-child(8)`).style.color = 'green';
ulList.querySelector(`li:nth-child(8)`).style.padding = '10px';

lists.forEach(function(list){
    list.style.marginTop = '10px';
})

divv.style.width = '200px';
divv.style.height = '200px';
divv.style.backgroundColor = 'maroon';
divv.style.color = 'white';
divv.style.display = 'flex';
divv.style.alignItems = 'center';
divv.style.justifyContent = 'center';
divv.style.borderRadius = '50%';
divv.style.textAlign = 'center';
divv.style.margin = 'auto';
divv.style.borderTop = '10px solid red';
divv.style.borderRight = '10px solid blue';
divv.style.borderBottom = '10px solid yellow';
divv.style.borderLeft = '10px solid green';

form.style.maxWidth = '900px';
form.style.margin = 'auto';
form.style.backgroundColor = 'lightblue';
form.style.padding = '20px';
form.style.marginTop = '20px';

nameN.style.display = 'block';
nameN.style.width = '100%';
nameN.style.padding = '10px';

password.style.display = 'block';
password.style.width = '100%';
password.style.padding = '10px';
password.style.marginTop = '10px';

btn.style.display = 'block';
btn.style.width = '100%';
btn.style.backgroundColor = 'green';
btn.style.padding = '10px';
btn.style.marginTop = '10px';
btn.style.border = 'none';
btn.style.color = '#fff';
btn.style.fontWeight = 'bold';

}






