

function NotFoundHandler(req, res, next) {
    res.status(404).json({
        statusCode: res.statusCode,
        error: {
            type: "NotFound",
            message: `not found ${req.url} route`

        }
    })
}

module.exports = {NotFoundHandler}