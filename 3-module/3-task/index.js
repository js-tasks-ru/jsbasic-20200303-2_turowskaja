/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
	let arr = str.split('-').map(function (item){
    return item[0].toUpperCase() + item.slice(1);
	}).join('')
  console.log(arr);
}
