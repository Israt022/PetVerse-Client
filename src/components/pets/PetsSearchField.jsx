"use client";

import {Label, SearchField, ListBox, Select, Button} from "@heroui/react";

const PetsSearchField = () => {
    const category = [
        {key : "cat" , label: "Cat"},
        {key : "dog" , label: "Dog"},
        {key : "bird" , label: "Bird"},
        {key : "rabbit" , label: "Rabbit"},
    ]
    return (
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-5 max-w-5xl mx-auto">
            {/* category */}
            <Select className="w-[256px]" placeholder="Select one">
                <Label>Categories</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                    {
                        category.map((cat,i) =><ListBox.Item key={i} id={cat.key} textValue="Florida">
                        {cat.label}
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                        )
                    }
                    </ListBox>
                </Select.Popover>
            </Select>
            {/* search */}
            <SearchField name="search" render={(props) => <div {...props} data-custom="foo" />}>
                <Label>Search</Label>
                <SearchField.Group className={"focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"}>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-[280px]  " placeholder="Search yor pets..." />
                    <SearchField.ClearButton />
                    <Button className="bg-yellow-500 rounded-r-xl">Search</Button>
                </SearchField.Group>
            </SearchField>

            {/* Sorting */}
            <Select className="w-[256px]" placeholder="Select one">
                <Label>Sort by fees</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                    <ListBox.Item id="high" textValue="high">
                        Adoption Fee: Low to High
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="low" textValue="low">
                        Adoption Fee: High to Low
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
};

export default PetsSearchField;