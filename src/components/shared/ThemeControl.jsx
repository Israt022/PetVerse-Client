"use client";

import { ToggleButton } from "@heroui/react";
import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const ThemeControl = () => {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    return (
        <ToggleButton
            isSelected={isDark}
            onChange={() =>
                setTheme(isDark ? "light" : "dark")
            }
            aria-label="Toggle Theme"
        >
            {isDark ? (
                <>
                    <IoMoonSharp />
                    
                </>
            ) : (
                <>
                    <IoSunnyOutline />
                    
                </>
            )}
        </ToggleButton>
    );
};

export default ThemeControl;