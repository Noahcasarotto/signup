"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link"; // Import Link from Next.js
import TypingEffect from "@/components/TypingEffect";
import Image from 'next/image'; 

export default function Page() {

  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [reset, setReset] = useState(false);

  const handleButtonClick = (type: string) => {
    setSelectedButton(type);
    setReset((prev) => !prev);
  };

  const getTypingString = () => {
    switch (selectedButton) {
      case "student":
      //   return `
      //   <p><strong>Welcome to the first iteration of our new software tailored for students!</strong> By October, our app will be connected to major university systems, including McGill, ConU, UdeM, and NYU, allowing you to access all your course materials in one place. Currently, it's connected to the files you upload, but soon you'll be able to ask it questions like:</p>
        
      //   <p><strong>Student —&gt; Hey Bridge, what homework do I have this week?</strong></p>
        
      //   <p><strong>Bridge —&gt;</strong> <br /></p>
        
      //   <div class="flex items-center mt-4">
      //     <img
      //       src="/McGill_Logo.png" // Replace with the path to your McGill logo image
      //       alt="McGill Logo"
      //       class="w-6 h-6 mr-2"
      //     />
      //     <a 
      //       href="https://example.com/comp552-assignment" // Replace with the actual link to the assignment
      //       class="text-sm text-gray-600 hover:text-blue-600"
      //       target="_blank" // Opens the link in a new tab
      //       rel="noopener noreferrer"
      //     >
      //       COMP 552 Assignment: Traveling Salesman Problem
      //     </a>
      //   </div>

      //   <div class="flex items-center mt-4">
      //     <img
      //       src="/McGill_Logo.png" // Replace with the path to your McGill logo image
      //       alt="McGill Logo"
      //       class="w-6 h-6 mr-2"
      //     />
      //     <a 
      //       href="https://example.com/phys340-midterm" // Replace with the actual link to the midterm
      //       class="text-sm text-gray-600 hover:text-blue-600"
      //       target="_blank" // Opens the link in a new tab
      //       rel="noopener noreferrer"
      //     >
      //       PHYS 340 Midterm: Lagrangian Multipliers and Non-relativistic Space
      //     </a>
      //   </div>

      //   <div class="flex items-center mt-4">
      //     <img
      //       src="/McGill_Logo.png" // Replace with the path to your McGill logo image
      //       alt="McGill Logo"
      //       class="w-6 h-6 mr-2"
      //     />
      //     <a 
      //       href="https://example.com/facc300-quiz" // Replace with the actual link to the quiz
      //       class="text-sm text-gray-600 hover:text-blue-600"
      //       target="_blank" // Opens the link in a new tab
      //       rel="noopener noreferrer"
      //     >
      //       FACC 300 Quiz: Basic Accounting Principles
      //     </a>
      //   </div>
        
      //   <p><strong>Student —&gt; What should I focus on?</strong></p>
        
      //   <p><strong>Bridge —&gt;</strong> Based on your performance, COMP 552 and PHYS 340 are above average, but your FACC 300 performance is below average, with a projected final grade of B-.</p>
        
      //   <p><strong>Student —&gt; Let’s prep for the FACC quiz.</strong></p>
        
      //   <p><strong>Bridge —&gt;</strong> Sounds good! Bridge then asks questions about content from past lectures and prompts you to answer. Afterward, it cites the correct answers.</p>
        
      //   <p><strong>Bridge —&gt;</strong> Bridge asks if you'd like to take the quiz. Since it’s connected to your university’s platform, it pulls quiz questions and cites relevant material to help you answer them. Imagine GPT-4, but connected directly to your school’s resources!</p>
        
      //   <p>This app is evolving into a complete life management system for students, with future development focused on automating data management and data-driven decision-making. Your feedback is invaluable as we continue to improve. We hope you enjoy using Bridge!</p>
      // `;
      return `
        <p><strong>Welcome to the first iteration of our new software tailored for students!</strong> By October, our app will be connected to major university systems, including McGill, ConU, UdeM, and NYU, allowing you to access all your course materials in one place. Currently, it's connected to the files you upload, but soon you'll be able to ask it questions like:</p>
        
        <p><strong>Student —&gt; Hey Bridge, what homework do I have this week?</strong></p>
        
        <p><strong>Bridge —&gt;</strong> <br />
        (Icon and link to assignment) You have a COMP 552 assignment on the traveling salesman problem, <br />
        (Icon and link to date in calendar) PHYS 340 midterm on Thursday covering Lagrangian multipliers and non-relativistic space, <br />
        and a FACC 300 quiz on basic accounting principles.</p>
        
        <div class="flex items-center mt-4">
          <img
            src="/McGill_Logo.png" // Replace with the path to your McGill logo image
            alt="McGill Logo"
            class="w-6 h-6 mr-2"
          />
          <a 
            href="https://example.com/comp552-assignment" // Replace with the actual link to the assignment
            class="text-sm text-gray-600 hover:text-blue-600"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer"
          >
            COMP 552 Assignment: Traveling Salesman Problem
          </a>
        </div>

        <div class="flex items-center mt-4">
          <img
            src="/McGill_Logo.png" // Replace with the path to your McGill logo image
            alt="McGill Logo"
            class="w-6 h-6 mr-2"
          />
          <a 
            href="https://example.com/phys340-midterm" // Replace with the actual link to the midterm
            class="text-sm text-gray-600 hover:text-blue-600"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer"
          >
            PHYS 340 Midterm: Lagrangian Multipliers and Non-relativistic Space
          </a>
        </div>

        <div class="flex items-center mt-4">
          <img
            src="/McGill_Logo.png" // Replace with the path to your McGill logo image
            alt="McGill Logo"
            class="w-6 h-6 mr-2"
          />
          <a 
            href="https://example.com/facc300-quiz" // Replace with the actual link to the quiz
            class="text-sm text-gray-600 hover:text-blue-600"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer"
          >
            FACC 300 Quiz: Basic Accounting Principles
          </a>
        </div>
        
        <p><strong>Student —&gt; What should I focus on?</strong></p>
        
        <p><strong>Bridge —&gt;</strong> Based on your performance, here are your current averages:</p>
        <div class="flex items-center mt-4">
          <img
            src="/McGill_Logo.png" // McGill Logo
            alt="McGill Logo"
            class="w-6 h-6 mr-2"
          />
          <ul>
            <li><strong>COMP 552:</strong> 85%</li>
            <li><strong>PHYS 340:</strong> 78%</li>
            <li><strong>FACC 300:</strong> 62%</li>
          </ul>
        </div>
        <p>Given your grades, I recommend focusing on <strong>FACC 300</strong>, as it's your lowest average and the quiz is coming up soon.</p>
        
        <p><strong>Student —&gt; Sure, pull the quiz questions and answers from my lectures.</strong></p>
        
        <p><strong>Bridge —&gt;</strong> Here’s the first question from your FACC 300 quiz:</p>
        <div class="flex items-center mt-4">
          <img
            src="/McGill_Logo.png" // McGill Logo
            alt="McGill Logo"
            class="w-6 h-6 mr-2"
          />
          <p><strong>Question:</strong> What is the accounting equation?</p>
        </div>
        
        <p><strong>Bridge —&gt;</strong> Here’s a relevant quote from your lecture that answers the question:</p>
        <div class="flex items-center mt-4">
          <img
            src="/McGill_Logo.png" // McGill Logo
            alt="McGill Logo"
            class="w-6 h-6 mr-2"
          />
          <blockquote>“The accounting equation, which is fundamental to the double-entry bookkeeping system, is: <strong>Assets = Liabilities + Equity</strong>.”</blockquote>
        </div>
        
        <p><strong>Bridge —&gt;</strong> Would you like to move on to the next question or review this material further?</p>
        
        <p>This app is evolving into a complete life management system for students, with future development focused on automating data management and data-driven decision-making. Your feedback is invaluable as we continue to improve. We hope you enjoy using Bridge!</p>
      `;
      case "researcher":
        return `
          <p><strong>Welcome, Researchers!</strong> Our platform is designed to enhance your productivity by providing seamless access to vast amounts of data and advanced search capabilities.</p>
          
          <p><strong>Researcher —&gt; Hey Bridge, what are the recent publications on quantum computing?</strong></p>
          
          <p><strong>Bridge —&gt;</strong> Here are the top five most recent publications on quantum computing:</p>
          


          <p>
            <img
              src="/nature.png"
              alt="Nature Icon"
              class="w-6 h-6 mr-2"
              style="display: inline-block; vertical-align: middle;"
            />
            <a 
              href="https://example.com/paper-link" 
              class="text-sm text-gray-600 hover:text-blue-600"
              target="_blank" 
              rel="noopener noreferrer"
              style="text-decoration: none; color: inherit;"
            >
              Paper 1: Quantum Computing Algorithms and their Applications
            </a>
          </p>
          
          
          <p>
            <img
              src="/nature.png"
              alt="Nature Icon"
              class="w-6 h-6 mr-2"
              style="display: inline-block; vertical-align: middle;"
            />
            <a 
              href="https://example.com/paper-link"
              class="text-sm text-gray-600 hover:text-blue-600"
              target="_blank" 
              rel="noopener noreferrer"
              style="text-decoration: none; color: inherit;"
            >
              Paper 2: The Future of Quantum Machine Learning
            </a>
          </p>
          

          
          <p><strong>Researcher —&gt; Can you summarize Paper 1?</strong></p>
          
          <p><strong>Bridge —&gt;</strong> Sure! The paper discusses the latest advancements in quantum algorithms and how they can be applied to solve complex problems in various industries. It covers...</p>
          
          <p>Our platform will continue evolving to meet the needs of researchers, with features like automated data extraction, integration with research databases, and collaboration tools. Stay tuned for more updates!</p>
        `;
      case "corporate":
        return `
          <p><strong>Welcome, Corporate Users!</strong> Our AI-powered platform is built to streamline your business operations, automate data management, and drive data-based decision-making.</p>
          
          <p><strong>Corporate User —&gt; Hey Bridge, what's the latest sales performance report?</strong></p>
          
          <p><strong>Bridge —&gt;</strong> The latest sales performance report shows a 15% increase in sales for Q2, driven by the launch of our new product line. Here are the detailed insights:</p>
          <p>(Icon and link to report) Sales Report Q2</p>
          
          <p><strong>Corporate User —&gt; What are the key areas for improvement?</strong></p>
          
          <p><strong>Bridge —&gt;</strong> Based on the data, here are the top three areas for improvement: customer retention, product diversification, and regional market expansion.</p>
          
          <p>Our platform is continuously evolving to provide more advanced features for corporate users, including real-time analytics, automated reporting, and predictive insights. Your feedback helps us improve!</p>
        `;
      default:
        return "";
    }
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
              {selectedButton && (
                <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                  <TypingEffect text={getTypingString()} reset={reset} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

