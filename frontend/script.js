
const basse =  [
    {value: '1', label: 'Choix fender gris'},
    {value: '2', label: 'Choix ibanez rouge'},
    {value: '3', label: 'Choix thomann vert'}
];

const dropdown = document.getElementById('dynamicDropdown');

basse.forEach(choix => {
    const choixElement = document.createElement('option');
    choixElement.value = choix.value;
    choixElement.textContent = choix.label;
    dropdown.appendChild(choixElement);
});


const basseCinqCordes = [
    {value: '1', label: 'Choix spector jade'},
    {value: '2', label: 'Choix fishman bois'},
    {value: '3', label: 'Choix ibanez azur'}
];

const dropdown2 = document.getElementById('dynamicDropdown2');


basseCinqCordes.forEach(choixTwo => {
    const choixTwoElements = document.createElement('option');
    choixTwoElements.value = choixTwo.value;
    choixTwoElements.textContent = choixTwo.label;
    dropdown2.appendChild(choixTwoElements);
});








