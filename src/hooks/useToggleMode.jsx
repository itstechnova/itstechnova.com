import { useEffect, useState } from "react";

function useToggleMode() {
    const [mode, setMode] = useState(window.localStorage.getItem("mode"));

    const toggleMode = () => {
        const prevMode = window.localStorage.getItem("mode");
        const newMode = prevMode === "light" ? "dark" : "light";
        console.log(`toggle: ${prevMode} to ${newMode}`);
        if (newMode === "light") {
            window.localStorage.setItem("mode", "light");
            setMode("light");
        } else {
            window.localStorage.setItem("mode", "dark");
            setMode("dark");
        }
    };

    useEffect(() => {
        const localMode = window.localStorage.getItem("mode");
        setMode(localMode);
        if (localMode === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [mode]);

    return [mode, toggleMode];
}

export default useToggleMode;
