import { act, renderHook } from "@testing-library/react-hooks";
import { useTotal } from "./useTotal";

describe("App test func", () => {
  test("Total result", async () => {
    const { result } = renderHook(() => useTotal());

     act(async () => {
      await result.current.setNumberOne(3);
      await result.current.setNumberTwo(4);

      console.log("result", result.current);
    });

    // expect(result.current.result).toBe(30);
  });
});
