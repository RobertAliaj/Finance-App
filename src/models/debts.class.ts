export class Debts {

    toWhom: string;  //Art der Transaktion(Ausgabe, Ersparnis, Investition)
    amount: number;
    date: number;
    description: string;

    constructor(obj?: any) {
        this.toWhom = obj ? obj.toWhom : '',
            this.amount = obj ? obj.amount : '',
            this.date = obj ? obj.date : ''
        this.description = obj ? obj.date : ''
    }

    public toJson() {
        return {
            toWhom: this.toWhom,
            amount: this.amount,
            date: this.date,
            description: this.description
        }
    }
}