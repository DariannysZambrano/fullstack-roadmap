const usersDataBase = require("./user-database.json")

const medicalHistoryBD = require("./medical_history.json");

// necesitamos crear una funcion que nos de la informacion de un servicio dado,
// para esto crea una funcion llamada serviceData que reciba por parametro el id del servicio
// y retorne el objeto de ese servicio en nuestra base de datos.

function serviceData (userServiceId){
    for (let i = 0; i < medicalHistoryBD.length; i++) {
        if (userServiceId === medicalHistoryBD[i].serviceId) {
            return medicalHistoryBD[i]
        }
    }
}

console.log(serviceData ("srv_0009"))

// necesitamos un resumen sobre los servicios que a usado un paciente,
// para esto crea una funcion llamada userServicesResume, que reciba como parametro
// el nombre de un usuario de nuestra base de datos.
// la funcion debe retornar el siguiente informe:
// { userId: "", firstName: "", lastName: "", totalMedicalAppointments: 1302, }

function userServicesResume(userName){
    let report = {
        userId: "",
        firstName: "",
        lastName: "",
        totalMedicalAppointments: 0
    };

    let user = userName.toLowerCase().split(" ")
    let count = 0;
    let iD = null;

    for (let i = 0; i < usersDataBase.length; i++) {
        if (user[0] === usersDataBase[i].firstName.toLowerCase() && user[1] === usersDataBase[i].lastName.toLowerCase()) {
            iD = usersDataBase[i].userId
            report.userId = usersDataBase[i].userId
            report.firstName = usersDataBase[i].firstName
            report.lastName = usersDataBase[i].lastName
        }
    }
     for (let j = 0; j < medicalHistoryBD.length; j++) {
            if (iD === medicalHistoryBD[j].userId) {
                    count ++
                    report.totalMedicalAppointments = count
            }

        }
    return report
}
console.log(userServicesResume("Carolina Rueda"))

// necesitamos obtener una lista de usuarios que han visitado un hospital dado,
//  para esto crea una funcion llamada hospitalUsers que reciba como parametro el
//   nombre del hospital y que retorne un array con el nombre COMPLETO de los usuarios que han visitado ese hospital ej:
// ["Diego Sánchez", "Isabella Flores", "Fernando Sierra"]

function hospitalUsers(userHospitalName){
    let fullName = "";
    const userId = [];
    const usersNames = []

    for (let i = 0; i < medicalHistoryBD.length; i++) {
        if(medicalHistoryBD[i].hospitalName.toLowerCase() === userHospitalName.toLowerCase() ){
        userId.push(medicalHistoryBD[i].userId);
    }
}
 for (let j = 0; j < usersDataBase.length; j++) {
    if (userId.includes(usersDataBase[j].userId)) {
         fullName = usersDataBase[j].firstName + " " + usersDataBase[j].lastName;
         usersNames.push(fullName)
    }
    }
    return usersNames
}

console.log(hospitalUsers("Hospital Universitario San Jerónimo"))

// Necesitamos obtener cual es el hospital de preferencia (mas usado) de un usuario dado, para esto crea una funcion llamada
//  userPreferredHospital que reciba como parametro el nombre de un usuario y retorne el nombre del hospital de preferencia.

function userPreferredHospital(userName) {
  let idUser = "";
  let hospitales = {};
  let nameUser = userName.toLowerCase().split(" ");

  for (let i = 0; i < usersDataBase.length; i++) {
    if (nameUser[0] === usersDataBase[i].firstName.toLowerCase() && nameUser[1] === usersDataBase[i].lastName.toLowerCase()) {
      idUser = usersDataBase[i].userId;
    }
  }

  for (let j = 0; j < medicalHistoryBD.length; j++) {
    if (idUser === medicalHistoryBD[j].userId) {
      if (!hospitales[medicalHistoryBD[j].hospitalName]) {
        hospitales[medicalHistoryBD[j].hospitalName] = 1;
      } else {
        hospitales[medicalHistoryBD[j].hospitalName] += 1;
      }
    }
  }

  let hospitalmayor = ["", 0];

  console.log(Object.keys(hospitales).length)

  for (const key in hospitales) {

    console.log(key);

    if (hospitales[key] > hospitalmayor[1]) {
      hospitalmayor = [key, hospitales[key]];
    }
  }

  return hospitalmayor;
}

console.log(userPreferredHospital("Valentina Martínez"));

// Oh nooo! nos acaban de informar que el doctor Luis Burbano realizo un robo en uno de nuestros centros medicos, por favor crea un script
// que nos de una lista de los hospitales en los que ha trabajado el doctor burbano para poder informar a los respectivos centros medicos
// y que ellos puedan realizar una investigacion.

// Necesitamos obtener cual es el doctor preferido (mas visitado) de un usuario dado,
//  para esto crea una funcion llamada userPreferredDoctor que reciba como parametro
//   el nombre de un usuario y retorne el nombre del doctor de preferencia.

function userPreferredDoctor(userName) {
  let nameUser = userName.toLowerCase().split(" ");
  let idUsuario = "";
  let doctores = {};

  for (let i = 0; i < usersDataBase.length; i++) {
    if (nameUser[0] === usersDataBase[i].firstName.toLowerCase() && nameUser[1] === usersDataBase[i].lastName.toLowerCase()) {
      idUsuario = usersDataBase[i].userId;
    }
  }

  for (let j = 0; j < medicalHistoryBD.length; j++) {
    if (idUsuario === medicalHistoryBD[j].userId) {
      if (!doctores[medicalHistoryBD[j].doctor]) {
        doctores[medicalHistoryBD[j].doctor] = 1;
      } else {
        doctores[medicalHistoryBD[j].doctor] += 1;
      }
    }
  }

  let name = "";
  let count = 0;
  for (const key in doctores) {
    if (doctores[key] > count) 
    name = key;
    count = doctores[key];
  }
  return name;
}

console.log(userPreferredDoctor("Andrés Gómez"));


// Necesitamos obtener cual es el medicamento mas consumido de un usuario dado, 
// para esto crea una funcion llamada userMostConsumedMedication que reciba como parametro 
// el nombre del usuario y retorne el nombre del medicamento mas usado.

function userMostConsumedMedication(userName){
    let idUsuario = "";
    let medicamentosArr = [];
    
    for (let i = 0; i < usersDataBase.length; i++) {
        fullname = usersDataBase[i].firstname + "  " + usersDataBase[i].lastname;
        idUsuario = usersDataBase[i].userId
    }

    
    for (let j = 0; j < medicalHistoryBD .length; j++) {
        if (idUsuario === medicalHistoryBD[j].userId) {
            for (let k = 0; k < medicalHistoryBD[j].medicationsUsed.length; k++) {
                medicamentosArr.push(medicalHistoryBD[j].medicationsUsed[k])
            }
        }
    }

    return medicamentosArr
}

console.log(userMostConsumedMedication("Andrés Gómez"))
