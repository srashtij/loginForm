// Input.tsx


interface InputProps {
  type: string;
  id: string;
  label: string;
  inputRef: any; 
}

const Input = ({ type, id, label, inputRef }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} ref={inputRef} />
    </div>
  );
};

export default Input;
