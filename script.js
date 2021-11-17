// Mobile menu
const menu = document.querySelector('.cont-menu');
const hamburger = document.querySelector('.mobile-menu-button');
const xIcon = document.querySelector('.xIcon');

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        xIcon.style.display = 'none';
    } else {
        menu.classList.add('showMenu');
        xIcon.style.display = 'block'
    }
}

hamburger.addEventListener('click', toggleMenu);

/*// Speakers
const featuredSpeakers = document.getElementById('speakers');
const Speakers = [
    {
        name: 'Nico Krüger',
        company: 'Rollbar, USA',
        image: './Images/speaker1.jpg',
        bio: 'Nico is the Senior Director of Solutions Engineering at Rollbar. He has spent over 13 years working with companies around the world to improve their software development lifecycle focused on quality critical applications.',
    },
    {
        name: 'Jason Lengstorf',
        company: 'Netlify, USA',
        image: './Images/speaker2.jpg',
        bio: 'Jason Lengstorf works at Netlify and hosts Learn With Jason. He spends a lot of time telling people that the formula for success and happiness   is to lift each other up and share what we learn.',
    },
    { 
        name: 'Maggie Johnson-Pint',
        company: 'Netlify, USA',
        image: './Images/speaker3.jpg',
        bio: 'Maggie is an open-source community advocate who works on the Azure SDK  team at Microsoft to ensure every developer on every platform has an incredible experience with the cloud. JavaScript is her first love, especially date, and time problems.',
    },
    {
        name: 'Will Johnston',
        company: 'WP Engine, USA',
        image: './Images/speaker4.jpg',
        bio: 'Will Johnston is a Developer Advocate on the DevRel team at WP Engine. He started coding when he was 10 years old, and began coding professionally at 15. He got his start working on an open source competency tracking tool for schools with Python and Zope. ',
    },
    {
        name: 'Fabrizio Picca',
        company: 'Commercelayer, Italy',
        image: './Images/speaker5.jpg',
        bio: 'Java developer, Software Architect and Enterprise Commerce Expert. Dad of one soon to be two, loves music, photography, cooking and running.',
    },
    {
        name: 'Vasilika Klimova',
        company: 'Avaloq, Luxembourg',
        image: './Images/speaker6.jpg',
        bio: 'Frontend developer at Avaloq. Founder of the SkillUp school in Luxembourg. Teacher, speaker, rescue diver, mother of a ginger cat. Loves beautiful visual effects on websites, responsive markup, video games and travel.',
    },
];

Speakers.forEach((item) => {
    featuredSpeakers.innerHTML += `

    <div class="speakerss">
        <img src="${item.image}"
    </div>     
    <div class="speakers-info">
        <h2 class="speaker-name">${item.name}</h2>
        <p class="italik-red">${item.company}</p>
        <p class="about">${item.bio}</p>
    </div>    
`;
});*/

showMore.addEventListener('click', (e) => {
    e.preventDefault();
    const speakersContainer = document.querySelector('.speakers .card-container');
    if(!showMore.classList.contains('less')) {
        showMore.classList.add('less');
        speakersContainer.style.maxHeight = 'unset';
        showMore.innerText = 'Show Less';
      } else {
        showMore.classList.remove('less');
        speakersContainer.style = '';
        showMore.innerText = 'Show More';
    }
});
