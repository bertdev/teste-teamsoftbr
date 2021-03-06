import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Address from './Address'

export default class Client extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public cnpj: string

  @column()
  public razao_social: string

  @column()
  public nome_do_contato: string

  @column()
  public telefone: string

  @hasMany(() => Address, { foreignKey: 'client_id' })
  public addresses: HasMany<typeof Address>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(client: Client) {
    client.id = uuid()
  }
}
