/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let arr = data.filter(function (item){
        return item.age <= age;
    }).map(function (item){
        return item.name + ', ' + item.balance;
    }).join('\n')
    return arr;
}
