import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
describe("App test func", () => {
    // beforeEach(() => {
    //     render(
    //         <App></App>
    //         );
    // })

    test('test state', () => {
        expect(screen.getByText(/test/i)).toBeDefined()
    })
    test("should add two numbers", () => {
        // expect( 1 + 1).toBe(2);
        expect(screen.getByText('hola')).toBeDefined()
    });
})

// Tạo 1 example code function cơ bản 
// Viết test code cho nó 