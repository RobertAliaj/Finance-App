export class Transaction {


    transactionType: string;  //Art der Transaktion(Ausgabe, Ersparnis, Investition)
    amount: number;
    date: number; 
    description: string;

    constructor(obj?: any) {
        this.transactionType = obj ? obj.transactionType : '',
            this.amount = obj ? obj.amount : '',
            this.date = obj ? obj.date : ''
        this.description = obj ? obj.date : ''
    }

    public toJson() {
        return {
            transactionType: this.transactionType,
            amount: this.amount,
            date: this.date,
            description: this.description
        }
    }
}