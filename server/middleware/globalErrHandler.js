const globalErrHandler = (err, req, res, next)=>{
    //error message
    //status
    //status code
    //stack

    const statusCode = err.statusCode = err.statusCode || 500;
    const status = err.status = err.status || 'error'
    const message = err.message
    const stack = err.stack
    res. status(err.statusCode).json({
        status,
        message,
        stack
    })
}

module.exports = globalErrHandler