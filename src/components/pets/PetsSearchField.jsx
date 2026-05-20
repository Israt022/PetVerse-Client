"use client";

import {Label, SearchField, ListBox, Select, Button} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const PetsSearchField = () => {
    const [search,setSearch] = useState();
    const searchParams = useSearchParams();
    const router = useRouter()
    
    const category = [
        {key : "cat" , label: "Cat"},
        {key : "dog" , label: "Dog"},
        {key : "bird" , label: "Bird"},
        {key : "rabbit" , label: "Rabbit"},
    ]

    const handleSearch = () =>{
        const params = new URLSearchParams(searchParams.toString())
        if(search){
            params.set("search",search);
        }else{
            params.delete("search");
        }

        router.push(`/pets?${params.toString()}`)
    }

    // category
    const handleCategory = (value) => {

        const params = new URLSearchParams(
        searchParams.toString()
        );

        if (value) {
            params.set("category", value);
        } else {
            params.delete("category");
        }

        router.push(`/pets?${params.toString()}`);
    };

    // sorting
    const handleSort = (value) => {

        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (value) {
            params.set("sort", value);
        } else {
            params.delete("sort");
        }

        router.push(`/pets?${params.toString()}`);
    };

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
                        category.map((cat,i) =>
                        <ListBox.Item 
                            onClick={()=> handleCategory(cat.key)} 
                            key={i} id={cat.key} 
                            textValue="Florida"
                        >
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
                    <SearchField.Input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full" 
                        placeholder="Search yor pets..." 
                    />
                    <SearchField.ClearButton />
                    <Button onClick={handleSearch} className="bg-yellow-500 rounded-r-xl">Search</Button>
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
                        <ListBox.Item onClick={()=>handleSort("low")} id="low" textValue="low">
                            Adoption Fee: Low to High
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item onClick={()=>handleSort("high")} id="high" textValue="high">
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