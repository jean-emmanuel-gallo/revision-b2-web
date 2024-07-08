const userArray = [
    { firstname: 'Alice', lastName: 'Dupont', isActive: true},
    { firstname: 'Bob', lastName: 'Martin', isActive: false},
    { firstname: 'Charlie', lastName: 'Durand', isActive: true},
    { firstname: 'Diana', lastName: 'Leclerc', isActive: false},
    { firstname: 'Eve', lastName: 'Lambert', isActive: true}
];

const resultat = userArray.filter((userArray) => userArray.isActive==true)

console.table(resultat);