const shopDropdown = document.getElementById("shopDropdown");

magasin.forEach(selection => {
    const selectionElements = document.createElement('option');
    selectionElements.value = selection.value;
    selectionElements.textContent = selection.label;
    shopDropdown.appendChild(selectionElements);
});