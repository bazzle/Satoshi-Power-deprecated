function DataSort(importedData){
	importedData = Object.entries(importedData);
	importedData.sort((a, b) => a[1].smallUnitPercentage - b[1].smallUnitPercentage);
	importedData = Object.fromEntries(importedData);
	// console.log(Object.fromEntries(importedData));
	return importedData;
};

export default DataSort;