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

window.addEventListener("mousemove", (e) => {
	gsap.to("#cursor", {
		ease: "easeInOut",
		duration: 0.5,
		x: e.clientX - 15,
		y: e.clientY - 15,
	});
});

const timeline = gsap.timeline({
	defaults: { width: 300, duration: 3, ease: "none" },
});

const box = document.getElementsByClassName("visual-mask-1");
let width = [];
for (let i = 0; i < box.length; i++) {
	width = [...width, box[i].getBoundingClientRect().width];
}

console.log(width);
timeline
	.to("#mask-3d", {
		scrollTrigger: {
			trigger: "#mask-3d",
			toggleActions: "restart pause reverse pause",
			scrub: true,
			end: "bottom center",
		},
		width: width[0],
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
		width: width[1],
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
		width: width[2],
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
		width: width[3],
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
		width: width[4],
		duration: 3,
		ease: "none",
	});
