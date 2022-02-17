import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Investiment from ".";
import axios from 'axios';
import { act, } from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";


describe("Screen of Investiment", () => {

    test("Test if 'Investiment Card' has renderer", async () => {

       expect(TestRenderer.create(<Investiment/>).toJSON()).toMatchSnapshot();
    })

})