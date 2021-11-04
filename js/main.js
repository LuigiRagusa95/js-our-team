const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const imageField = document.getElementById('image');
const addButton = document.getElementById('addMemberButton');

const data = [
	{ name: 'Wayne Barnett', role: 'Founder & CEO', image: '../img/wayne-barnett-founder-ceo.jpg' },
	{ name: 'Angela Caroll', role: 'Chief Editor', image: '../img/angela-caroll-chief-editor.jpg' },
	{ name: 'Walter Gordon', role: 'Office Manager', image: '../img/walter-gordon-office-manager.jpg' },
	{ name: 'Angela Lopez', role: 'Social Media Manager', image: '../img/angela-lopez-social-media-manager.jpg' },
	{ name: 'Scott Estrada', role: 'Developer', image: '../img/scott-estrada-developer.jpg' },
	{ name: 'Barbara Ramos', role: 'Graphic Designer', image: '../img/barbara-ramos-graphic-designer.jpg' },
];

const userTemplate = (name, role, image) => {
	return `
    <div class="team-card">
        <div class="card-image">
            <img src="${image}" />
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>
    `;
};

console.log('js');
