import { useEffect, useState } from "react";

export default function HeaderTop() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    const body = document.querySelector("body")

    if (!darkMode) {
      body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }

    setDarkMode(!darkMode)
  }
  
  return (
  
      <div className="relative z-10 max-w-7xl mx-auto flex items-center flex-col md:flex-row justify-between ">
        <div>
          <h1 className="font-bold text-2xl text-slate-800 dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600 font-bold dark:text-slate-400">
            Total Followers: 23,004
          </p>
        </div>

        {/* Toggle */}
        <div className="toggle gap-[105px] md:gap-0 "><label htmlFor="checkbox" className="font-bold text-slate-600 dark:text-slate-400 text-sm cursor-pointer">Dark Mode</label>
          <input type="checkbox" className="checkbox" id="checkbox" checked={darkMode} onChange={toggleTheme} />
          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>
        </div>
      </div>
    
  );
}