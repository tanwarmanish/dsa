import { run } from './../index.js';

function toNumber(input){
	return +input.join('');
}


run(toNumber,import.meta.url);