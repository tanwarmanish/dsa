import { swap, max } from '../utils.js';

const dataList = [10,9,8,7,5,4,3,2,1];

console.log(selectionSort(dataList));

function selectionSort(data){
	for(let i=0;i<data.length;i++){
		let min = i;
		for(let j=i;j<data.length;j++){
			max(data,min,j) && (min=j);
		}
		i!=min && swap(data,i,min);
	}
	return data;
}
