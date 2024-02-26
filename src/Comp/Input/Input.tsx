import './Input.css';




interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function Input({ type, id, label, value, onChange }: InputFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input type={type}  id={id}  value={value}  onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default Input;
