import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link"; // Import Link from Next.js

export default function Page() {
  //   // State to hold the signup form data
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: ""
  //   });

  // // Handler to update form data
  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: value,
  //   }));
  // };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="container mx-auto flex-1 px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Effortless Information Retrieval
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our SaaS platform empowers you to quickly find the information you need, with powerful search and
                organization tools.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">$20/month</div>
              <p className="text-muted-foreground">Billed annually</p>
              <p className="text-muted-foreground">Free 30-day trial</p>
            </div>
          </div>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create your account to start using our platform. Free 30-day trial.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="items-top flex gap-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <Link
                    href="/terms"  // Update this line to navigate to the new page
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
                    prefetch={false}
                  >
                    View Terms
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign Up</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
