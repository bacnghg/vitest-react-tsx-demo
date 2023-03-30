import { act, renderHook } from "@testing-library/react-hooks";
import { useTotal } from "./useTotal";

describe("App test func", () => {
    test('Total result', () => {
        const { result } = renderHook(() => useTotal());
        expect(result.current.numberOne + result.current.numberTwo).toBe(result);
    })
})


