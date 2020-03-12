/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sumSalariesCompany = 0;

  for (let key in salaries) {
    if (typeof salaries[key] === "number") {
      sumSalariesCompany += salaries[key];
    }
  }
  return sumSalariesCompany;
}

