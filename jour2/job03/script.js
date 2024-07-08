const articles = [
    { titre: "Article 1", utilisateur: "user1" },
    { titre: "Article 2", utilisateur: "user2" },
    { titre: "Article 3", utilisateur: "user1" },
    { titre: "Article 4", utilisateur: "user3" },
    { titre: "Article 5", utilisateur: "user2" }
    ];

    

    const articlesParUtilisateur = {};

    articles.forEach(article => {
        const utilisateur = article.utilisateur;
        if(!articlesParUtilisateur[utilisateur]) {
            articlesParUtilisateur[utilisateur] = [];
        }
        articlesParUtilisateur[utilisateur].push(article);
    })

    console.table(articlesParUtilisateur);



    const uContainer = document.getElementById('myUsers'); 
    

    Object.keys(articlesParUtilisateur).forEach(utilisateur => {
        const utilisateurElement = document.createElement('div');
        utilisateurElement.className = "utilisateur";
        utilisateurElement.innerHTML = `
        <h2>${utilisateur}</h2>
        <div class="articles" style="display: none;">
            ${articlesParUtilisateur[utilisateur].map(article => `<p>${article.titre}</p>`).join('')}
        </div>
        `;
        uContainer.appendChild(utilisateurElement);
    });



    document.querySelectorAll('.utilisateur h2').forEach(header => {
        header.addEventListener('click', () => {
            const articlesDiv = header.nextElementSibling;
            articlesDiv.style.display = articlesDiv.style.display === 'none' ? 'block' : 'none';
        });
    });
    