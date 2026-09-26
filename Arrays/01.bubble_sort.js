import { swap, max } from '../utils.js';

const dataList = [10,9,8,7,5,4,3,2,1];

console.log(bubbleSort(dataList));

function bubbleSort(data){
	for(let i=0;i<data.length;i++){
		for(let j=i+1;j<data.length;j++){
			max(data,i,j) && swap(data,i,j);
		}
	}
	return data;
}
