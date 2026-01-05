const usersDataBase = require("./user-database.json")

const medicalHistoryBD = require("./medical_history.json");

// Un proveedor internacional de medicamentos nos acaba de informar que hubo un error con un lote
// de pregabalina que suministramos en nuestros centros medicos, de nuestro sistema de informacion
// de inventario nos informan que ese lote fue consumido en su totalidad durante el 2024, teniendo


// esta informacion crea un script que permita identificar que pacientes fueron medicados con
// pregabalina durante el 2024, rapidooo necesitamos contactar a estos usuarios
// (en el resultado debe estar el correo de los usuarios para poder contactarlos)

function findUserMedication(){

  const IdUsers = new Set()
  const usersEmails = []
 
  medicalHistoryBD.forEach(record => {
    record.medicationsUsed.forEach(medication => {
      if (medication === "Pregabalina" && record.date.slice(0,4) === "2024" ) {
        IdUsers.add(record.userId)
      }
    });
  });

  usersDataBase.forEach(user => {
    IdUsers.forEach(idUser=> {
      if (idUser === user.userId) {
        usersEmails.push(user.email)
      }
    });
  });

  return usersEmails
}

// console.log( findUserMedication())


// resulta que en medio de una reunion con nuestros medicos el doctor Alberto Martínez nos informo que un paciente
// se comunico con el para preguntarle acerca de unas indicaciones que el doctor le habia dado en su cita
// de Alergología pero el doctor Alberto no da esa especialidad, eso solo quiere decir que tenemos un impostor!

// realiza un script que nos permita identificar tanto a los pacientes que este impostor halla atendido como a los
//  hospitales en los que estuvo para poder realizar nuestro respectivo informe.

function findUsersAndHospitals() {
  const hospitals = new Set()
  const idUsers = new Set()
  const usersNames = new Set()
  let list = {}

  medicalHistoryBD.forEach(user => {
    if (user.doctor === "Dr. Alberto Martínez") {
      idUsers.add(user.userId)
      hospitals.add(user.hospitalName)
    }
  });

  usersDataBase.forEach(usuario => {
    if (idUsers.has(usuario.userId)) {
      usersNames.add(usuario.firstName + " " + usuario.lastName)
    }
    
  });

  list = {
    hospitalsList: Array.from(hospitals),
    userNmaesList: Array.from(usersNames)
  }

  return list 
}

// console.log(findUsersAndHospitals())

// acabamos de ser demandados por la familia de un paciente que murio luego de una visita a uno de nuestros
//  centros medicos, resulta que en la investigacion sobre su muerte encontraron que en uno de nuestros
//  centros medicos le suministraron Warfarina y Meloxicam en una misma visita, esta combinacion puede ser
//  mortal porque no se debe combinar anticoagulantes con antiinflamatorios no esteroides, no tenemos una
//  lista de los medicamentos que usamos pero con la base de datos que tenemos podemos determinar cuales
//   son los medicamentos que utilizamos luego de que tengas esa lista de medicamentos 
//  investiga cuales
//   de ahi son antiinflamatorios no esteroides y luego de eso realiza un script que permita identificar
//   a los doctores que suministraron Warfarina con alguno de esos antiinflamatorios no esteroides,
//   los hospitales que permitieron esto tambien tienen responsabilidad por lo tanto tambien debemos
//    obtener el nombre los hospitales donde sucedio esto y ademas el nombre de los usuarios para
//    poder contactarlos y llegar a una conciliacion con ellos antes de que se sumen a esta demanda.




// la Warfarina es un anticoagulante muy potente y su dosis debe ser controlada con una exactitud muy alta,
// nos informaron que existen doctores en nuestra red que han suministrado este medicamente mas de 1 vez en una
// misma visita medica, encuentra esos doctores y da un informe detallado sobre que dia hicieron esa
// mala practica y en que pacientes lo utilizaron. el informe debe tener la siguiente estructura:
// [
//   {
//     doctor: "Dr. Mario Vargas",
//     fechas: ["2023-07-13T17:36:17.616Z","2024-08-14T21:17:05.780Z","2023-10-18T10:38:20.499Z",],
//     pacientes: ["Andrés Gomez", "Nicolás Torres", "Alejandro Moreno"],
//   },
//   {
//     doctor: "Dra. Isabela Rosales",
//     fechas: ["2023-06-11T17:36:17.616Z","2024-04-18T21:17:05.780Z","2023-12-04T10:38:20.499Z",],
//     pacientes: ["Lorena Bermúdez", "Cristian Toro"],
//   },
// ]

function findDoctors() {
  let idUsers = new Set()
  let doctors = new Set()
  let dates = []
  const usersNames = new Set()
 
  medicalHistoryBD.forEach(record => {
     let count = 0;
    record.medicationsUsed.forEach(medication => {
      if (medication === "Warfarina") {
        count ++
      } 
      
    });
    if (count > 1) {
        idUsers.add(record.userId)
        doctors.add(record.doctor)
        dates.push(record.date)
      }
  });

  usersDataBase.forEach(user => {
    if(idUsers.has(user.userId)){
      usersNames.add(user.firstName + " " + user.lastName)
    }
  });

  

  return usersNames
  
}

console.log(findDoctors())