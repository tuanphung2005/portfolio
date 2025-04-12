
export function NavigationButtons() {
  return (
    <div className="nav-buttons-container flex flex-col space-y-6 opacity-0">
      <button className="nav-button px-6 py-3 text-white border border-white hover:bg-white hover:text-black transition-colors w-40">
        Projects
      </button>
      <button className="nav-button px-6 py-3 text-white border border-white hover:bg-white hover:text-black transition-colors w-40">
        Skills
      </button>
      <button className="nav-button px-6 py-3 text-white border border-white hover:bg-white hover:text-black transition-colors w-40">
        About
      </button>
      <button className="nav-button px-6 py-3 text-white border border-white hover:bg-white hover:text-black transition-colors w-40">
        Contact
      </button>
    </div>
  );
}