import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BigDecimalColumn as BigDecimalColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class AccountSnapshot {
    constructor(props?: Partial<AccountSnapshot>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    account!: string

    @BigIntColumn_({nullable: false})
    timestampMilli!: bigint

    @BigDecimalColumn_({nullable: false})
    balance!: BigDecimal

    @BigDecimalColumn_({nullable: true})
    point!: BigDecimal | undefined | null
}
