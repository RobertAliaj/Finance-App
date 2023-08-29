import { Transaction } from '../models/transaction.class';

export class VariableCosts extends Transaction {

    constructor(obj?: any) {
        super(obj);
        this.costType = obj ? obj.costType : '';
    }


    public customToJson() {
        const { creditorName, incomeType, paymentMethod, investmentType, ...json } = super.toJson();
        json.costType = this.costType;
        return json;
    }
}