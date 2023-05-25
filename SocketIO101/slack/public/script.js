
// const userName = prompt("What is your name?");
// const password = prompt("What is your password?");


const userName = "testuser"
const password = "testpassword"

const socket = io("http://localhost:9000");
socket.on('connect', function(){
    socket.emit('clientConnect');
});

// Listen for nsList, which is a list of all the namespaces
socket.on('nsList', (nsData) => {
    const lastNs = localStorage.getItem('lastNs');

    // 
    document.querySelector('.namespaces').innerHTML = "";
    nsData.forEach((ns) => {
        // console.log(ns);
        // Update the DOM with the namespace data
        document.querySelector('.namespaces').innerHTML += `<div class="namespace" ns=${ns.endpoint}><img src=${ns.image} /></div>`;
    });

    // Add a click listener for each NS
    Array.from(document.getElementsByClassName('namespace')).forEach((elem) => {
        // console.log(elem);
        elem.addEventListener('click', (e) => {
            joinNs(elem, nsData);
        });
    });

    // if lastNs is set, grab the element instead of 0.
    joinNs(document.querySelector('.namespace'), nsData);
});