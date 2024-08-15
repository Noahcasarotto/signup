"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link"; // Import Link from Next.js
import TypingEffect from "@/components/TypingEffect";

export default function Page() {

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (type: string) => {
    setSelectedButton(type);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="container mx-auto flex-1 px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Side: Information Retrieval and Sign-up */}
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
              <div className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">Free 30-day trial</div>
              <div className="text-muted-foreground">20$/month</div>
              <p className="text-muted-foreground">Billed annually</p>
            </div>

            {/* Sign-up form fields directly under pricing section */}
            <div className="grid gap-4 max-w-md">
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
                    href="/terms"  // Navigate to the terms page
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
                    prefetch={false}
                  >
                    View Terms
                  </Link>
                </div>
              </div>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>

          {/* Right Side: Buttons */}
          <div className="flex flex-col items-center justify-start space-y-4">
            <div className="flex space-x-6">
              <Button variant="outline" className="px-6 py-3 text-lg" onClick={() => handleButtonClick("student")}>
                Student
              </Button>
              <Button variant="outline" className="px-6 py-3 text-lg" onClick={() => handleButtonClick("researcher")}>
                Researcher
              </Button>
              <Button variant="outline" className="px-6 py-3 text-lg" onClick={() => handleButtonClick("corporate")}>
                Corporate
              </Button>
            </div>
            <div className="mt-8">
              {selectedButton === "student" && (
                <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold">For Students</h2>
                  <p>
                    As a student, gain access to powerful tools that will help you organize your research, manage your academic projects, and more!
                  </p>
                </div>
              )}
              {selectedButton === "researcher" && (
                <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold">For Researchers</h2>
                  <p>
                    Researchers can take advantage of advanced search capabilities, data management features, and collaborative tools to boost productivity.
                  </p>
                </div>
              )}
              {selectedButton === "corporate" && (
                <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold">For Corporate Users</h2>
                  <p>
                    Streamline your corporate operations with our AI-powered tools designed to integrate seamlessly with your existing workflows.
                  </p>
                </div>
              )}

            <div className="mt-12">
              <TypingEffect />
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
