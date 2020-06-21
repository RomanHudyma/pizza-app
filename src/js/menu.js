export const menu ={
	cap:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		sausage: 2,
		mashroom: 3,
		cheez: 1,
    },
	onions:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		meat: 1,
		cheez: 1,
    },
	king_one:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		mayo: 1,
		mashroom: 3,
		tomato: 2,
		cheeze: 3,
		dill: 2,
		parsley: 2
    },
	gavay:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		ananas: 1,
		cheez: 2,
    },
	tonno:{
		dough: 1,
		tomato_sauce: 1,
		tuna: 2,
		kappers: 1,
		cheez: 1,
	},
	vegeterian:{
		dough: 1,
		tomato_sauce: 1,
		tomato: 2,
		kappers: 1,
		cucumber: 2,
		onion: 2,
		cheez: 1,
	}
}

export const handleRefreshClick = e => {
	e.preventDefault();
	window.sessionStorage.removeItem('cookedPizza');
}