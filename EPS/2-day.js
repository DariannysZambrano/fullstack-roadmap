const usersDataBase = require("./user-database.json")

const medicalHistoryBD = require("./medical_history.json");

// Por orden del gobierno debemos informar cuales hospitales del pais estan
// atendiendo la mayor cantidad de pacientes, para esto crea una funcion llamada
// busiestHospitals que retorne una lista de los 3 hospitales mas usados,
// los objetos de la lista deben tener la siguiente
// { hospitalName: "Clínica Especialistas de Sincelejo" usersServed: 1200 }

function busiestHospitals(medicalHistoryBD) {
  const hospitales = {};
  const arr2 = [];

  for (let i = 0; i < medicalHistoryBD.length; i++) {
    if (hospitales[medicalHistoryBD[i].hospitalName]) {
      hospitales[medicalHistoryBD[i].hospitalName] += 1;
    } else {
      hospitales[medicalHistoryBD[i].hospitalName] = 1;
    }
  }

  for (const key in hospitales) {
    arr2.push({ nombre: key, usersServed: hospitales[key] });
  }

  arr2.sort((a, b) => {
    return b.usersServed - a.usersServed;
  });

  return arr2.slice(0, 3);
}
// console.log(busiestHospitals(medicalHistoryBD))

//  return [...books].sort((a, b) => a.publicationYear - b.publicationYear);

// Por control medico debemos informar sobre la ultima vez que un usuario se le
// administro cierto medicamento, para esto crea una funcion llamada medicationUsedTracker,
//  la funcion debe recibir 2 parametros, el primer parametro puede ser el id del usuario o su nombre completo
//  y el segundo parametro debe ser el nombre del medicamento, la respuesta de la funcion debe dar la siguiente
// { userId: "", fullName: "", date: "", hospitalName: "" doctor: "" }
// esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario.

function medicationUsedTracker(user, medication) {
  let fullName = "";
  let IdUser = "";

  for (let i = 0; i < usersDataBase.length; i++) {
    fullName = usersDataBase[i].firstName + " " + usersDataBase[i].lastName;
    if (user === fullName || user === usersDataBase[i].userId) {
      IdUser = usersDataBase[i].userId;
      break;
    }
  }

  if (!IdUser) return "Usuario no encontrado";

  let lastMedicationUsed = {};
  for (let j = 0; j < medicalHistoryBD.length; j++) {
    if (IdUser === medicalHistoryBD[j].userId) {
      for (let k = 0; k < medicalHistoryBD[j].medicationsUsed.length; k++) {
        if (medicalHistoryBD[j].medicationsUsed[k] === medication) {
          lastMedicationUsed = {
            userId: medicalHistoryBD[j].userId,
            fullName: fullName,
            date: medicalHistoryBD[j].date,
            hospitalName: medicalHistoryBD[j].hospitalName,
            doctor: medicalHistoryBD[j].doctor,
          };
        }
      }
    }
  }

  return lastMedicationUsed;
}


console.log(medicationUsedTracker("usr_060", "Ácido Acetilsalicílico"));

// El gobierno nacional nos acaba de informar sobre una irregularidad en nuestros centros de atencion,
// resulta que por ley ningun doctor puede atender mas de 4 especialidades diferentes entonces el gobierno
// nos esta pidiendo un informe sobre los doctores que han atendido mas de 4 especialidades,
// crea un script para encontrar una lista de esos doctores y las especialidades que han impartido.
// (nota: debes crear una lista con objetos donde cada objeto tenga el nombre del doctor
//  y una lista con las especialidades que ha dado).
// [
//   { doctor: "Dr. Nombre Uno", specialties: ["Esp 1", "Esp 2", "Esp 3", "Esp 4", "Esp 5"] },
//   { doctor: "Dra. Nombre Dos", specialties: ["Esp A", "Esp B", "Esp C", "Esp D", "Esp E"] }
// ]

function findOverworkedDoctors(medicalHistoryBD) {
  const doctorsMap = {}

  medicalHistoryBD.forEach(record => {
    const doctor = record.doctor
    if (!doctorsMap[doctor]) {
      doctorsMap[doctor] = new Set()
    }
    doctorsMap[doctor].add(record.speciality)
  });

  let result = []
  for (const key in doctorsMap) {
    if (doctorsMap[key].size > 4) {
       result.push({ doctor : key, especialidades : Array.from (doctorsMap[key])})
    }
   
  }
  return result
}

// console.log(findOverworkedDoctors(medicalHistoryBD));


