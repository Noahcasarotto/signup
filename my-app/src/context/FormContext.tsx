"use client";

import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of the context state
interface FormContextType {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

// Create the context with default values
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create a provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <FormContext.Provider value={{ name, email, setName, setEmail }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the FormContext
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
