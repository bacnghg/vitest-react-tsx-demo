import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App test func", () => {
    // beforeEach(() => {
        render(
            <App></App>
            );
    // })

    test('test state', () => {
        expect(screen.getByText(/test/i)).toBeDefined()
    })
    test("should add two numbers", () => {
        // expect( 1 + 1).toBe(2);
        expect(screen.getByRole('h2').textContent).toBe(0)
    });

    test("should add two numbers", () => {
        const btnElm = screen.getByText('Toal')
        fireEvent.click(btnElm)
        expect(screen.getByRole('h2').textContent).toBe(0)
    });

})



// Tạo 1 example code function cơ bản 
// Viết test code cho nó 
// Check các sự kiện ban đầu, mặc định render ra gì, nội dung load xem ajax load ra không
// check input đầu vào 