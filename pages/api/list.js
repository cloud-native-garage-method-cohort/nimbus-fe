// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    
    var sortObjectsArray = require("sort-objects-array")

    const url = process.env.API_URL

    console.log("calling GET API: ", url)

    return fetch(url)
        .then(r => r.json())
        .then(data => {
            data = sortObjectsArray(data, "id", "desc")
            // let result = JSON.stringify(data)
            console.log("response...", data)
            return res.status(200).json(data)
        })
}
