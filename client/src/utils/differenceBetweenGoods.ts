export const findDifferentFields = (obj1: any, obj2: any): any => {
    let diffFields: any = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (obj1[key] !== obj2[key]) {
                diffFields[key] = {
                    oldValue: obj1[key],
                    newValue: obj2[key]
                };
            }
        }
    }

    return diffFields;
}