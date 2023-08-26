export class FixCosts {

    name!: string;          // Name der Ausgabe (z.B. "Miete")
    amount!: number;        // Betrag
    date!: string;       // Fälligkeitsdatum
    paymentInterval!: string; // Zahlungsintervall (z.B. "monatlich", "jährlich")
    autoRenewal!: boolean;  // Automatische Erneuer

    constructor(obj?: any) {
        this.name = obj ? obj.name : '',
            this.amount = obj ? obj.amount : '',
            this.date = obj ? obj.date : ''
        this.paymentInterval = obj ? obj.paymentInterval : '',
            this.autoRenewal = obj ? obj.autoRenewal : ''
    }

    public toJson() {
        return {
            name: this.name,
            amount: this.amount,
            date: this.date,
            paymentInterval: this.paymentInterval,
            autoRenewal: this.autoRenewal
        }
    }
}