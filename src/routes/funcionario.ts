import  Express  from "express"

const router = Express.Router()

const funcionario = [
  { "id": 1, "nome": "Everson Sousa", "salario": 3500, "setor":"Front End"},
  { "id": 2, "nome": "Samuel", "salario": 5000, "setor": "Back End"},
  { "id": 3, "nome": "Riquelme", "salario": 7000, "setor":"Fullstack"}
]

router.get("/",(req,res)=>{
  res.json(funcionario)
})

router.get("/:id", (req,res)=>{
  const { id } = req.params
  const index = parseInt(id)
  res.json(funcionario[index -1])
})

router.post("/", (req,res)=>{
  res.json({"id": 99, "nome": "Lauriene", "salario": 100, "setor": "Auxiliar de Limpeza"})
})

export default router