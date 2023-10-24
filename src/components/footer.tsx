interface FooterProps {
  dict: {
    title: string;
  };
}

export const Footer = ({ dict }: FooterProps) => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span> </span>
        <p className="text-slate-600">{dict.title}</p>
      </div>
    </footer>
  );
};
