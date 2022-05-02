import Client from 'App/Models/Client'

interface IClienteData {
  cnpj: string
  razao_social: string
  nome_do_contato: string
  telefone: string
}

export class ClientesService {
  public static async findAll() {
    const clientes = await Client.all()
    return clientes
  }

  public static async findOne(id: string) {
    const cliente = await Client.find(id)
    return cliente
  }

  public static async create(data: IClienteData) {
    const cliente = await Client.create(data)
    return cliente
  }

  public static async update(data: IClienteData, id: string) {
    const cliente = await Client.find(id)
    if (!cliente) {
      return cliente
    }
    await cliente.merge({ ...data }).save()
    return cliente
  }

  public static async delete(id: string) {
    const cliente = await Client.find(id)
    await cliente?.delete()
  }
}
