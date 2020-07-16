import React from "react"
import AppName from "."
import { render } from '@testing-library/react';
describe("Testing AppName Component", () => {
    it("AppName rendered correctly", () => {
        const { getByTestId } = render(<AppName></AppName>)
        expect(getByTestId("appname")).toBeInTheDocument()
    });
})