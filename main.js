document.getElementById('red-c').addEventListener('click', () => {
    document.getElementById('nav').style.backgroundColor = 'red';
})

document.getElementById('blue-c').addEventListener('click', () => {
    document.getElementById('nav').style.backgroundColor = 'blue';
})

document.getElementById('green-c').addEventListener('click', () => {
    document.getElementById('nav').style.backgroundColor = 'green';
})

document.getElementById('black-c').addEventListener('click', () => {
    document.getElementById('nav').style.backgroundColor = 'black';
})

const items = [];

function createItem(text, bg) {
    const ne = document.createElement('div');
    ne.classList.add('ticket');
    ne.innerHTML = '<div class="col-b"></div>'
    ne.innerHTML += '<div class="id-b"><b>#ALKNALK</b></div>'
    ne.innerHTML += '<div class="text-b"></div>'
    ne.children.item(2).innerText = text;
    ne.children.item(0).style.backgroundColor = bg;
    return ne;
}

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('add-window').style.visibility = 'visible';
});

document.getElementById('col-r').addEventListener('click', () => {
    let ticket = createItem(document.getElementById('tick-text'), 'red');
    document.getElementById('tickets').appendChild(ticket);
    items.push(ticket);
    document.getElementById('add-window').style.visibility = 'hidden';
})







