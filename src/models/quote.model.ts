export interface IContact {
    name: string;
    email: string;
    phone: string;
}

export interface IAddress {
    country_code: string;//ISO 3166 alpha-2 
    locality: string;
    postal_code: string;
    address_line1: string;
}

export interface IDimensions {
    height: number;
    width: number;
    length: number;
    unit: string;
}

export interface IGrossWeight {
    amount: number;
    unit: string;
}

export interface IQuote {
    origin: {
        contact: IContact;
        address: IAddress;
    };
    destination: {
        contact: IContact;
        address: IAddress;
    };
    package: {
        dimensions: IDimensions;
        grossWeight: IGrossWeight;
    };
}

export default class Quote {
    origin: IQuote['origin'];
    destination: IQuote['destination'];
    package: IQuote['package'];

    constructor(quote: IQuote) {
        this.origin = quote.origin;
        this.destination = quote.destination;
        this.package = quote.package;
    }
}
