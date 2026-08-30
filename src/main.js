import './style/global.css';
const caminho = window.location.pathname;

if(caminho.includes("index")) {
	import("/src/pages/home/style.css");
} else if(caminho.includes("about")) {
	import("/src/pages/about/about.css");
} else if(caminho.includes("contact")) {
	import("/src/pages/contact/contact.css");
} else if(caminho.includes("consumer-register")) {
	import("/src/pages/consumer-register/consumer-register.css");
} else if(caminho.includes("producer-register")) {
	import("/src/pages/producer-register/producer-register.css");
} else if(caminho.includes("products")) {
	import("/src/pages/products/products.css");
} else if(caminho.includes("register.html")) {
	import("/src/pages/register/register.css");
} else if(caminho.includes("community")) {
	import("/src/pages/community/community.css");
} else if(caminho.includes("delivery")) {
	import("/src/pages/delivery/delivery.css");	
} else {
	alert("Erro!");
}
