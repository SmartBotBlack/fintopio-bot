// ==UserScript==
// @name         Fintopio Bot [SmartBot]
// @namespace    https://smartbot.black/
// @version      1.1.0
// @description  Bot for playing fintopio in telegram
// @author       Smartbot Team
// @match        https://fintopio-tg.fintopio.com/*
// @icon         https://fintopio-tg.fintopio.com/favicon.ico
// @grant        none
// ==/UserScript==

(async () => {
	let isStartFarming = false;

	while (true) {
		document.querySelector('a[href="/hold"]')?.click();

		await new Promise((res) =>
			setTimeout(res, Math.random() * 10 * 1e3 + 10 * 1e3),
		);

		while (
			document.querySelector(
				'img[src="https://cdn.fintopio.com/icons/hold/step1.png"]',
			)?.offsetParent
		) {
			await new Promise((res) => setTimeout(res, Math.random() * 1e3));
			document
				.querySelector(
					'img[src="https://cdn.fintopio.com/icons/hold/step1.png"]',
				)
				?.click();
		}

		const getElemets = () => [
			document.querySelector('img[alt="diamond"]'),
			...document.querySelectorAll(".app-loader-el"),
		];

		while (
			getElemets().length > 2 &&
			getElemets()
				.slice(0, 5)
				.some((el) => el?.offsetParent)
		) {
			isStartFarming = true;
			for (const el of getElemets().slice(0, 5)) {
				if (el?.offsetParent) {
					el.click();
				}
			}
			await new Promise((res) => setTimeout(res, Math.random() * 1e3));
		}

		await new Promise((res) =>
			setTimeout(res, Math.random() * 10 * 1e3 + 20 * 1e3),
		);

		if (isStartFarming) {
			isStartFarming = false;
			window.location.replace("/");
		}
	}
})();
