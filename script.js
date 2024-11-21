const lampadinaspenta = document.querySelector('.spenta');
const lampadinaaccesa = document.querySelector('.accesa');
const interruttore = document.getElementById('on-off');
const spento = 'Accendi la luce'
const acceso = 'Spegni la luce'

interruttore.innerHTML = spento;

interruttore.addEventListener('click', () =>{
  lampadinaspenta.classList.toggle('hide')
  lampadinaaccesa.classList.toggle('show')
  if (lampadinaaccesa.classList.contains('show')){
    interruttore.innerHTML = acceso
  }

})