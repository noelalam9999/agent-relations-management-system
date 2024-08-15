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
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { countryListAlpha2 } from "@/lib/country";
import { Button } from "@/components/ui/button";

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
    <div className="w-full min-h-screen flex justify-center pt-[5vh] pb-[5vh] bg-slate-200">
      <div className="w-[50vw] bg-white h-fit shadow-lg rounded">
        <Form {...form}>
          <main className="grid flex-1 gap-4 overflow-auto p-4 ">
            <div
              className="relative hidden flex-col items-start gap-8 md:flex"
              x-chunk="dashboard-03-chunk-0"
            >
              <form className="grid w-full items-start gap-6 h-fit">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-lg font-medium">
                    Signup as an Agent
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" />
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
                      <Label htmlFor="temperature">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@gmail.com"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4 ">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Office
                  </legend>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3 ">
                      <Label htmlFor="role">Agency Name</Label>
                      <Input
                        id="agencyName"
                        type="email"
                        placeholder="john@gmail.com"
                      />
                    </div>
                    <div className="grid gap-3 ">
                      <Label htmlFor="role">Country</Label>
                      <Select defaultValue={countryListAlpha2.AG}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(countryListAlpha2).map(
                            (country: any) => (
                              <SelectItem value={country[0]}>
                                {country[1]}
                              </SelectItem>
                            )
                          )}
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
                <Button>Submit</Button>
              </form>
            </div>
          </main>
        </Form>
      </div>
    </div>
  );
};
export default page;
