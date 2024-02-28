// Input.tsx
import React, { forwardRef } from 'react';

interface InputProps {
  type: string;
  id: string;
  label: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ type, id, label }, ref) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} ref={ref} />
    </div>
  );
};

export default forwardRef(Input);
