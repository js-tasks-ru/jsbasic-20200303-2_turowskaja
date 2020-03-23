/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let arr = friends.map(function(item){
        return item.firstName + " " + item.lastName;
      });
    
    let ul = document.createElement('ul');
    ul.innerHTML = `<li> ${arr[0]} </li> <li> ${arr[1]} </li> <li> ${arr[2]} </li>`;
    document.body.append(ul);
    
    return document.querySelector('ul');
}
