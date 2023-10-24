import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white ${
          active ? "text-white" : "text-[#ADB7BE]"
        }`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-1 mr-3 rounded-b-lg"
      ></motion.div>
    </button>
  );
};
