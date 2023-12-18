import { ValidationChain, checkSchema } from "express-validator";
import { validate } from "../utils/validation";

export const quoteValidator = validate(
    checkSchema({
        'origin.address.country_code': {
            isString: true,
            isISO31661Alpha2: true,
            errorMessage: 'contry code must be a valid ISO 3166-1 alpha2'
        },
        'destination.address.country_code': {
            isString: true,
            isISO31661Alpha2: true,
            errorMessage: 'contry code must be a valid ISO 3166-1 alpha2'
        }
    })
)