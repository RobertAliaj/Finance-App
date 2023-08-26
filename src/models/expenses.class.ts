export class Expenses {
    expendituresName!: string;
    amount!: number;
    date!: string;
    description!: string;

    constructor(obj?: any) {
        this.expendituresName = obj ? obj.firstName : '',
            this.amount = obj ? obj.usdAmount : '',
            this.date = obj ? obj.date : ''
            this.description = obj ? obj.date : ''
    }

    public toJson() {
        return {
            firstName: this.expendituresName,
            usdAmount: this.amount,
            date: this.date,
            description: this.description
        }
    }
}