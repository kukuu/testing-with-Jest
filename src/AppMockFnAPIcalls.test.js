
import { total } from './AppInt';


//Working with mock functions
//Used in mitigating call backs
//Example managing asynchronous or say database calls that needs managing
const add = jest.fn(()=> 3)


test('add', () => {
	expect(add(1, 2)).toBe(3);
	expect(add).toHaveBeenCalledTimes(1);
	//expect(add).toHaveBeenCalledWith(1, 3);//WILL FAIL - Managing API calls
	expect(add).toHaveBeenCalledWith(1, 2);//Managing API calls
});


