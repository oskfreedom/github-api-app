import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

export interface SearchBarProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchBarComponent: React.FC<SearchBarProps> = ({
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  return (
    <form className="min-w-full flex flex-col gap-5" onSubmit={onSubmit}>
      <div className="border dark:border-white border-gray-950 rounded-md px-3 flex items-center gap-3">
        <FaSearch className="fill-gray-950 dark:fill-white" size={20} />
        <input
          name={name}
          value={value}
          className="w-full bg-transparent py-2 focus:outline-none dark:text-white text-gray-950"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="bg-blue-500 py-2 rounded-md">
        Search
      </button>
    </form>
  );
};
