"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";


const ContactUs = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                { ...formData, reply_to: "kidsbeyondlimit@gmail.com", },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.text === 'OK') {
                toast({
                    title: "Message Sent Successfully!",
                    description: "Thank you for reaching out! We've received your message and will get back to you shortly.",
                });
                setFormData({ from_name: "", from_email: "", message: "" });
            } else {
                throw new Error('EmailJS send failed');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast({
                title: "Message Not Sent",
                description: "Something went wrong while sending your message. Please check your information and try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact-us" className="bg-white lg:flex p-4 lg:p-20 justify-evenly space-y-8 lg:space-y-0  ">
            <div className=" lg:w-1/3 flex flex-col justify-evenly space-y-4 lg:space-y-0 ">
                <div>
                    <span className="font-semibold text-md">CONTACT US</span>
                    <p className=" text-lg lg:text-4xl pb-4">We&apos;d love to hear from you!</p>
                    <p>
                        Whether you have questions, want to collaborate, or are simply curious about what we do,
                        our team is always ready to connect. Reach out to us, and we&apos;ll get back to you
                        as soon as possible. Let&apos;s make a difference together today!
                    </p>
                </div>
                <span>Give us a call:  </span>
                <div className="flex gap-4 justify-center lg:justify-start">
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Instagram />
                    </Link>
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Facebook />
                    </Link>
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Mail />
                    </Link>
                    <Link href="placeholder" className="bg-gray-100 rounded-md p-2 ">
                        <Phone />
                    </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/3">
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="from_name">Name</Label>
                    <Input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="from)email">Email</Label>
                    <Input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
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
                        required
                    />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending ...' : 'Submit'}
                </Button>
            </form>
        </div>
    );
};


export default ContactUs;
