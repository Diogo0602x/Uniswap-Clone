export const transactionSchema = {
    name: 'transactions', 
    title: 'Transactions',
    type
    fields: [
        {
            name: 'txHash',
            title: 'Transaction Hash',
            type: 'string',
        },
        {
            name: 'fromAddress',
            title: 'From (Wallet Address',
            type: 'string',
        },
        {
            name: 'toAddress',
            title: 'to (Wallet Address)',
            type: 'string',
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        },
    ],
}