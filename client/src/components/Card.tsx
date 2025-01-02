type CardProps = {
  children: React.ReactNode;
  title: string;
  tag?: string;
  height: string;
  width: string;
};
function Card({ children, title, tag, height, width }: CardProps) {
  return (
    <div
      className="bg-slate-700 w-[480px] rounded-xl flex flex-col items-center justify-between py-8 overflow-y-auto"
      style={{ height, width }}
    >
      {/* card header */}
      <div className="flex flex-col items-center gap-2">
        {title && (
          <h1 className="text-white text-4xl tracking-tight">{title}</h1>
        )}
        {tag && <h3 className="text-white/90 ">{tag}</h3>}
      </div>
      {children}
    </div>
  );
}

export default Card;
