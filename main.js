document.addEventListener('DOMContentLoaded', () =>{

    const coletivoPlacar = document.getElementById('placar-C')
    const individuoPlacar = document.getElementById('placar-I')
    const btnCI = document.getElementById("btn-c+")
    const btnCD = document.getElementById('btn-c-')
    const btnII = document.getElementById('btn-i+')
    const btnID = document.getElementById('btn-i-')

    let valorColetivo = 30
    let valorIndividuo = 15


   function reiniciarPlacar(){
    coletivoPlacar.textContent = valorColetivo;
    individuoPlacar.textContent = valorIndividuo;
}
 
 reiniciarPlacar()

  function updateContador(){
    coletivoPlacar.textContent = valorColetivo
    individuoPlacar.textContent = valorIndividuo
  }

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
  
})






