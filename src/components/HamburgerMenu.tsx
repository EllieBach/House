import MenuIcon from "@mui/icons-material/Menu";

export default function HamburgerMenu() {
  return (
    <div>
      <button className="text-white focus:outline-none">
        <MenuIcon fontSize="large" />
      </button>
    </div>
  );
}