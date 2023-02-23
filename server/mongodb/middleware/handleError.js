const handleError = (error, request, response, next) => {
    console.error(error)

    if(error.name === 'CastError') {
        response.status(400).send({ error: 'Id use is malformed' })
    } else {
        response.status(500).end()
    }
}

export default handleError;