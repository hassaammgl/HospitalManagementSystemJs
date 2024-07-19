"use client";
import { docterSchema } from "@/utils/zodDocterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { onSubmitSignup as onSubmit } from "@/components/server/docterauth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Signup = () => {
  const [avdays, setAvDays] = useState([]);
  const [specs, setSpecs] = useState([]);

  const form = useForm({
    resolver: zodResolver(docterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      phone: "",
      gender: "",
      avatar: "",
      specialties: [],
      address: "",
      availableDays: [],
    },
  });

  const onSubmitSignup = async (values) => {
    console.log(values.username);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormDescription>Enter your email address.</FormDescription>
                <FormControl>
                  <Input placeholder="abc@xyz.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormDescription>Enter secure password please</FormDescription>
                <FormControl>
                  <Input
                    placeholder="************"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormDescription>Confirm your password.</FormDescription>
                <FormControl>
                  <Input
                    placeholder="************"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormDescription>
                  Enter your phone number in this [+12345678934] foramt.
                </FormDescription>
                <FormControl>
                  <Input placeholder="+12345678934" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue="male">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Available Days
          </span>
          {days.map((day) => (
            <div key={day}>
              <Checkbox
                value={day}
                onChange={(e) =>
                  setAvDays((prevDays) => [...prevDays, e.target.value])
                }
              />
              <label className="text-gray-500 text-sm">{day}</label>
            </div>
          ))}

          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Specialties
          </span>
          {specialties.map((specs) => (
            <div key={specs}>
              <Checkbox
                value={specs}
                onChange={(e) =>
                  setSpecs((prevSpecs) => [...prevSpecs, e.target.value])
                }
              />
              <label className="text-gray-500 text-sm">
                {specs}
              </label>
            </div>
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;

const specialties = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "General Surgery",
  "Neurology",
  "Nephrology",
  "Obstetrics and Gynecology",
  "Oncology",
  "Orthopedic Surgery",
  "Otolaryngology",
  "Pathology",
  "Pediatrics",
  "Psychiatry",
  "Pulmonology",
  "Rheumatology",
  "Urology",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
