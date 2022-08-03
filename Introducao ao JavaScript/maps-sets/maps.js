function getAdmin(map) {
    let adm = [];
    
    for([key, value] of map){
        if(value === "Admin"){
            adm.push(key);
        }
    }

    return adm;
}

const  usuarios = new Map();

usuarios.set("Jorge", "Admin");
usuarios.set("Maria", "Admin");
usuarios.set("Lucas", "User");
usuarios.set("Abelardo", "Admin");
usuarios.set("Godofredo", "User");

console.log(getAdmin(usuarios));