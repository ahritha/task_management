import React from 'react';

interface SelectFormProps {
  id: string;
  onFilter: React.ChangeEventHandler<HTMLSelectElement>;
  options: { label: string; value: string }[];
  label: string;
}

const SelectForm: React.FC<SelectFormProps> = ({
  id,
  onFilter,
  options,
  label,
}) => {
  return (
    <div className="mb-2">
      <select
        id={id}
        onChange={onFilter}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-md focus:ring-blue-50 focus:border-blue-500 block w-full p-1 "
      >
        <option selected hidden>{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
