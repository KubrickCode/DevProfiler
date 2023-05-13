import { FC, useEffect } from "react";
import { usePersistStore } from "../../store/GlobalStore";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

const DarkModeBtn: FC = () => {
  const theme = usePersistStore((state) => state.theme);
  const toggleTheme = usePersistStore((state) => state.toggleTheme);
  useEffect(() => {
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark");
    const backgroundColor = theme === "dark" ? "hsl(0, 0%, 20%)" : "#fff";
    document.body.style.backgroundColor = backgroundColor;
  }, [theme]);

  return (
    <DarkModeToggle
      mode={theme}
      dark="Dark"
      light="Light"
      size="sm"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={toggleTheme}
    />
  );
};

export default DarkModeBtn;
