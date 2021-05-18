import { useEffect, useState } from "react";

function useToggleMode() {
    const initMode = ()  => {
        const localMode = window.localStorage.getItem("mode");
        if (!localMode) {
            window.localStorage.setItem("mode", "light");
            setMode("light");
        }
        return localMode;
    }

    const [mode, setMode] = useState(initMode);

    const toggleMode = () => {
        const prevMode = window.localStorage.getItem("mode");
        const newMode = prevMode === "dark" ? "light" : "dark";
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
        setMode(localMode || "light");
        console.log("localmode: ", localMode);
        if (localMode === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [mode]);

    return [mode, toggleMode];
}

export default useToggleMode;
