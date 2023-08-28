

export class Transaction {


    transactionType: string;  //Art der Transaktion(Ausgabe, Ersparnis, Investition)
    incomeType: string;
    costType: string;
    investmentType: string;
    creditorName: string;
    amount: number;
    paymentMethod: string;
    date: number;
    description: string;

    constructor(obj?: any) {
        this.transactionType = obj ? obj.transactionType : '',
            this.incomeType = obj ? obj.incomeType : '',
            this.costType = obj ? obj.costType : '',
            this.investmentType = obj ? obj.investmentType : '',
            this.creditorName = obj ? obj.creditorName : '',
            this.amount = obj ? obj.amount : '',
            this.paymentMethod = obj ? obj.paymentMethod : '',
            this.date = obj ? obj.date : ''
        this.description = obj ? obj.date : ''
    }

    public toJson() {
        return {
            transactionType: this.transactionType,
            incomeType: this.incomeType,
            costType: this.costType,
            investmentType: this.investmentType,
            creditorName: this.creditorName,
            amount: this.amount,
            paymentMethod: this.paymentMethod,
            date: this.date,
            description: this.description
        }
    }
}