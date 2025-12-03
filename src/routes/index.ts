import express from "express"
import funcionarioRouter from "./funcionario"

const router = express.Router()

//prefixo de rota
router.use("/funcionario", funcionarioRouter)

router.get("/ping", (req,res)=>{
  res.json({ pong:true})
})
router.get("/", (req, res) => {
  let projeto:string = "Projeto de organização de funcionários de uma empresa"

  res.json({ projeto })
});

export default router