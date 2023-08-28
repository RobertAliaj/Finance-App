export type Newtransaction =
    | {
        type: 'Income',
        amount: number,
        incomeType: string,
        paymentMethod: string,
        date: Date,
        description: string
    } |
    {
        type: 'Cost',
        amount: number,
        costType: string,
        paymentMethod: string,
        date: Date,
        description: string
    } |
    {
        type: 'Invest',
        amount: number,
        investmentType: string,
        date: Date,
        description: string
    } |
    {
        type: 'Debt',
        amount: number,
        creditorName: string,
        date: Date,
        description: string
    };

