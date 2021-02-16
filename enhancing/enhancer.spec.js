const enhancer = require('./enhancer.js');
// test away!

const item = {name: "sword", enhancement: 12, durability: 70}

describe('This is repair test', () => {
    test('durability should equal 100', () => {
        enhancer.repair(item)
        expect(item.durability).toBe(100)
    })
})

describe('This is success test', () => {
    test('enhancement should equal 13', () => {
            enhancer.success(item)
            expect(item.enhancement).toBe(13)
        })
})

describe('This is the fail test', () => {
    let item1 = {name: "axe", enhancement: 12, durability: 85}
    let item2 = {name: "chain", enhancement: 17, durability: 75}

    test('durability decreases by 5 when enhancement is less than 15', () => {
        enhancer.fail(item1)
        expect(item1.durability).toBe(80)
    })

    test('durability decreases by 10 when enhancement is greater than 15', () => {
        enhancer.fail(item2)
        expect(item2.durability).toBe(65)
    })

    test('enhancement decreases by 1 when enhancement is greater than 16', () => {
        enhancer.fail(item2)
        expect(item2.enhancement).toBe(16)
    })
})