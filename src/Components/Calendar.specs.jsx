import React from "react";
import DateRangeFilter from "./DateRangeFilter";

import {create} from "react-test-renderer";
import {mount} from "enzyme";

describe("<DateRangeFilter />", () => {
    it("should match the DateRangeFilter snapshot", () => {
        const component = create(<DateRangeFilter />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should call the onChange when changed", () => {
        const actions = {
            onChange: jest.fn()
        };
        const component = mount(<DateRangeFilter onChange={actions.onChange} />);

        component.find("button.rdrStaticRange").at(0).stimulate("click");
        expect(actions.onChange).toHaveBeenCalled();
    });
});