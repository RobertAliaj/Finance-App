import { Transaction } from '../models/transaction.class';

export class Debt extends Transaction {

    constructor(obj?: any) {
        super(obj);
        this.creditorName = obj ? obj.creditorName : '';
    }


    public customToJson() {
        const { incomeType, paymentMethod, costType, investmentType, ...json } = super.toJson();
        json.creditorName = this.creditorName;
        return json;
    }
}