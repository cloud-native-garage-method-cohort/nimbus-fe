/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
    if (!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }

    console.log('adding todo...:',req.query.todo)

    let todo = encodeURI(req.query.todo)

    const url = process.env.API_URL

    console.log("calling POST API: ", url)

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({ todo }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            console.log("response...", data)
            return res.status(200).json(data)
        })
}
