const validator = (schema) => [
    (req, res, next)=>{
        const data = schema.validate(req.body, {abortEarly:false})
        //se valida/compara el schema con el body
        if(data.error){
            return res.status(400).json({
                success: false,
                method: req.method,
                path: req.url,
                response: data.error.details
            })
        }
        next()
    }
]
export default validator