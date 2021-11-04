const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const imageField = document.getElementById('image');
const addButton = document.getElementById('addMemberButton');
const teamContainer = document.querySelector('.team-container');

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

function showUser(teamData) {
	for (const userObject in teamData) {
		const user = teamData[userObject];
		teamContainer.insertAdjacentHTML('beforeend', userTemplate(user.name, user.role, user.image));
	}
}

function clearField(...fields) {
	fields.forEach((field) => (field.value = ''));
}

// small-function to add user quick (Prego Alfredo o Fabio 🤣😘😎😜)
function autoFillPath(input) {
	const paths = ['../img/new-team-member-01.jpg', '../img/new-team-member-02.jpg', '../img/new-team-member-03.jpg', '../img/new-team-member-04.jpg'];
	const p = paths[Math.floor(Math.random() * 3)];
	input.value = p;
}

function addUser() {
	const name = nameField.value;
	const role = roleField.value;
	const image = imageField.value;
	if (name !== '' && role !== '' && image !== '') {
		teamContainer.innerHTML = '';
		data.push({ name: name, role: role, image: image });
		showUser(data);
		clearField(nameField, roleField, imageField);
	} else clearField(nameField, roleField, imageField);
}

showUser(data);
clearField(nameField, roleField, imageField);
imageField.addEventListener('click', () => autoFillPath(imageField));
addButton.addEventListener('click', () => addUser());
