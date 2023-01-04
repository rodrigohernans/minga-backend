export const notFoundHandler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        method: req.method,
        path: req.url,
        response: 'not found'
    })
}