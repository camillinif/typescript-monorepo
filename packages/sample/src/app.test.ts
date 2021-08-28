import * as app from "./app"
// @ponicode
describe("app.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            app.default(-100, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            app.default(1, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            app.default(0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            app.default(0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            app.default(100, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            app.default(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
