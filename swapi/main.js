const button = document.querySelector('button')

const buttonNotif = () => {
  axios.get('https://swapi.dev/api/planets/2/')
  .then(res => {
    let residents = res.data.residents
    for(let i=0; i<residents.length; i++){
      axios.get(residents[i])
      .then(res => {
        let indiv = res.data.name
        let person = document.createElement('h2')
        person.textContent = indiv
        document.querySelector('body').appendChild(person)
      })
      .catch(error => {
        console.log('error')
      })
    }
  })
  .catch(error =>{
    console.log('You failed')
  })
  console.log('Initiating button sequence')
}


button.addEventListener('click', buttonNotif)