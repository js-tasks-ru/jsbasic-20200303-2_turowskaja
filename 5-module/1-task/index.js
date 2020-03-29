/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (const tr of table.rows){
        let row = tr.cells;
                 
        for (let i = 0; i < row.length; i++) {
            const cell = row[i];

            if (i === 3) {
                if (cell.dataset.available === 'true') {
                     tr.classList.toggle('available');
                } else if (cell.dataset.available === 'false') {
                     tr.classList.toggle('unavailable');
                } else if (!cell.hasAttribute('data-available')) {
                     tr.hidden = true;
                }
            }
            if (i === 2) {
                 if(cell.textContent === 'm'){
                     tr.classList.add('male');
                } else{
                     tr.classList.add('female');
                }
            }
            if (i === 1){
                 if(parseInt(cell.textContent) < 18 ){
                     tr.style.textDecoration = "line-through";
                }
            }
        }
    }
}