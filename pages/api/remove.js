// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    if (!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }
    let todoId = encodeURI(req.query.todo)

    console.log("Removing todo.id:", todoId)

    // const url = "https://6026780e186b4a0017780223.mockapi.io/api/v1/todo" + "/" + todoId;
    const url = process.env.API_URL + "/" + todoId;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            return res.status(200).json(data)
        })

}
