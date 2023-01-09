import { Comic } from "../models/Comic.models.js"

const controller = {
  create: async (req, res, next) => {
    try {
      await Comic.create(req.body)
      res.status(201).json({
        success: true,
        response: req.body,
      })
    } catch (error) {
      next(error)
    }
  },

  get_comic: async (req, res, next) => {

    try {
      const { id } = req.params
      let comic = await Comic.findById(id)  

      if (comic) {
        res.status(200).json({
          success: true,
          response: comic
        }) 
      } else {
        res.status(400).json({
          success: false,
          response: 'comic not found'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default controller



/* 


let consultasParaFiltrar = {} //se pasa adentro del metodo que busca
let ordenamiento = {} //se pasa adentro del metodo que ordena
let paginacion = {
  page: 1,
  limit: 4 //predefinimos que si el cliente NO ENVIA esta query, por defecto me pagine de a 4 documento
  //se utiliza en skip y limit para poder paginar
}
if (req.query.name) {
  //consultasParaFiltrar.name = req.query.name.split(',') //para "cortar" un array de datos
  consultasParaFiltrar.name = { "$regex": req.query.name, $options: 'i' } //expresion para incluir "palabras" a la busqueda
}
if (req.query.ranking) {
  consultasParaFiltrar.ranking = Number(req.query.ranking)
}
if (req.query.sort) {
  ordenamiento = { name: req.query.sort }
  //sort admite dos formas de order:
  //con 1 y -1
  //con asc y desc
}
if (req.query.page) {
  paginacion.page = req.query.page
}
if (req.query.limit) {
  paginacion.limit = req.query.limit
}
try {
  let all = await Category.find(consultasParaFiltrar)
    .sort(ordenamiento)
    .skip(paginacion.page > 0 ? ((paginacion.page - 1) * paginacion.limit) : 0)
    //skip es un método que corta los primeros datos (según el valor que le pase)
    .limit(paginacion.limit)
  //limit me recorta el array de documentos en partecitas iguales
  //(a través de req.quer.limit, el cliente me avisa de que longitud es cada una de esas partes) 
} */

