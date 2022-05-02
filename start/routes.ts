/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ClientsController.index')
  Route.get('/:id', 'ClientsController.show').where('id', Route.matchers.uuid())
  Route.post('/', 'ClientsController.store')
  Route.patch('/:id', 'ClientsController.update').where('id', Route.matchers.uuid())
  Route.delete('/:id', 'ClientsController.delete').where('id', Route.matchers.uuid())
}).prefix('/clientes')

Route.group(() => {
  Route.get('/', 'AddressesController.index')
  Route.get('/:id', 'AddressesController.show').where('id', Route.matchers.uuid())
  Route.post('/', 'AddressesController.store')
  Route.patch('/:id', 'AddressesController.update').where('id', Route.matchers.uuid())
  Route.delete('/:id', 'AddressesController.delete').where('id', Route.matchers.uuid())
}).prefix('/enderecos')
