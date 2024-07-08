const str = "sport amimentation repos";
const mots = str.split(' ');


const sectionsContainer = document.getElementById('sections-container');

mots.forEach(mot => {
    const sectionElement = document.createElement('div');
    sectionElement.className = 'section';
    sectionElement.textContent = mot;
    sectionsContainer.appendChild(sectionElement);
})