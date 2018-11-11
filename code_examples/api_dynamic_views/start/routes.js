'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/dog', 'DogController.suggestName')

Route.get('/cat', 'CatController.breed')