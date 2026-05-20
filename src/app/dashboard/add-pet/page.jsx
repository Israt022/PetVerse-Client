"use client";

import {
    Button,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
    Select,
    ListBox,
    Card,
} from "@heroui/react";

import { useSession } from "@/lib/auth-client";
import { PawPrint } from "lucide-react";
import { postPet } from "@/lib/pets/data";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const AddPet = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const user = session?.user;

    const species = [
        { key: "Dog", label: "Dog" },
        { key: "Cat", label: "Cat" },
        { key: "Bird", label: "Bird" },
        { key: "Rabbit", label: "Rabbit" },
    ];

    const gender = [
        { key: "Male", label: "Male" },
        { key: "Female", label: "Female" },
    ];

    const vaccination = [
        { key: "Vaccinated", label: "Vaccinated" },
        { key: "Not Vaccinated", label: "Not Vaccinated" },
    ];

    const health = [
        { key: "Healthy", label: "Healthy" },
        { key: "Needs Treatment", label: "Needs Treatment" },
    ];

    const handleAddPet = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const petData = Object.fromEntries(formData.entries());
        petData.ownerEmail = user?.email;
        console.log(petData,"From add pet");
        // const token = session?.session?.token
        
        const pets  = await postPet(petData);
        if (pets?.insertedId) {
            toast.success("Pet Added Successfully");
            router.push("/dashboard/my-listings")
        } else {
            toast.error("Failed to Add Pet");
        }
    };

    return (
        <div className="max-w-5xl mx-auto">

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-yellow-500">
                    Add New Pet
                </h1>

                <p className="text-gray-500 mt-2">
                    Fill all pet details carefully.
                </p>
            </div>

            <Card className="max-w-3xl mx-auto border border-yellow-500/10">
                <h1 className="flex gap-1 items-center font-bold">Pet Information <PawPrint size={16} className="text-yellow-500" /> </h1>
                <Form
                    onSubmit={handleAddPet}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    render={(props) => <form {...props} />}
                >

                    {/* Pet Name */}
                    <TextField name="petName" isRequired>
                        <Label>Pet Name</Label>
                        <Input placeholder="Enter pet name" />
                    </TextField>

                    {/* Breed */}
                    <TextField name="breed" isRequired>
                        <Label>Breed</Label>
                        <Input placeholder="Golden Retriever" />
                    </TextField>

                    {/* Age */}
                    <TextField name="age" isRequired>
                        <Label>Age</Label>
                        <Input type="number" placeholder="2" />
                    </TextField>

                    {/* Location */}
                    <TextField name="location" isRequired>
                        <Label>Location</Label>
                        <Input placeholder="Dhaka, Bangladesh" />
                    </TextField>

                    {/* Adoption Fee */}
                    <TextField name="adoptionFee" isRequired>
                        <Label>Adoption Fee</Label>
                        <Input type="number" placeholder="100" />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2 w-full">

                        <TextField name="image" className="w-full" isRequired>
                            <Label>Image URL</Label>
                            <Input className="w-full" placeholder="https://example.com/pet.jpg" />
                        </TextField>
                    </div>

                    {/* Species */}
                    <div>
                        <Label>Species</Label>

                        <Select
                            name="species"
                            className="mt-2"
                            placeholder="Select species"
                        >
                            <Select.Trigger>
                                <Select.Value />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    {
                                        species.map((item, i) => (
                                            <ListBox.Item
                                                key={i}
                                                id={item.key}
                                            >
                                                {item.label}
                                            </ListBox.Item>
                                        ))
                                    }
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Gender */}
                    <div>
                        <Label>Gender</Label>

                        <Select
                            name="gender"
                            className="mt-2"
                            placeholder="Select gender"
                        >
                            <Select.Trigger>
                                <Select.Value />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    {
                                        gender.map((item, i) => (
                                            <ListBox.Item
                                                key={i}
                                                id={item.key}
                                            >
                                                {item.label}
                                            </ListBox.Item>
                                        ))
                                    }
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Vaccination */}
                    <div>
                        <Label>Vaccination Status</Label>

                        <Select
                            name="vaccinationStatus"
                            className="mt-2"
                            placeholder="Vaccination status"
                        >
                            <Select.Trigger>
                                <Select.Value />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    {
                                        vaccination.map((item, i) => (
                                            <ListBox.Item
                                                key={i}
                                                id={item.key}
                                            >
                                                {item.label}
                                            </ListBox.Item>
                                        ))
                                    }
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Health */}
                    <div>
                        <Label>Health Status</Label>

                        <Select
                            name="healthStatus"
                            className="mt-2"
                            placeholder="Health status"
                        >
                            <Select.Trigger>
                                <Select.Value />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    {
                                        health.map((item, i) => (
                                            <ListBox.Item
                                                key={i}
                                                id={item.key}
                                            >
                                                {item.label}
                                            </ListBox.Item>
                                        ))
                                    }
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Owner Email */}
                    <TextField
                        name="ownerEmail"
                        isReadOnly
                        value={user?.email || ""}
                        
                    >
                        <Label>Owner Email</Label>
                        <Input className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 outline-none"/>
                    </TextField>

                    {/* Description */}
                    <div className="md:col-span-2 w-full">
                        <Label>Description</Label>
                        <TextArea
                            className="w-full"
                            name="description"
                            label="Description"
                            placeholder="Write pet details..."
                            rows={5}
                        />
                        
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 w-full">
                        <Button
                            type="submit"
                            className="w-full flex items-center gap-1 bg-yellow-500 text-white font-semibold py-6"
                        >
                            Add Pet <PawPrint />
                        </Button>
                    </div>

                </Form>
            </Card>
        </div>
    );
};

export default AddPet;