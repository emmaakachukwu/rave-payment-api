const axios = require('axios')

exports.postRave = async (req, res) => {
    const body = req.body
    const headers = req.headers
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'FLWSECK-48e4afbf3e4212654b75e3e92f2333ed-X'
    // }

    // let body = {
    //     "tx_ref": "9876567898",
    //     "amount": "50000",
    //     "currency": "NGN",
    //     "redirect_url": "127.0.0.1/focus",
    //     "payment_options": "card",
    //     "customer": {
    //         "email": "emmanuelakachukwu1@gmail.com",
    //         "phonenumber": "08038995822",
    //         "name": "Emmanuel Akachukwu"
    //     },
    //     "customizations": {
    //         "title": "100 percent fragrance",
    //         "description": "payment for fragrances",
    //         "logo": "https://assets.piedpiper.com/logo.png"
    //     }
    // }

    try {
        let response = await axios.post("https://api.flutterwave.com/v3/payments", body, {
            headers
        })
        console.log(response.data.message)
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