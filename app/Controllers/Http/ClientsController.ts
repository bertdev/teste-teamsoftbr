import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ClientesService } from 'App/Services/ClientsService'
import ClientUpdateValidator from 'App/Validators/ClientUpdateValidator'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  public async index() {
    return ClientesService.findAll()
  }

  public async show({ params, response }: HttpContextContract) {
    const id = params['id']
    const cliente = await ClientesService.findOne(id)
    if (!cliente) {
      return response.status(404).json({ error: 'Cliente not found' })
    }
    return cliente
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ClientValidator)
    const cliente = await ClientesService.create({
      cnpj: data.cnpj,
      razao_social: data.razaoSocial,
      nome_do_contato: data.nomeDoContato,
      telefone: data.telefone,
    })
    return cliente
  }

  public async update({ request, params, response }: HttpContextContract) {
    const data = await request.validate(ClientUpdateValidator)
    const id = params['id']
    const cliente = await ClientesService.update(
      {
        cnpj: data.cnpj,
        razao_social: data.razaoSocial,
        nome_do_contato: data.nomeDoContato,
        telefone: data.telefone,
      },
      id
    )
    if (!cliente) {
      return response.status(404).json({ error: 'Cliente not found' })
    }
    return cliente
  }

  public async delete({ params, response }: HttpContextContract) {
    const id = params['id']
    await ClientesService.delete(id)
    return response.status(204)
  }
}
