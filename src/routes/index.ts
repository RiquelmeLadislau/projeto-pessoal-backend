import express from "express"
import funcionarioRouter from "./funcionario"

const router = express.Router()

//prefixo de rota
router.use("./funcionario", funcionarioRouter)

router.get("/ping", (req,res)=>{
  res.json({ pong:true})
})
router.get("/", (req, res) => {
  let nome:string = "Everson"
  let idade: number = 34
  res.json({ nome, idade })
});

export default router