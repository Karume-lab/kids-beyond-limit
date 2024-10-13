"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="lg:flex p-4 lg:p-20 justify-evenly space-y-8 lg:space-y-0" id="contact-us">
            <div className=" lg:w-1/3 flex flex-col justify-evenly space-y-4 lg:space-y-0 ">
                <div>
                    <span className="font-semibold text-md">CONTACT US</span>
                    <p className=" text-lg lg:text-4xl pb-4">We&apos;d love to hear from you!</p>
                    <p>Whether you have questions, want to collaborate, or are simply curious about what we do, our team is always ready to connect. Reach out to us, and we’ll get back to you as soon as possible. Let&apos;s make a difference together today! </p>
                </div>
                <span>Give us a call:  </span>
                <div className="flex gap-4 justify-center lg:justify-start">
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Phone />
                    </Link>
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Mail />
                    </Link>
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Facebook />
                    </Link>
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Instagram />
                    </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/3">
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message"
                    />
                </div>

                <Button type="submit" className="w-full ">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ContactUs;
