export class FixCosts {

    name!: string;
    amount!: number;
    date!: string;
    paymentInterval!: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '',
            this.amount = obj ? obj.amount : '',
            this.date = obj ? obj.date : ''
        this.paymentInterval = obj ? obj.paymentInterval : ''
    }

    public toJson() {
        return {
            name: this.name,
            amount: this.amount,
            date: this.date,
            paymentInterval: this.paymentInterval
        }
    }
}