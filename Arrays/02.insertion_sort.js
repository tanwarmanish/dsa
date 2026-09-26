import { swap, max } from '../utils.js';

const dataList = [10,9,8,7,5,4,3,2,1];

console.log(insertionSort(dataList));

function insertionSort(data){
	for(let i=1;i<data.length;i++){
		for(let j=i;j>0;j--){
			max(data,j-1,j) && swap(data,j,j-1);
		}
	}
	return data;
}
