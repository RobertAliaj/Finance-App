import { Transaction } from '../models/transaction.class';

export class Income extends Transaction {

    constructor(obj?: any) {
        super(obj);
        this.incomeType = obj ? obj.incomeType : '';
        this.paymentMethod = obj ? obj.paymentMethod : '';
    }


    public customToJson() {
        const { creditorName, costType, investmentType, ...json } = super.toJson();
        json.incomeType = this.incomeType;
        json.paymentMethod = this.paymentMethod;
        return json;
    }
}