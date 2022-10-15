const tabs = document.querySelectorAll('.tab-buttons > li');
tabs.forEach((tab) => {
	tab.addEventListener('click', (event) => {
		const tabID = event.target.dataset.tab;
		event.target.classList.add('active');
		// Toggle active between tabs
		const allTabs = [...event.target.parentElement.children];
		allTabs.forEach((tab) => {
			if (tab.dataset.tab != tabID) {
				tab.classList.remove('active');
			}
		});

		// Toggle tab panels
		const allPanels = [
			...document.getElementById(tabID).parentElement.children,
		];
		allPanels.forEach((child) => {
			if (child.id != tabID) {
				child.classList.add('hidden');
			}
		});

		document.getElementById(tabID).classList.remove('hidden');
		document.getElementById(tabID).classList.add('flex');
	});
});

// Accordian
const accordianTrigger = document.querySelectorAll('.accord h2');
const toggleAccordian = (event) => {
	event.stopPropagation();
	const accordID = event.target.parentElement.id;

	// Toggle accordian
	const allAccord = [...document.querySelectorAll('.accord')];
	allAccord.forEach((accord) => {
		if (accord.id === accordID) {
			accord.classList.toggle('open');
		} else {
			accord.classList.remove('open');
		}
	});
};

accordianTrigger.forEach((trigger) => {
	trigger.addEventListener('click', toggleAccordian);
});

// Mobile trigger
const mobileTrigger = document.getElementById('mobile-trigger');
mobileTrigger.addEventListener('click', (event) => {
	event.stopPropagation();
	document.body.classList.toggle('mobile-open');
	event.target.classList.toggle('open');
});
