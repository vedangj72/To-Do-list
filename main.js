// task 1:-onclick add display in show secton..

const addbutton = document.querySelector('.add');
const display = document.querySelector('.display-class');
const inp = document.querySelector('.valid-ip');
const text = document.querySelector('.text-update');
// const delbutton = document.querySelector('.button');
// console.log(display.innerHTML);

const need = document.querySelector('.need');
addbutton.addEventListener('click', show)

function show(e) {
    if (inp.value === '') {
        e.preventDefault();
        alert('enter kar na ');
    }
    let li = document.createElement('li');
    let li1 = document.createElement('li');
    let lable = document.createElement('lable');
    let input = document.createElement('input');
    let delbutton = document.createElement('button');
    let done = document.querySelector('.done-task');
    delbutton.innerHTML = 'delete';
    delbutton.onclick = function() {
        li.style.display = 'none';
    }
    delbutton.classList.add('del-it');
    lable.innerHTML = inp.value;
    input.type = 'checkbox';
    input.classList.add('input-class');
    li.style.listStyleType = 'number';
    li.classList.add("li-class");
    li.appendChild(input);
    li.appendChild(lable);
    li.appendChild(delbutton);
    need.appendChild(li);
    input.addEventListener("change", dothis)

    function dothis() {

        if (input.checked) {
            li.style.display = 'none';
            // console.log("checked it");
            // li1.appendChild(input);
            done.appendChild(lable);
            done.appendChild(delbutton);
            done.appendChild(li1);
        }
    }
    inp.value = '';
}
// delbutton.addEventListener('click', del);
// function del() {
//     display.style.display = 'none';
// }