const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});


const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');


menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});


const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

// Get the total amount from the input field
// var totalAmount = parseFloat(document.getElementById('Number').value);

// // Get all the checkboxes or input fields for people involved
// var checkboxes = document.getElementById('Member');

// // Count the number of people selected
// var numberOfPeople = 0;
// checkboxes.forEach(function(checkbox) {
//     if (checkbox.checked) {
//         numberOfPeople++;
//     }
// });

// // Calculate the amount each person has to pay
// var amountPerPerson = totalAmount / numberOfPeople;

// // Display the amount each person has to pay
// checkboxes.forEach(function(checkbox) {
//     if (checkbox.checked) {
//         var personName = checkbox.value; // Get the person's name from the checkbox value
//         alert(personName + ' has to pay: $' + amountPerPerson.toFixed(2));
//     }
// });

// var total = document.getElementById("Number");
// var Member = document.getElementById("Member");

// const value = total / Member;

// document.getElementById("Number2").innerHTML = value;

// function calculateDivision() {
//     var numerator = parseFloat(document.getElementById('Number').value);
//     var denominator = parseFloat(document.getElementById('Number3').value);

//     if (denominator !== 0) {
//         var result = numerator / denominator;
//         document.getElementById('resultInput').value = result;
//     } else {
//         document.getElementById('resultInput').value = "Cannot divide by zero!";
//     }
// }

// Get the input elements
var numeratorInput = document.getElementById('Number');
var denominatorInput = document.getElementById('Number3');
var resultInput = document.getElementById('Number2');

// Event listeners for input or change events
numeratorInput.addEventListener('input', calculateDivision);
denominatorInput.addEventListener('input', calculateDivision);

function calculateDivision() {
    var numerator = parseFloat(numeratorInput.value);
    var denominator = parseFloat(denominatorInput.value);

    if (denominator !== 0) {
        var result = numerator / denominator;
        resultInput.value = result;
    } else {
        resultInput.value = "Cannot divide by zero!";
    }
}
