import { Transaction } from '../models/transaction.class';

export class Savings extends Transaction {

    constructor(obj?: any) {
        super(obj);
    }


    public customToJson() {
        const { creditorName, incomeType, paymentMethod, investmentType, costType, ...json } = super.toJson();
        return json;
    }
}