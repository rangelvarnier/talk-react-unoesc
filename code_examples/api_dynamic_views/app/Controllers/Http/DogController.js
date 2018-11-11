'use strict'

class DogController {

  async suggestName ({response}) {
    return response.json({ name: this.searchName() })
  }

  async suggestName({ view }) {
    return view.render('dog', { name: this.searchName() })
  }

  searchName() {
    const dogs = ['Baito', 'Baio', 'Brutos', 'Bandido', 'Cigano', 'Tufon', 'Tigre', 
    'Bilu', 'Cusco', 'Cachorro', 'Espoleta', 'Pelego', 'Pingo', 'Piloto', 'Pintado', 
    'Pitoco', 'Escubi', 'Lobo', 'Urso', 'Valentee', 'Vermelho', 'Xuxa', 'Violeiro', 
    'Sadan', 'Marujo','Bethoven', 'Rabudo', 'Tobi', 'Vinagre' ]
    return dogs[(Math.random() * dogs.length)|0]
  }
}

module.exports = DogController
