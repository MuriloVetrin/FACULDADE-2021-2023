import React from 'react';

type TextInputProps = {
  label: string,
  placeholder: string,
  isRequired?: boolean,
  type?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  isRequired,
  onChange,
  value,
  type='text'
}) => (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={label}>
          {label}
        </label>
        <input
          onChange={onChange}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id={label}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        {isRequired && <p className="text-gray-600 text-xs italic">Please fill out this field.</p>}
      </div>
    </div>
);

export default TextInput;