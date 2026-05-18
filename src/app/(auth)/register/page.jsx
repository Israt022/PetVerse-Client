"use client";

import {useState} from "react";
import {Button,InputGroup, Description, FieldError, Form, Input, Label, TextField, Card} from "@heroui/react";
import { BsEyeSlash } from "react-icons/bs";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { formCsrfMiddleware } from "better-auth/api";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const route = useRouter()
    const handleRegister = async(e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error("Passwords do not match!");
            return;
        }
        const formData = new FormData(e.currentTarget);
        const registerData = Object.fromEntries(formData.entries()) 
        
        const { data, error } = await signUp.email({
            ...registerData
        });

        if(error){
            toast.error("Registration failed!")
            return
        }

        if(data){
            toast.success("Registration complete!");
            route.push("/login");
        }

         
    }
    return (
        <div className="max-w-5xl mx-auto my-16">
            <Card className="p-10 flex flex-col justify-between gap-16 items-center lg:flex-row">
                {/* Form section */}
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold mb-5 text-yellow-500">Create you account</h1>
                    <Form
                            className="flex w-96 flex-col gap-4"
                            render={(props) => <form {...props} data-custom="foo" />}
                            onSubmit={handleRegister}
                        >
                            {/* name */}
                            <TextField
                                isRequired
                                id="name"
                                type="name"
                                name="name"
                                validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                                }}
                            >
                                <Label>Full Name</Label>
                                <Input placeholder="John Doe" />
                                <FieldError />
                            </TextField>
                            {/* email */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                                }}
                            >
                                <Label>Email</Label>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="john@example.com" />
                                <FieldError />
                            </TextField>
                            {/* Image */}
                            <TextField
                                type="url"
                                name="image"
                            >
                                <Label>Photo URL</Label>
                                <Input placeholder="https://example.com/img.jpg" />
                                <FieldError />
                            </TextField>
                            {/* Password */}
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }

                                return null;
                                }}
                            >
                                <Label>Password</Label>
                                <InputGroup className={"flex justify-between items-center"}>
                                    <InputGroup.Input
                                        id="password"
                                        className="w-full max-w-[280px]"
                                        type={isVisible ? "text" : "password"}
                                        placeholder="Enter your password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <BsEyeSlash className="size-4" />}
                                    </Button>
                                    </InputGroup.Suffix>
                                </InputGroup>
                                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                <FieldError />
                            </TextField>
                            {/* Confirm Password */}
                            <TextField
                                id="password"
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                // validate={value}
                            >
                                <Label>Confirm Password</Label>
                                <InputGroup className={"flex justify-between items-center"}>
                                    <InputGroup.Input
                                        className="w-full max-w-[280px]"
                                        type={isVisible ? "text" : "password"}
                                        placeholder="Repeat your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}                                    />
                                    <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <BsEyeSlash className="size-4" />}
                                    </Button>
                                    </InputGroup.Suffix>
                                </InputGroup>
                                <FieldError />
                            </TextField>

                        <div className="flex gap-2">
                            <Button type="submit" className={"w-full bg-yellow-500"}>
                                Sign up
                            </Button>
                        </div>
                    </Form>
                    <div className="flex items-center gap-2">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-sm text-gray-500">
                            or,
                        </span>
                        <hr className="flex-1 border-gray-300" />
                    </div>
                    <Button className="w-full" variant="tertiary">
                        <FcGoogle icon="devicon:google" />
                        Sign in with Google
                    </Button>
                    <p className="text-sm text-gray-500 text-center">Already have account? <Link href={'/login'}><span className="text-yellow-500 font-bold">Login</span></Link></p>
                </div>
                {/* Image */}
                <div className="hidden lg:block">
                    <Image 
                        src={"/assets/registration.png"}
                        alt=""
                        width={300}
                        height={300}
                        className="h-full w-full object-cover rounded-3xl"
                    />
                </div>
            </Card>
        </div>
    );
};

export default RegisterPage;