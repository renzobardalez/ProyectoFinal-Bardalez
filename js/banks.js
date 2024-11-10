const bank = [
    {
        id_bank: 1,
        bank_description: "Interbank"
    },
    {
        id_bank: 2,
        bank_description: "BCP"
    }
]
const currency = [
    {
        id_currency: 1,
        currency: "Soles"
    },
    {
        id_currency: 2,
        currency: "Dólares"
    }
]
const bankAccount = [
    {
        id_account: 1,
        id_bank: 1,
        id_currency: 1,
        account_description: "Interbank Millonaria",
        account_number: 123456789,
        account_balance: 0.00
    },
    {
        id_account: 2,
        id_bank: 1,
        id_currency: 1,
        account_description: "Interbank Crédito Soles",
        account_number: 123442424,
        account_balance: 0.00
    },
    {
        id_account: 3,
        id_bank: 1,
        id_currency: 2,
        account_description: "Interbank Crédito Dólares",
        account_number: 1234322424,
        account_balance: 0.00
    },
    {
        id_account: 4,
        id_bank: 2,
        account_description: "BCP Ahorro",
        account_number: 12345632,
        account_balance: 0.00
    }
]