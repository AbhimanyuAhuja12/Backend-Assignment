const deepEquals = (obj1, obj2) => {
    if (Object.is(obj1, obj2)) return true;

    if (typeof obj1 !== 'object' || obj1 === null || 
        typeof obj2 !== 'object' || obj2 === null) return false;

    const keys1 = Reflect.ownKeys(obj1);
    const keys2 = Reflect.ownKeys(obj2);

    if (keys1.length !== keys2.length) return false;

    return keys1.every(key => {
        return deepEquals(obj1[key], obj2[key]);
    });
};

const union = (arr1 = [], arr2 = []) => {
    const result = [];

    const addToResult = item => {
        if (!result.some(existingItem => deepEquals(existingItem, item))) {
            result.push(item);
        }
    };

    [...arr1, ...arr2].forEach(addToResult);

    return result;
};

export default union;
