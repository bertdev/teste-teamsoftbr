import Address from 'App/Models/Address'

interface IAddressData {
  logradouro: string
  numero: string
  complemento: string | any
  bairro: string
  cidade: string
  estado: string
  cep: string
  client_id: string
}

export class AddressesService {
  public static async findAll() {
    const addresses = await Address.all()
    return addresses
  }

  public static async findOne(id: string) {
    const address = await Address.find(id)
    return address
  }

  public static async create(data: IAddressData) {
    const address = await Address.create(data)
    return address
  }

  public static async update(data: IAddressData, id: string) {
    const address = await Address.find(id)
    if (!address) {
      return address
    }
    await address.merge({ ...data }).save()
    return address
  }

  public static async delete(id: string) {
    const address = await Address.find(id)
    await address?.delete()
  }
}
