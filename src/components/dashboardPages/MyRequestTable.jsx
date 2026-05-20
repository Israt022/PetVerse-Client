'use client'

import {Button, Table} from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoEyeSharp } from "react-icons/io5";

const MyRequestTable = ({request = []}) => {
    const handleCancelAdoption = async(id)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${id}`,{
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json',
            },
        });
        const data = await res.json();
        
        if(data){
            toast.success("Cancel adoption pet successfully!");
            window.location.reload()
        }
    }

    return (
        <div className="text-slate-900 dark:text-white">
            <Table className="text-slate-900 dark:text-white bg-white dark:bg-slate-900">
            {/* <Table variant="secondary" className="text-slate-900 dark:text-white"> */}
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Pet Name</Table.Column>
                        <Table.Column>Request Date</Table.Column>
                        <Table.Column>Pickup Date</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Actions</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {request.length === 0 ? (
                                <Table.Row>
                                    <Table.Cell
                                        colSpan={5}
                                        className="text-center py-10 text-gray-500"
                                    >
                                        No adoption requests found 🐾
                                    </Table.Cell>
                                </Table.Row>
                            ) : (
                            request.map(req => 

                            <Table.Row key={req._id}>
                                <Table.Cell>{req.petName}</Table.Cell>
                                <Table.Cell>{new Date(req.createdAt).toLocaleDateString()}</Table.Cell>
                                <Table.Cell>{req.adoptionDate
                                    ? new Date(req.adoptionDate).toLocaleDateString()
                                    : "Not selected"}
                                </Table.Cell>
                                {/* <Table.Cell>{req.status}</Table.Cell> */}
                                <Table.Cell>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${
                                            req.status === "pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : req.status === "approved"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {req.status}
                                    </span>
                                </Table.Cell>
                                <Table.Cell className={"flex flex-wrap items-center gap-2"}>
                                    <Link href={`/pets/${req.petId}`}>
                                        <Button variant="outline" className="text-yellow-500 hover:text-white hover:bg-amber-500 text-white font-semibold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                                            <IoEyeSharp size={18} />
                                            View
                                        </Button>
                                    </Link>
                                    {req.status === "pending" && (
                                        <Button
                                            variant="danger"
                                            onClick={() => handleCancelAdoption(req._id)}
                                        >
                                            Cancel
                                        </Button>
                                    )}
                                </Table.Cell>
                            </Table.Row>
                            ))
                        }
                    </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyRequestTable;
