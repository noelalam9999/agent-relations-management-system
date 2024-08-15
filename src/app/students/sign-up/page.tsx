"use client";
import React from "react";

import { Bird, Rabbit, Turtle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

type pageProps = {};

const FormSchema = z.object({
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

const page: React.FC<pageProps> = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });

  return (
    <div className="w-full h-screen flex justify-center pt-[5vh] pb-[5vh] bg-slate-200">
      <div className="w-[50vw] bg-white shadow-lg rounded">
        <Form {...form}>
          <main className="grid flex-1 gap-4 overflow-auto p-4 ">
            <div
              className="relative hidden flex-col items-start gap-8 md:flex"
              x-chunk="dashboard-03-chunk-0"
            >
              <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-lg font-medium">
                    Signup as a student
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@gmail.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p"> Phone Number</Label>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }: any) => (
                          <FormItem className="flex flex-col items-start">
                            <FormControl className="w-full">
                              <PhoneInput
                                placeholder="Enter a phone number"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* <Input id="top-p" type="number" placeholder="0.7" /> */}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Address</Label>
                      <Input id="address" type="text" placeholder="Dhaka" />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4 ">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Aspirations
                  </legend>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3 ">
                      <Label htmlFor="role">Study Destination</Label>
                      <Select defaultValue="u.k.">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="u.k.">U.K.</SelectItem>
                          <SelectItem value="u.s.a.">U.S.A.</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="malaysia">Malaysia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3 ">
                      <Label htmlFor="role">Desired Level</Label>
                      <Select defaultValue="hsc">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hsc">HSC</SelectItem>
                          <SelectItem value="alevel">A-level</SelectItem>
                          <SelectItem value="undergraduate">
                            Undergraduate
                          </SelectItem>
                          <SelectItem value="postgraduate">
                            Post-graduate
                          </SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4 ">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Credentials
                  </legend>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3 ">
                      <Label htmlFor="role">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="grid gap-3 ">
                      <Label htmlFor="role">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            {/* <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
            </form>
          </div> */}
          </main>
        </Form>
      </div>
    </div>
  );
};
export default page;
