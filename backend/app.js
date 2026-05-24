import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.use(app.json());
app.use(cors({ origin: "http://127.0.0.1:5500" }))


app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`)
})