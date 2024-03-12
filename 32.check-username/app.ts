const current_users:any =['Javed','Amir','Nooman','Zafar','Iqbal'];

const new_users:any =['javed','Danish','Anwar','Zafar','Liaqat'];

for(let i=0; i<new_users.length; i++){
 const newUsers = new_users[i].toLowerCase().
if(current_users.includes(new_users[i])){

    console.log(`The Name ${new_users[i]}, is already taken.`)
}else{
    console.log(`The Name ${new_users[i]}, is avaliable.`)
 }
}


