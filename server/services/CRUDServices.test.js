const rewire = require("rewire")
const CRUDServices = rewire("./CRUDServices")
const InjectDefaultAction = CRUDServices.__get__("InjectDefaultAction")

// @ponicode
describe("UpdateBeforePost", () => {
    let inst

    beforeEach(() => {
        inst = new InjectDefaultAction("http://www.croplands.org/account/confirm?t=", "invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668")
    })

    test("0", () => {
        let callFunction = () => {
            inst.UpdateBeforePost({})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.UpdateBeforePost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
