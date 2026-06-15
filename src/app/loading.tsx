export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1220]">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-[#8F9CCF]/40 border-t-[#C06C84]" />
        <p className="text-sm tracking-[0.2em] text-slate-400">LOADING PORTFOLIO</p>
      </div>
    </div>
  );
}

