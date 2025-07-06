document.addEventListener('DOMContentLoaded', () =>{

    const coletivoPlacar = document.getElementById('placar-C')
    const individuoPlacar = document.getElementById('placar-I')
    const btnCI = document.getElementById("btn-c+")
    const btnCD = document.getElementById('btn-c-')
    const btnII = document.getElementById('btn-i+')
    const btnID = document.getElementById('btn-i-')
    const btnReiniciar = document.getElementById('reiniciar')

    let valorColetivo = 30
    let valorIndividuo = 15

 

  function updateContador(){
    coletivoPlacar.textContent = valorColetivo
    individuoPlacar.textContent = valorIndividuo
  }
  updateContador()

  btnCI.addEventListener('click', ()=>{
    valorColetivo++;
    updateContador()
  })
  btnCD.addEventListener('click', ()=>{
    valorColetivo--;
    updateContador()
  })
  btnII.addEventListener('click', ()=>{
    valorIndividuo++;
    updateContador()
  })
  btnID.addEventListener('click', ()=>{
    valorIndividuo--;
    updateContador()
  })
  btnReiniciar.addEventListener('click', ()=>{
    valorColetivo = 30
    valorIndividuo = 15
    updateContador()
  })
  
})






