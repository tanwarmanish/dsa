export function swap(data,i,j){
	const temp = data[i];
	data[i] = data[j];
	data[j] = temp;
}

export function min(data,i,j){
	return data[i]<data[j];
}

export function max(data,i,j){
	return data[i]>data[j];
}