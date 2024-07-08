const userArray =
[
{ firstName: 'Alice', lastName: 'Dupont', isActive: true},
{ firstName: 'Bob', lastName: 'Martin', isActive: false},
{ firstName: 'Charlie', lastName: 'Durand', isActive: true},
{ firstName: 'Diana', lastName: 'Leclerc', isActive: false},
{ firstName: 'Eve', lastName: 'Lambert', isActive: true}
];


function renderUsers() {
    const userList = document.getElementById('mesUtilisateurs');
    userList.innerHTML = '';

    userArray.forEach((user, index) => {
        const userElement = document.createElement('div');
        userElement.className = user.isActive ? 'active' : 'inactive';
        userElement.textContent = `${user.firstName} ${user.lastName}`;
        userElement.addEventListener('click', () => toggleUserState(index));
        userList.appendChild(userElement);
    });
}


function toggleUserState(index) {
    userArray[index].isActive = !userArray[index].isActive;
    renderUsers();
}

document.addEventListener('DOMContentLoaded', renderUsers);