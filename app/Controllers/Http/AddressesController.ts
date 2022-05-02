import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AddressesService } from 'App/Services/AddressesService'
import AddressValidator from 'App/Validators/AddressValidator'

export default class AddressesController {
  public async index() {
    return AddressesService.findAll()
  }

  public async show({ params, response }: HttpContextContract) {
    const id = params['id']
    const address = await AddressesService.findOne(id)
    if (!address) {
      return response.status(404).json({ error: 'Address not found' })
    }
    return address
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(AddressValidator)
    const address = await AddressesService.create(data)
    return address
  }

  public async update({ request, params, response }: HttpContextContract) {
    const data = await request.validate(AddressValidator)
    const id = params['id']
    const address = await AddressesService.update(data, id)
    if (!address) {
      return response.status(404).json({ error: 'Address not found' })
    }
    return address
  }

  public async delete({ params, response }: HttpContextContract) {
    const id = params['id']
    await AddressesService.delete(id)
    return response.status(204)
  }
}
