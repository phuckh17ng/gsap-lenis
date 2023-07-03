// import Lenis from "@studio-freight/lenis";
// import { gsap } from "https://cdn.skypack.dev/gsap@3.12.1";
// import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
	smoothWheel: true,
	duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
	lenis.raf(time);
	ScrollTrigger.update();
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// const box = document.getElementsByClassName("visual-mask-1");
// console.log(box);

// for (let i = 0; i < box.length; i++) {
// 	console.log(box[i].getBoundingClientRect());
// }

const timeline = gsap.timeline({
	defaults: { width: 300, duration: 3, ease: "none" },
});

timeline
	.to("#mask-3d", {
		scrollTrigger: {
			trigger: "#mask-3d",
			toggleActions: "restart pause reverse pause",
			scrub: true,
			end: "bottom center",
		},
		width: 300,
		duration: 3,
		ease: "none",
	})
	.to("#visual", {
		scrollTrigger: {
			trigger: "#visual",
			toggleActions: "restart pause reverse pause",

			scrub: true,
			end: "bottom center",
		},
		width: 600,
		duration: 3,
		ease: "none",
	})
	.to("#motion", {
		scrollTrigger: {
			trigger: "#motion",
			toggleActions: "restart pause reverse pause",
			scrub: true,
			end: "bottom center",
		},
		width: 600,
		duration: 3,
		ease: "none",
	})
	.to("#feature", {
		scrollTrigger: {
			trigger: "#feature",
			toggleActions: "restart pause reverse pause",
			scrub: true,
			end: "bottom center",
		},
		width: 600,
		duration: 3,
		ease: "none",
	})
	.to("#product", {
		scrollTrigger: {
			trigger: "#product",
			toggleActions: "restart pause reverse pause",
			scrub: true,
			end: "bottom center",
		},
		width: 600,
		duration: 3,
		ease: "none",
	});
