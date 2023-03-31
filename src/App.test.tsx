import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";
// const mockedOnChange = jest.fn;
describe("App test func", () => {
    test('the title is app', () => {
        render(<App />);
        expect(screen.getByText(/Addition Component/i)).toBeDefined
    })

    // Number one
    test('the label is number one', () => {
        render(<App />);
        expect(screen.getByText(/Number 1:/i)).toBeDefined
    })
    // test('Test click input numberone', () => {
    //     render(<App />);
    //     const buttonElm = screen.getByTestId('iNumberOne')
    //     fireEvent.click(buttonElm)
    //     expect(screen.getByText(/0/i)).toBeDefined
    // })

    test('Checkvalue number one input', () => {
        render(<App />);
        const buttonElm = screen.getByTestId('iNumberOne')
        fireEvent.click(buttonElm)

    })

    // Number two
    test('the label is numbertwo', () => {
        render(<App />);
        expect(screen.getByText(/Number 2:/i)).toBeDefined
    })
    // test('Test click input numbertwo', () => {
    //     render(<App />);
    //     const buttonElm = screen.getByTestId('iNumberTwo')
    //     //fireEvent.click(buttonElm)
    //     console.log("type: ",buttonElm.nodeType)
    //     console.log("type check: ",expectTypeOf(buttonElm.nodeType).toMatchTypeOf<Number>)
        
    // })
    test("input value is the numbertwo props", async () => {
        render(<App />)
        // const input = await screen.findByRole("iNumber2", {name: /0/i});
        // const input = screen.getByTestId('iNumberTwo').querySelector('input')
        const input = screen.getByTestId('iNumberTwo').querySelector.apply
        console.log("input 2: ",input)
        // await waitFor(() => expect(input).toHaveValue("3"));
        await waitFor(() => expect(input).toHaveValue(0));
    });

    // test("callback function is called on user interactions", async () => {
    //     render(<App />)
    //     const input = await screen.findByRole("iNumber2", { name: /0/i });
    //     userEvent.type(input, "10");
    //     expect(mockedOnChange).toHaveBeenCalledWith("10");
    // });

    // button total
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