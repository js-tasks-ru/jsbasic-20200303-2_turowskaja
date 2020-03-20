/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let arr = users.filter(function(user){
        return user.name;
      }).map(function(user){
        return user.name;
      });
      console.log(arr);
      return arr;
}
