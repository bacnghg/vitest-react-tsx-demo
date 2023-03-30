import Accordion from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";
describe("Accordion", () => {
    beforeEach(() => {
        render(
        <Accordion title="hola">
                <h3>My stupid</h3>
                <p>Some 1231231</p>
            </Accordion>
            );
    })

    test("should add two numbers", () => {
         expect( 1 + 1).toBe(3);
        // expect(screen.getByText('hola')).toBeDefined()
    });

    test('should not show the content at the start', () => {
        expect(screen.queryByText(/content/i)).toBeNull()
    })
    test('should show the content white title is clicked', () => {
        const button = screen.getByText(/open/i)
        fireEvent.click(button)
        expect(screen.queryByText(/content/i)).toBeDefined()

    })
    test('should hide the content white title is clicked', () => {
        const button = screen.getByText(/open/i)
        fireEvent.click(button)
        expect(screen.queryByText(/content/i)).toBeNull()

    })
})

// Tạo 1 example code function cơ bản 
// Viết test code cho nó 