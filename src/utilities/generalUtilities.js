export function removeElementsFromArrayByProperty(array, nameOfProperty, valueOfPropertyToCompare){
    let arrayToReturn = [];
    for (let item of array){
        if (item[nameOfProperty] !== undefined && item[nameOfProperty] !== valueOfPropertyToCompare){
            arrayToReturn.push(item);
        }
    }
    return arrayToReturn;
}

export function getKeyFromValueInMap(map, searchValue){
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
        return key;
    }
}

export function removeLastChar(string){
    let stringToReturn = '';

    for (let i = 0; i < string.length - 1; i++){
        stringToReturn += string[i];
    }

    return stringToReturn;
}