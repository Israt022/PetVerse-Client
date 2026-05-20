"use client";

import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Surface,
    TextArea,
    TextField,
    Select
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const EditPet = ({ pet }) => {
    const {
        _id,
        petName,
        species,
        breed,
        age,
        gender,
        image,
        location,
        adoptionFee,
        adopted,
    } = pet;

    const handleAddPet = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const petData = Object.fromEntries(formData.entries());
        // petData.ownerEmail = user?.email;
        console.log(petData,"From update pet");
        // const token = session?.session?.token
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${_id}`,{
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json',
                // authorization : `Bearer ${token}`
            },
            body : JSON.stringify(petData)
        });
        const data = await res.json();
        console.log("Updated data",data);
    };

    return (
        <div>
            <Modal>
                <Button
                    variant="outline"
                    className="border w-full border-green-500 hover:bg-green-600 hover:text-white text-green-500 font-semibold py-2 rounded-lg transition"
                >
                    <BiEdit /> Edit
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-3xl">

                            <Modal.CloseTrigger />

                            <Modal.Header>
                                <Modal.Icon className="bg-green-100 text-green-600">
                                    <BiEdit className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Edit Pet</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body>
                                <Surface>
                                    <form onSubmit={handleAddPet} className="p-6 space-y-6">

                                        {/* GRID */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                            {/* Pet Name */}
                                            <TextField defaultValue={pet.petName} name="petName" isRequired>
                                                <Label>Pet Name</Label>
                                                <Input />
                                                <FieldError />
                                            </TextField>

                                            {/* Breed */}
                                            <TextField defaultValue={pet.breed} name="breed" isRequired>
                                                <Label>Breed</Label>
                                                <Input />
                                                <FieldError />
                                            </TextField>

                                            {/* Age */}
                                            <TextField defaultValue={pet.age} name="age" type="number" isRequired>
                                                <Label>Age</Label>
                                                <Input type="number" />
                                                <FieldError />
                                            </TextField>

                                            {/* Location */}
                                            <TextField defaultValue={pet.location} name="location" isRequired>
                                                <Label>Location</Label>
                                                <Input />
                                                <FieldError />
                                            </TextField>

                                            {/* Adoption Fee */}
                                            <TextField defaultValue={pet.adoptionFee} name="adoptionFee" type="number" isRequired>
                                                <Label>Adoption Fee</Label>
                                                <Input type="number" />
                                                <FieldError />
                                            </TextField>

                                            {/* Image */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={pet.image} name="image" isRequired>
                                                    <Label>Image URL</Label>
                                                    <Input />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Species */}
                                            <div>
                                                <Label>Species</Label>
                                                <Select name="species" defaultValue={pet.species}>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Dog">Dog</ListBox.Item>
                                                            <ListBox.Item id="Cat">Cat</ListBox.Item>
                                                            <ListBox.Item id="Bird">Bird</ListBox.Item>
                                                            <ListBox.Item id="Rabbit">Rabbit</ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Gender */}
                                            <div>
                                                <Label>Gender</Label>
                                                <Select name="gender" defaultValue={pet.gender}>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Male">Male</ListBox.Item>
                                                            <ListBox.Item id="Female">Female</ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Vaccination */}
                                            <div>
                                                <Label>Vaccination Status</Label>
                                                <Select name="vaccinationStatus" defaultValue={pet.vaccinationStatus}>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Vaccinated">Vaccinated</ListBox.Item>
                                                            <ListBox.Item id="Not Vaccinated">Not Vaccinated</ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Health */}
                                            <div>
                                                <Label>Health Status</Label>
                                                <Select name="healthStatus" defaultValue={pet.healthStatus}>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Healthy">Healthy</ListBox.Item>
                                                            <ListBox.Item id="Sick">Sick</ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <Label>Description</Label>
                                                <TextArea
                                                    name="description"
                                                    defaultValue={pet.description}
                                                    rows={4}
                                                    className={"w-full"}
                                                />
                                            </div>
                                        </div>

                                        {/* FOOTER */}
                                        <div className="flex justify-end gap-3 pt-4">
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>

                                            <Button slot="close" type="submit" className="bg-green-600 text-white">
                                                Update Pet
                                            </Button>
                                        </div>

                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditPet;