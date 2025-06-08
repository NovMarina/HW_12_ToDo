const btnAdd = document.querySelector('.addBtn');
const listToDo = document.querySelector('.toDo_list');
const secondLay = document.getElementById('secondLay');
const cancelBtn = document.getElementById('cancelBtnSecLay');
const secLayAddBtn = document.getElementById('addBtnSecLay');
const day = document.getElementById('today')
const inputText = document.getElementById('textToDo');

function date() {
    const currentdate = new Date();
    return currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear();
}

day.textContent = date();

btnAdd.onclick = function () {
    secondLay.style.display = "flex";
}

cancelBtn.onclick = function () {
    inputText.value = '';
    secondLay.style.display = "none";
}

secLayAddBtn.addEventListener('click', function () {

    const textValue = inputText.value.trim();
    if (!textValue) return alert("No input data! Enter text or cancel.")

    const newRowToDo = document.createElement('div')
    newRowToDo.className = 'rowToDo';
    newRowToDo.innerHTML = `
<div class="check"> </div>
<div class="task">${textValue}</div>
<div class="wastebasket"><img id="wastebasketIcon" src="assets/wastebasket_close.png" alt="wastebasket_close"></div>`;

    const checkBox = newRowToDo.querySelector('.check');
    const taskBox = newRowToDo.querySelector('.task');
    const wastebasketIcon = newRowToDo.querySelector('#wastebasketIcon');

    wastebasketIcon.addEventListener('mouseover', () => {
        wastebasketIcon.src = 'assets/wastebasket_open.png';
    });
    wastebasketIcon.addEventListener('mouseout', () => {
        wastebasketIcon.src = 'assets/wastebasket_close.png';
    });
    wastebasketIcon.addEventListener('click', () => {
        newRowToDo.remove();
    });
    checkBox.addEventListener('click', () => {
        if (checkBox.textContent === '✔') {
            checkBox.textContent = '';
            taskBox.classList.remove('done');
        } else {
            checkBox.textContent = '✔';
            taskBox.classList.add('done');
        }
    });
    listToDo.appendChild(newRowToDo);

    inputText.value = '';
    secondLay.style.display = "none";
})



