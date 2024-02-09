import express, { Request, Response } from "express"
import cors from "cors"

const PORT = 8080

const app = express()
app.use(express.json())
app.use(cors())

app.post("/completions", async (req: Request, res: Response) => {
    const { creatorName, askSomething } = req.body

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Imagine you're sitting down for a one-on-one conversation with ${creatorName}.How would ${creatorName} answer the question ${askSomething}. Only include what ${creatorName} would say. Skip "${creatorName}:" as well.`,
                },
            ],
            max_tokens: 500,
        }),
    }
    try {
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            options
        )
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
