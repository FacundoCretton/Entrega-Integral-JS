 const productsData = [
	{
		id: 1,
		nombre: 'Descubriendo el Sur',
		precio: 450,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Montevideo, Uruguay', 'Día 4: Puerto Madryn, Argentina', 'Día 5: Ushuaia, Argentina', 'Día 6: Punta Arenas, Chile', 'Día 7: Puerto Montt, Chile', 'Día 8: Valparaíso, Chile'],
		backgroundImg: '/Assets/Img/id1.webp',
		categoria: 'Sudamerica'
	},
	{
		id: 2,
		nombre: 'Aventura en la Patagonia',
		precio: 370,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Puerto Madryn, Argentina', 'Día 4: Ushuaia, Argentina', 'Día 5: Torres del Paine, Chile', 'Día 6: El Calafate, Argentina', 'Día 7: El Chaltén, Argentina', 'Día 8: Puerto Natales, Chile',]
		,backgroundImg: '/Assets/Img/id2.webp',
		categoria: 'Sudamerica'
	},
	{
		id: 3,
		nombre: 'La Costa del Atlantico',
		precio: 560,
		duracion:8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Punta del Este, Uruguay', 'Día 4: Isla de Lobos, Uruguay', 'Día 5: Porto Belo, Brasil', 'Día 6: Ilhabela, Brasil', 'Día 7: Búzios, Brasil', 'Día 8: Río de Janeiro, Brasil'],
		backgroundImg: '/Assets/Img/id3.webp',
		categoria: 'Sudamerica'
	},
	{
		id: 4,
		nombre: 'Aventura en Brasil',
		precio: 430,
		duracion: 8,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación', 'Día 3: Santos, Brasil', 'Día 4: Ilhéus, Brasil', 'Día 5: Salvador de Bahía, Brasil', 'Día 6: Recife, Brasil', 'Día 7: Natal, Brasil', 'Día 8: Fortaleza, Brasil'],
		backgroundImg: '/Assets/Img/id4.webp',
		categoria: 'Sudamerica'
	},
	{
		id: 5,
		nombre: 'Colombia y Perú',
		precio: 620,
		duracion: 9,
		itinerario: ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación', 'Día 3: Cartagena de Indias, Colombia', 'Día 4: Santa Marta, Colombia', 'Día 5: Trujillo, Perú', 'Día 6: Lima, Perú', 'Día 7: Pisco, Perú', 'Día 8: Navegación', 'Día 9: Montevideo, Uruguay'],
		backgroundImg: '/Assets/Img/id5.webp',
		categoria: 'Sudamerica'
	},
	{
		id: 6,
		nombre: 'Islas del Sur',
		precio: 615,
		duracion: 10,
		itinerario: ['Día 1: Buenos Aires, Argentina',  'Día 2: Navegación',  'Día 3: Puerto Madryn, Argentina',  'Día 4: Ushuaia, Argentina',  'Día 5: Cabo de Hornos, Chile',  'Día 6: Puerto Williams, Chile',  'Día 7: Punta Arenas, Chile',  'Día 8: Navegación',  'Día 9: Islas Malvinas',  'Día 10: Navegación'],
		backgroundImg: '/Assets/Img/id6.webp',
		categoria: 'Sudamerica'
	},
	
	{
		id: 7,
		nombre: 'Tesoro del Caribe',
		precio: 1100,
		duracion: 10,
		itinerario: itinerario = ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: San Juan, Puerto Rico',  'Día 5: Charlotte Amalie, Islas Vírgenes de EE. UU.', 'Día 6: Philipsburg, St. Maarten', 'Día 7: George Town, Gran Caimán', 'Día 8: Ocho Ríos, Jamaica', 'Día 9: Cozumel, México', 'Día 10: Nassau, Bahamas'],
		backgroundImg: '/Assets/Img/id11.jpg',
		categoria: 'Caribe'
	},
	{
		id: 8,
		nombre: 'Travesía Tropical',
		precio: 1100,
		duracion: 10,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Bridgetown, Barbados', 'Día 5: Castries, Santa Lucía', 'Día 6: St. Johns, Antigua y Barbuda', 'Día 7: Road Town, Islas Vírgenes Británicas', 'Día 8: Willemstad, Curazao', 'Día 9: Oranjestad, Aruba', 'Día 10: Cozumel, México'],
		backgroundImg: '/Assets/Img/id12.jpg',
		categoria: 'Caribe'
	},
	{
		id: 9,
		nombre: 'Aventuras Caribeñas',
		precio: 950,
		duracion: 8,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Kralendijk, Bonaire', 'Día 5: Santo Domingo, República Dominicana', 'Día 6: Grand Turk, Islas Turcas y Caicos', 'Día 7: Half Moon Cay, Bahamas', 'Día 8: Nassau, Bahamas']
		,backgroundImg: '/Assets/Img/id13.jpg',
		categoria: 'Caribe'
	},
	{
		id: 10,
		nombre: 'Crucero del Sol',
		precio: 825,
		duracion: 7,
		itinerario: ['Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Mar Caribe', 'Día 4: Montego Bay, Jamaica', 'Día 5: Roatán, Honduras', 'Día 6: Ciudad de Belice, Belice', 'Día 7: George Town, Gran Caimán'], backgroundImg: '/Assets/Img/id14.jpg',
		categoria: 'Caribe'
	},
	{
		id: 11,
		nombre: 'Descubriendo el Caribe',
		precio: 890,
		duracion: 8,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Océano Atlántico', 'Día 4: Cozumel, México', 'Día 5: Playa del Carmen, México', 'Día 6: Montego Bay, Jamaica', 'Día 7: Castries, Santa Lucía',  'Día 8: Bridgetown, Barbados']
		,backgroundImg: '/Assets/Img/id15.webp',
		categoria: 'Caribe'
	},
	{
		id: 12,
		nombre: 'Caribe Tropical',
		precio: 1000,
		duracion: 10,
		itinerario: [ 'Día 1: Buenos Aires, Argentina', 'Día 2: Navegación por el Océano Atlántico', 'Día 3: Navegación por el Océano Atlántico', 'Día 4: George Town, Islas Caimán', 'Día 5: Roatán, Honduras', 'Día 6: Costa Maya, México', 'Día 7: Belice, Belice', 'Día 8: Cozumel, México', 'Día 9: Freeport, Bahamas', 'Día 10: Nassau, Bahamas'],backgroundImg: '/Assets/Img/id16.jpg',
		categoria: 'Caribe'
	},

	{
		id: 13,
		nombre: 'Costas del Sol',
		precio: 2200,
		duracion: 10,
		itinerario: itinerario = ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Málaga, España', 'Día 4: Cádiz, España', 'Día 5: Gibraltar', 'Día 6: Almería, España', 'Día 7: Cartagena, España', 'Día 8: Ibiza, España', 'Día 9: Valencia, España', 'Día 10: Barcelona, España'],
		backgroundImg: '/Assets/Img/Costa-Sol.jpeg',
		categoria: 'Europa'
	},
	{
		id: 14,
		nombre: 'Grecia',
		precio: 2400,
		duracion: 10,
		itinerario: itinerario = ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Nápoles, Italia', 'Día 4: Corfú, Grecia', 'Día 5: Atenas, Grecia', 'Día 6: Mykonos, Grecia', 'Día 7: Kusadasi, Turquía', 'Día 8: Rodas, Grecia', 'Día 9: Creta, Grecia', 'Día 10: Santorini, Grecia'],
		backgroundImg: '/Assets/Img/Grecia.webp',
		categoria: 'Europa'
	},
	{
		id: 15,
		nombre: 'Francia',
		precio: 1830,
		duracion: 6,
		itinerario: itinerario = ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Europa', 'Día 3: Marsella, Francia', 'Día 4: Niza, Francia', 'Día 5: Cannes, Francia', 'Día 6: Montecarlo, Mónaco'],
		backgroundImg: '/Assets/Img/Francia.jpg',
		categoria: 'Europa'
	},
	{
		id: 16,
		nombre: 'Croacia',
		precio: 1915,
		duracion: 7,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Croacia', 'Día 3: Dubrovnik', 'Día 4: Split', 'Día 5: Hvar', 'Día 6: Rovinj', 'Día 7: Zadar'],
		backgroundImg: '/Assets/Img/Croacia.jpg',
		categoria: 'Europa'
	},
	{
		id: 17,
		nombre: 'Noruega',
		precio: 1890,
		duracion: 7,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Noruega', 'Día 3: Bergen', 'Día 4: Molde', 'Día 5: Geiranger', 'Día 6: Ålesund', 'Día 7: Stavanger'],
		backgroundImg: '/Assets/Img/Noruega.webp',
		categoria: 'Europa'
	},
	{
		id: 18,
		nombre: 'Portugal',
		precio: 1970,
		duracion: 9,
		itinerario: ['Día 1: Buenos Aires', 'Día 2: Navegación hacia Portugal' ,'Día 3: Lisboa', 'Día 4: Navegación', 'Día 5: Porto', 'Día 6: Albufeira', 'Día 7: Praia da Rocha', 'Día 8: Lagos', 'Día 9: Cascais'],
		backgroundImg: '/Assets/Img/Portugal.jpg',
		categoria: 'Europa'
	},


	
];

const splitProducts = (size) => {
	let dividedProducts = [];

	for (let i = 0; i < productsData.length; i += size) {
		dividedProducts.push(productsData.slice(i, i + size));
	}
	return dividedProducts;
};

const productsController = {
	dividedProducts: splitProducts(6),
	nextProductsIndex: 1,
	productsLimit: splitProducts(6).length,
};
