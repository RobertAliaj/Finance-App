import { Transaction } from '../models/transaction.class';

export class Investment extends Transaction {

    constructor(obj?: any) {
        super(obj);
        this.investmentType = obj ? obj.investmentType : '';
    }


    public customToJson() {
        const { creditorName, costType, incomeType, paymentMethod, ...json } = super.toJson();
        json.investmentType = this.investmentType;
        return json;
    }
}