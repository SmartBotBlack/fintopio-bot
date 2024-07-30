// ==UserScript==
// @name         Fintopio Bot [SmartBot]
// @namespace    https://smartbot.black/
// @version      1.0.0
// @description  Bot for playing fintopio in telegram
// @author       Smartbot Team
// @match        https://fintopio-tg.fintopio.com/*
// @icon         https://fintopio-tg.fintopio.com/favicon.ico
// @grant        none
// ==/UserScript==

(async () => {
	while (true) {
		while (
			document.querySelector(
				'img[src="https://cdn.fintopio.com/icons/hold/step1.png"]',
			)?.offsetParent
		) {
			await new Promise((res) => setTimeout(res, Math.random() * 1000));
			document
				.querySelector(
					'img[src="https://cdn.fintopio.com/icons/hold/step1.png"]',
				)
				?.click();
		}

		while (
			[...document.querySelectorAll(".app-loader-el")].length > 2 &&
			[...document.querySelectorAll(".app-loader-el")]
				.slice(0, 4)
				.some((el) => el.offsetParent)
		) {
			for (const el of [...document.querySelectorAll(".app-loader-el")].slice(
				0,
				4,
			)) {
				if (el.offsetParent) {
					el.click();
				}
			}
			await new Promise((res) => setTimeout(res, Math.random() * 1000));
		}
		await new Promise((res) => setTimeout(res, Math.random() * 10 * 1000));
	}
})();
