import { HasPrint } from './interfaceForClass';

export class Invoice implements HasPrint {
    constructor(readonly client: string, private work: string, public amount: number) { };

    print(): string {
        return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`
    };

}

export class Payment implements HasPrint {
    constructor(readonly recipiend: string, private job: string, public amt: number) { };

    print(): string {
        return `I owe ${this.recipiend} ${this.amt} dollar(s) for this job: ${this.job}`
    };
}
