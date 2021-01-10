const axios = require('axios')

exports.postRave = async (req, res) => {
    const body = req.body
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": body.authKey,
        "host": "api.flutterwave.com"
    }

    try {
        let response = await axios.post("https://api.flutterwave.com/v3/payments", body, {
            headers
        })
        console.log(response.data)
        res.status(200).send({
            status: true,
            data: response.data
        })
    } catch (err) {
        console.log(err)

        res.status(401).send({
            status: false,
            data: err.data.message
        })
    }
}