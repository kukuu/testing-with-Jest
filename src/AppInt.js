
export const add = (x, y) => {
	return x +  y ;
}

//export const add = (x, y) => x + y;

//Integration test. total() relies on add, Any malfunctioning of add() will
//directly affect total()
export const total = (shipping, subTotal) => {
	return "£" + add(shipping, subTotal);
}
