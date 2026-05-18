"use client";

import {useState} from "react";
import {Button,InputGroup, Description, FieldError, Form, Input, Label, TextField, Card} from "@heroui/react";
import { BsEyeSlash } from "react-icons/bs";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";


const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleLogin = async(e) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries()) 
        
        const { data, error } = await signIn.email({
            ...loginData,
            callbackURL: "/",
        });

        if(error){
            toast.error("Login failed!")
            return
        }

        if(data){
            toast.success("Login complete!");
        }

            
    }

    return (
        <div className="max-w-5xl mx-auto my-16">
            <Card className="p-10 flex flex-col justify-between gap-16 items-center lg:flex-row">
                {/* Image section */}
                <div className="hidden lg:block">
                    <Image 
                        src={"/assets/login.png"}
                        alt=""
                        width={300}
                        height={300}
                        className="h-full w-full object-cover rounded-3xl"
                    />
                </div>
                {/* Form section */}
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold mb-5 text-yellow-500">Welcome Back</h1>
                    <Form
                        onSubmit={handleLogin}
                        className="flex w-96 flex-col gap-4"
                        render={(props) => <form {...props} data-custom="foo" />}
                    // onSubmit={onSubmit}
                    >
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
                                    className="w-full max-w-[280px]"
                                    id="password"
                                    name="password"
                                    type={isVisible ? "text" : "password"}
                                    placeholder="Enter your pass word"
                                    // value={isVisible ? "87$2h.3diua" : "••••••••"}
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

                        <div className="flex gap-2">
                            <Button type="submit" className={"w-full bg-yellow-500"}>
                                Login
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
                    <p className="text-sm text-gray-500 text-center">Don&apos;t have account? <Link href={'/register'}><span className="text-yellow-500 font-bold">Sign up</span></Link></p>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;