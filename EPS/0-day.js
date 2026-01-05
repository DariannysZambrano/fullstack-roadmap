const dataBase = require("./user-database.json")
// necesitamos obtener la ciudad de un usuario dado, para esto
// crea una funcion llamada userCity
//  que retorne el nombre de la ciudad del usuario.
// la funcion puede recibir el id del usuario o el nombre completo del usuario, si el usuario no existe en nuestros
//  registros debe retornar "usuario no existe".

function userCity(findUser){
    let user = findUser.toLowerCase().split(" ");
    let userCity = null;
    
    for (let i = 0; i < dataBase.length; i++) {
        if(user[0] === dataBase[i].firstName.toLowerCase() && user[1] === dataBase[i].lastName.toLowerCase()){
            userCity = dataBase[i].city
        }else if(dataBase[i].userId === findUser){
            userCity = dataBase[i].city
        }
    }
    if(userCity === null){
     return "usuario no existe"
    }
    return userCity
}

console.log(userCity("claudia solarte"));

// necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la edad como un factor.
// Crea una funcion llamada userRiskByAge que reciba como parametro el nombre de un usuario
// y retorne "alto" si el usuario tiene mas de 60 años, "medio" si el usuario
// tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.

function userRiskByAge(userName){
    let user = userName.toLowerCase().split(" ");
    for (let i = 0; i < dataBase.length; i++) {
     if(user[0] === dataBase[i].firstName.toLowerCase() && user[1] === dataBase[i].lastName.toLowerCase()){
        if(dataBase[i].age > 60){
            return "alto"
        }else if(dataBase[i].age > 40 && dataBase[i].age < 60 ){
            return "medio"
        }else if(dataBase[i].age < 40){
            return "bajo"
        }else{
            return "usuario no existe"
        }
     }
}
}
console.log(userRiskByAge("Adrián Castro"));

// necesitamos obtener informacion de la ultima cita
// que el paciente tuvo con nosotros, para esto crea una funcion llamada
// userLastAppointment que reciba como parametro el nombre completo del usuario o su id,
//  la funcion debe retornar la siguiente informacion.

// { userId: "", fullName: "", serviceId: "" speciality: "", hospitalName: "", medicalNotes: "", medicationsUsed: "", date: "" }

let medicalHistoryBD = require("./medical_history.json");

function userLastAppointment(fullNameOrId) {
  let iD = null;

  let report = {
    userId: "",
    fullName: "",
    serviceId: "",
    speciality: "",
    hospitalName: "",
    medicalNotes: "",
    medicationsUsed: "",
    date: "",
  };

  let user = fullNameOrId.toLowerCase().split(" ");
  let fullName = "";

  for (let i = 0; i < dataBase.length; i++) {
    if (
      user[0] === dataBase[i].firstName.toLowerCase() &&
      user[1] === dataBase[i].lastName.toLowerCase()
    ) {
      
      iD = dataBase[i].userId;
      fullName = dataBase[i].firstName + " " + dataBase[i].lastName;
    } else if(dataBase[i].userId === fullNameOrId){
        iD = dataBase[i].userId
        fullName = dataBase[i].firstName + " " + dataBase[i].lastName;
    }
  }
  for (let j = 0; j < medicalHistoryBD.length; j++) {
    if (iD === medicalHistoryBD[j].userId) {
        report.userId = medicalHistoryBD[j].userId;
        report.fullName = fullName;
        report.serviceId = medicalHistoryBD[j].serviceId;
        report.speciality = medicalHistoryBD[j].speciality;
        report.hospitalName = medicalHistoryBD[j].hospitalName;
        report.medicalNotes = medicalHistoryBD[j].medicalNotes;
        report.medicationsUsed = medicalHistoryBD[j].medicationsUsed;
        report.date = medicalHistoryBD[j].date;
    }
  }
  return report;
}

console.log(userLastAppointment("usr_001"));

