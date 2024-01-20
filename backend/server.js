import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A first joke",
            content: "This is first joke"
        },
        {
            id: 2,
            title: "A second joke",
            content: "This is second joke"
        },
        {
            id: 3,
            title: "A third joke",
            content: "This is third joke"
        },
        {
            id: 4,
            title: "A fourth joke",
            content: "This is fourth joke"
        },
        {
            id: 5,
            title: "A fifth joke",
            content: "This is fifth joke"
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})  