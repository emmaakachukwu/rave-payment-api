const axios = require('axios')

const rootUrl = "https://api.flutterwave.com/v3/"
const host = "api.flutterwave.com"

exports.postRave = async (req, res) => {
    const body = req.body
    const headers = req.headers
    headers.host = host

    const url = rootUrl + "payments"

    try {
        let response = await axios.post(url, body, {
            headers
        })

        const statusCode = response.status
        const raveStatus = response.data.status
        return res.status(statusCode).send({
            status: statusCode == 200 && raveStatus == 'success' ? true : false,
            data: response.data
        })
    } catch (err) {
        if (err.response != undefined) {
            return res.status(err.response.status).send({
                status: false,
                error: err.response.data
            })
        } else {
            return res.send({
                status: false,
                error: err.message
            })
        }
    }
}

exports.verify = async (req, res) => {
    const txnId = req.params.txnId
    const headers = {
        authorization: req.headers.authorization,
        'content-type': 'application/json',
        host
    }

    const url = rootUrl + "transactions/" + txnId + "/verify"

    try {
        let response = await axios.get(url, {
            headers
        })

        const statusCode = response.status
        const raveStatus = response.data.status
        return res.status(statusCode).send({
            status: statusCode == 200 && raveStatus == 'success' ? true : false,
            data: response.data
        })
    } catch (err) {
        if (err.response != undefined) {
            return res.status(err.response.status).send({
                status: false,
                error: err.response.data
            })
        } else {
            return res.send({
                status: false,
                error: err.message
            })
        }
    }
}