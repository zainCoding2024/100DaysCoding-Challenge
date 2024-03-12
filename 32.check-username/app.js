var current_users = ['Javed', 'Amir', 'Nooman', 'Zafar', 'Iqbal'];
var new_users = ['javed', 'Danish', 'Anwar', 'Zafar', 'Liaqat'];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("The Name ".concat(new_users[i], ", is already taken."));
    }
    else {
        console.log("The Name ".concat(new_users[i], ", is avaliable."));
    }
}
