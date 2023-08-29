import React from "react";

interface InputProps {
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="
   w-full
   p-3
   text-sm
   border-2
   border-neutral-200
   rounded-md
   outline-none
   text-black
   focus:border-neutral-800
   transition
   "
    />
  );
};

export default Input;
