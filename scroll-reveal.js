ScrollReveal({
	distance: "40px",
	duration: 2000,
});

ScrollReveal().reveal(".section-subtitle, .section-title",{
		delay: 100,
		origin: "top",
	}
);
ScrollReveal().reveal(".benefits-card, .chapter-card, .pricing-card, .footer",{
		delay: 200,
		origin: "bottom",
	}
);
ScrollReveal().reveal(".section-text", {
	delay: 400,
	origin: "left",
});
ScrollReveal().reveal(".header-anim", {
	delay: 300,
	origin: "top",
});
ScrollReveal().reveal(".hero-banner, .exchange-form, .contact-card", {
	delay: 300,
	origin: "right",
});
ScrollReveal().reveal(".hero-title, .contact-form, .readmore-anim", {
	delay: 300,
	origin: "left",
});