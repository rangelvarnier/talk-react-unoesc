'use strict'

class CatController {

  async breed ({response}) {
    return response.json(['Angorá'])
  }

}

module.exports = CatController
