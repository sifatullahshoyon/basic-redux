import { ModeToggle } from "../Mode-Toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl h-16 mx-auto flex items-center gap-3 px-5">
      <div className="flex  items-center">
        <h1 className="font-bold">TaskManager</h1>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
