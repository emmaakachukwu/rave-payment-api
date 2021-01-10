const axios = require('axios')

exports.postRave = async (req, res) => {
    const body = req.body
    const headers = req.headers
    headers.host = "api.flutterwave.com"

    try {
        let response = await axios.post("https://api.flutterwave.com/v3/payments", body, {
            headers
        })

        const statusCode = response.status
        const raveStatus = response.data.status
        res.status(statusCode).send({
            status: statusCode == 200 && raveStatus == 'success' ? true : false,
            data: response.data
        })
    } catch (err) {
        res.status(401).send({
            status: false,
            error: err.message
        })
    }
}