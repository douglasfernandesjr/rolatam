function filterByText(event) {

    const items = document.querySelectorAll("#items li");

    const search = event.target.value.trim().toLowerCase();


    items.forEach(item => {

        const itemName = item.textContent.toLowerCase();

        item.style.display = itemName.includes(search) ? "block" : "none";

    });
}