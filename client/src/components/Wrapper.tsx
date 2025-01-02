function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-slate-900 flex justify-center items-center">
      {children}
    </div>
  );
}

export default Wrapper;
