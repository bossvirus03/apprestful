export interface IRate {
    data: [{
        weight: number,
        price: number
    }]
}

export default class Rate {
    data: IRate['data'];

    constructor(rate: IRate) {
        this.data = rate.data;
    }
}
