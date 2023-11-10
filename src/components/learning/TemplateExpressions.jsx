const TemplateExpressions = () => {

  const name = "Matheus"
  const data = {
    age: 31,
    job: "Programmer"
  }

  return (
    <div>
      <h1> Olá, {name} </h1>
      <h1> A profissão é {data.job} </h1>
    </div>
  )

}

export default TemplateExpressions