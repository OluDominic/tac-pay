import transactionTypes from './transaction.types'

export const currentBalance =()=> ({
    type: transactionTypes.CURRENT_BALANCE
})

export const checkBalance =()=> ({
    type: transactionTypes.CHECK_BALANCE
})