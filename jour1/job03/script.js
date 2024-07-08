const articles =
[
{ titre: "Article 1", utilisateur: "user1" },
{ titre: "Article 2", utilisateur: "user2" },
{ titre: "Article 3", utilisateur: "user1" },
{ titre: "Article 4", utilisateur: "user3" },
{ titre: "Article 5", utilisateur: "user2" }
];


const result = articles.sort((a,b) => {
    if(a.utilisateur < b.utilisateur) {
        return -1;
    }
    if (a.utilisateur > b.utilisateur) {
        return 1;
    }
    return 0;
})

console.table(result);