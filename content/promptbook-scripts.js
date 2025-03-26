function normalize(str) {
	return str.toLowerCase().trim();
}

function filterPromptbooks() {
	const selectedCategory = document.getElementById("categoryFilter").value;
	const searchQuery = normalize(document.getElementById("promptbookSearch").value);
	const cards = document.querySelectorAll(".promptbook-card");

	cards.forEach(card => {
		const category = card.getAttribute("data-category");
		const text = normalize(card.innerText) || normalize(card.textContent) || normalize(category)

		const matchesCategory = selectedCategory === "Filter" || category === selectedCategory;
		const matchesSearch = text.includes(searchQuery);

		if (matchesCategory && matchesSearch) {
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	});
}

setTimeout(() => {
	const categoryFilter = document.getElementById("categoryFilter");
	const searchInput = document.getElementById("promptbookSearch");

	if (!categoryFilter || !searchInput) return;

	categoryFilter.addEventListener("change", filterPromptbooks);
	searchInput.addEventListener("input", filterPromptbooks);
}, 100);
