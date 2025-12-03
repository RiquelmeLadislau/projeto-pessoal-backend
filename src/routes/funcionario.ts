import  Express  from "express"

const router = Express.Router()

const funcionario = [
  { id: 1, nome: "Everson Sousa", salario: 3500, setor: "Front End", idade: 27, tempoDeEmpresa: 2, ativo: true },
  { id: 2, nome: "Samuel", salario: 5000, setor: "Back End", idade: 30, tempoDeEmpresa: 4, ativo: true },
  { id: 3, nome: "Riquelme", salario: 7000, setor: "Fullstack", idade: 26, tempoDeEmpresa: 3, ativo: true },

  { id: 4, nome: "Mariana Alves", salario: 4200, setor: "UX/UI", idade: 29, tempoDeEmpresa: 1, ativo: true },
  { id: 5, nome: "João Pedro", salario: 6500, setor: "DevOps", idade: 32, tempoDeEmpresa: 5, ativo: true },
  { id: 6, nome: "Carla Menezes", salario: 4800, setor: "Front End", idade: 24, tempoDeEmpresa: 1, ativo: true },
  { id: 7, nome: "Lucas Rocha", salario: 8200, setor: "Back End", idade: 34, tempoDeEmpresa: 6, ativo: true },
  { id: 8, nome: "Ana Clara", salario: 9000, setor: "Data Science", idade: 28, tempoDeEmpresa: 4, ativo: true },
  { id: 9, nome: "Fábio Santos", salario: 7500, setor: "Fullstack", idade: 31, tempoDeEmpresa: 3, ativo: true },
  { id: 10, nome: "Beatriz Lima", salario: 3800, setor: "QA", idade: 25, tempoDeEmpresa: 2, ativo: true }
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