const joinNs = (elem,nsData) => {
    const nsEndpoint = elem.getAttribute('ns');
    console.log(`${nsEndpoint} I should go to now`);

    const clickedNs = nsData.find(row=>row.endpoint === nsEndpoint);
    console.log(clickedNs.rooms);

    const rooms = clickedNs.rooms;
    
    let roomList = document.querySelector('.room-list');
    // Clear the room list
    roomList.innerHTML = "";
    // Update the room list
    rooms.forEach((room) => {
        // console.log(room);
        roomList.innerHTML += `<li class="room"><span class="glyphicon glyphicon-${room.privateRoom ? 'lock' : 'globe'}"></span>${room.roomTitle}</li>`;
    });
};