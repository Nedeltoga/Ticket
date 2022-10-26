import { getTicket } from "./ticket";

describe('getTicket', ()=>{
    test('Should return the sum of all products in the ticket', ()=>{
        const order = [
            { product: "water", type: "drinks", quantity: 10, unitPrice: 1 },
            { product: "chicken wings", type: "food", quantity: 3, unitPrice: 5 }, ];
        expect(getTicket(order)).toBe(25)
    })

    test('Empty array should be 0', ()=>{
        expect(getTicket([])).toBe(0)
    })
});