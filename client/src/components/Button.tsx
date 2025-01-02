type ButtonProps = {
  children: React.ReactNode;
  override?: boolean;
  className?: string;
  onClick?: () => void;
};
function Button({ children, override, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        override
          ? className
          : `bg-slate-900 text-white px-8 py-2 rounded-lg hover:bg-slate-800 shadow-lg`
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
