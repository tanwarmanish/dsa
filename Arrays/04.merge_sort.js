const dataList = [10,9,8,7,6,5,4,3,2,1];

console.log(mergeSort(dataList));

function mergeSort(data,l=0,r=data.length-1){
	if(l<r){
		let m = Math.ceil(l + (r-l)/2);
		mergeSort(data,l,m-1);
		mergeSort(data,m,r);
		return merge(data,l,m-1,r);
	}
}

function merge(data,l,m,r){
	const result = [];
	let i=l;
	let j=m+1;
	while(i<=m && j<=r){
		if(data[i]<=data[j]){
			result.push(data[i]);
			i++;
		}
		else{
			result.push(data[j])
			j++;
		}
	}

	while(i<=m){
		result.push(data[i]);
		i++;
	}

	while(j<=r){
		result.push(data[j]);
		j++;
	}
	for(let i=l;i<=r;i++){
		data[i] = result[i-l];
	}
	return data;
}