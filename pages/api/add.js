/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
    if (!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }

    console.log('req.query.todo:',req.query.todo)

    let todo = encodeURI(req.query.todo)

    // const url = "https://6026780e186b4a0017780223.mockapi.io/api/v1/todo";
    const url = process.env.API_URL

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({ todo }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            return res.status(200).json(data)
        })
}
