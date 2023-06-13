const usuarios = [
    {
      nombre: "fede",
      email: "fbidarra@hotmail.com",
      password: "12345",
      es_staff: true
    },
    {
      nombre: "Juan",
      email: "juan@gmail.com",
      password: "123",
      es_staff: false
    }
];

let login = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let staff = document.getElementById("staff").checked;
    let es_staff2 = false; //el usuario por defecto no es staff, por lo tanto revisa en la lista de objetos si es staff o no para cambiar su valor
    let usuarioEncontrado = false;

    
  
    let i; //declaro la variable i fuera para poder llamarla 

    for (i = 0; i < usuarios.length; i++) {
      if (email === usuarios[i].email && password === usuarios[i].password) {
        usuarioEncontrado = true;
        if (usuarios[i].es_staff == true) {
          es_staff2 = true; //si el usuario es staff en la lista de objetos, cambia su valor a true
        }
        break;
      }
    }

    if (usuarioEncontrado == true) {
        localStorage.setItem("nombreUsuario", usuarios[i].nombre); //si el usuario existe, guarda su nombre en el local storage para mostrarlo después
      if (es_staff2 == true) {
        if (staff == true) {
          window.location = "ingreso.html"
        } else {
            Toastify({
              text: "Eres staff, pero debes hacer click en la checkbox",
              duration: 1500,
              close: true,
              gravity: "top", 
              position: "left", 
              stopOnFocus: true, 
              style: {
                  background: "#302b63",
              },      
          }).showToast();
          return false
        }
      } else if( es_staff2 == false && staff == true ){
          Toastify({
            text: "No eres staff",
            duration: 1500,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
                background: "#302b63",
            },      
        }).showToast();
        return false
      } else {
        window.location = "ingreso2.html"
      }
    } else {
        Toastify({
          text: "El usuario no existe",
          duration: 1500,
          close: true,
          gravity: "top", 
          position: "left", 
          stopOnFocus: true, 
          style: {
              background: "#302b63",
          },      
      }).showToast();
      return false
    }

};

let nombreUsuario = localStorage.getItem("nombreUsuario");
let saludo = document.getElementById("saludo");
saludo.textContent = "¡Hola, " + nombreUsuario + "!"; //cambiar a backticks