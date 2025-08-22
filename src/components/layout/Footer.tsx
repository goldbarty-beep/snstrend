export function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SNSTrend.AI. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
