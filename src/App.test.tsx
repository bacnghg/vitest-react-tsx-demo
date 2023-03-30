import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App test func", () => {
    test('the title is app', () => {
        render(<App />);
        expect(screen.getByText(/Addition Component/i)).toBeDefined
    })

    test('the label is number one', () => {
        render(<App />);
        expect(screen.getByText(/Number 1:/i)).toBeDefined
    })
    test('Test click input numberone', () => {
        render(<App />);
        const buttonElm = screen.getByTestId('iNumberOne')
        fireEvent.click(buttonElm)
        expect(screen.getByText(/0/i)).toBeDefined
    })
    test('the label is numbertwo', () => {
        render(<App />);
        expect(screen.getByText(/Number 2:/i)).toBeDefined
    })
    test('Test click input numberone', () => {
        render(<App />);
        const buttonElm = screen.getByTestId('iNumberTwo')
        fireEvent.click(buttonElm)
        expect(screen.getByText(/0/i)).toBeDefined
    })
    test('Test click check Total result', () => {
        render(<App />);
        const buttonElm = screen.getByTestId('resultId')
        fireEvent.click(buttonElm)
        expect(screen.getByText(/Total/i)).toBeDefined
    })
})



// Tạo 1 example code function cơ bản 
// Viết test code cho nó 
// Check các sự kiện ban đầu, mặc định render ra gì, nội dung load xem ajax load ra không
// check input đầu vào 

// input number
// value result total