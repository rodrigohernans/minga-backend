import "dotenv/config.js"
import "../../config/database.js"

import { User } from "../User.model.js"

let users = [
  {
    mail: "ijb@gmail.com", //usuario comun
    password: "hola1234",
    is_author: false,
    is_company: false,
    is_admin: false,
    is_verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    is_online: false,
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
  },
  {
    mail: "efr@gmail.com", //usuario autor
    password: "chau1234",
    is_author: true,
    is_company: false,
    is_admin: false,
    is_verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    is_online: false,
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
  },
  {
    mail: "les@gmail.com", //usuario editorial
    password: "adios0123",
    is_author: false,
    is_company: true,
    is_admin: false,
    is_verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    is_online: false,
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
  },
  {
    mail: "azv@gmail.com", //usuario admin
    password: "0123adios",
    is_author: false,
    is_company: false,
    is_admin: true,
    is_verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    is_online: false,
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
  },
]

User.insertMany(users)
  .then((categories) => {
    console.log("categories created", categories)
  })
  .catch((error) => {
    console.log(error)
  })
