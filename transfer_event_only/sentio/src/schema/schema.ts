
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { String, Int, BigInt, Float, ID, Bytes, Timestamp, Boolean, Int8 } from '@sentio/sdk/store'
import { Entity, Required, One, Many, Column, ListColumn, AbstractEntity } from '@sentio/sdk/store'
import { BigDecimal } from '@sentio/bigdecimal'
import { DatabaseSchema } from '@sentio/sdk'







interface TransferConstructorInput {
  id: ID;
  from: String;
  to: String;
  value: BigInt;
}
@Entity("Transfer")
export class Transfer extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("String")
	from: String

	@Required
	@Column("String")
	to: String

	@Required
	@Column("BigInt")
	value: BigInt
  constructor(data: TransferConstructorInput) {super()}
  
}


const source = `type Transfer @entity {
  id: ID!
  from: String!
  to: String!
  value: BigInt!
}

`
DatabaseSchema.register({
  source,
  entities: {
    "Transfer": Transfer
  }
})
