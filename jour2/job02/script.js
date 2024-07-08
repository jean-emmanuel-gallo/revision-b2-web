const articlesArray = [
    { id: 1, title: 'Introduction to JavaScript',
    content: 'JavaScript is a versatile programming language used for web development.',
    createdAt: new Date('2024-01-01T10:00:00Z'),
    updatedAt: new Date('2024-01-02T12:00:00Z')
    },
    { id: 2, title: 'Understanding CSS',
    content: 'CSS is used to style HTML elements and make web pages look attractive.',
    createdAt: new Date('2024-01-05T14:00:00Z'),
    updatedAt: new Date('2024-01-06T16:00:00Z')
    },
    { id: 3, title: 'Getting Started with HTML',
    content: 'HTML is the standard markup language for creating web pages.',
    createdAt: new Date('2024-01-10T09:00:00Z'),
    updatedAt: new Date('2024-01-11T11:00:00Z')
    }
    ]




    function limitLength(content, length) {
        if (content.length > length) {
            return content.substring(0, length) + '...';
        }
        return content;
    }
    
    
    



const articlesContainer = document.getElementById('articles_list');

articlesArray.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.className = 'article';
    articleElement.innerHTML = `
    <h2>${article.title}</h2>
        <p>${limitLength(article.content, 10)}</p>
    `;

    articleElement.addEventListener('click', () => showFullContent(article));
    articlesContainer.appendChild(articleElement);
});




function showFullContent(article) {
    alert(article.content);
}    <div id="articles_list"></div>

