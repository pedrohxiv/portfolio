interface ProjectTagProps {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}

export const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
        isSelected
          ? "text-white border-primary-500"
          : "text-[#ADB7BE] border-slate-600 hover:border-white"
      }`}
    >
      {name}
    </button>
  );
};
