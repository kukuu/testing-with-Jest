import { add } from './App';

//console.log(add(1, 2));

//Unit Test
test('add', () => {
	const value = add(1,2);
	expect(value).toBe(3);
});
