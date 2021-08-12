// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    
    // const url = "https://6026780e186b4a0017780223.mockapi.io/api/v1/todo"
    const url = process.env.API_URL

    console.log("calling api todo...")

    return fetch(url)
        .then(r => r.json())
        .then(data => {
            // let result = JSON.stringify(data.result)
            console.log('api call data:', data)
            return res.status(200).json(data)
        })
}
