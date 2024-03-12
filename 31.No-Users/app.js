var users = ['Usman', 'Naveed', 'Jawad'];
if (users !== null) {
    for (var i = users.length - 1; i >= 0; i--) {
        users.pop();
    }
}
console.log("".concat(users, " We need to find some users!"));
