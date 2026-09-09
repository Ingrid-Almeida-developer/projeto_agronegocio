import './style/global.css';
const pagina = document.body.dataset.page;

if(pagina == "index") {
	import("./pages/home/style.css");
} else if(pagina == "about") {
	import("./pages/about/about.css");
} else if(pagina == "contact") {
	import("./pages/contact/contact.css");
} else if(pagina == "consumer-register") {
	import("./pages/consumer-register/consumer-register.css");
} else if(pagina == "producer-register") {
	import("./pages/producer-register/producer-register.css");
} else if(pagina == "products") {
	import("./pages/products/products.css");
} else if(pagina == "register") {
	import("./pages/register/register.css");
} else if(pagina == "community") {
	import("./pages/community/community.css");
} else if(pagina == "delivery") {
	import("./pages/delivery/delivery.css");	
} else {
	alert("Erro!");
}
