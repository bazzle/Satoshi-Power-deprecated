function DataSort(importedData){
	importedData = Object.entries(importedData);
	importedData.sort((a, b) => a[1].smallestUnitPercentage - b[1].smallestUnitPercentage);
	importedData = Object.fromEntries(importedData);
	return importedData;
};

export default DataSort;