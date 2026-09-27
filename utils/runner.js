import { loadTestcases, isEqual } from './index.js';

export async function run(callback,scriptRoot,showTestcases=false){
	const testcases = await loadTestcases(scriptRoot);
	const failedCases = [];
	let failed = 0;
	testcases.forEach(({input,output},index)=>{
		const result = callback(...input);
		const passed = isEqual(output,result);
		if(!passed){
			failed++;
			failedCases.push(`Testcase ${index+1}: [${input}]`);
		}
	});
	console.log(`Total Testcases: ${testcases.length}`);
	console.log(`Failed Testcases: ${failed}`);
	showTestcases && console.log(failedCases);
}