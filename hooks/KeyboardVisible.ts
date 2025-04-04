import { Keyboard } from "react-native";
import { useEffect, useState } from "react";

export const IsKeyboardVisible = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const changeStyle = Keyboard.addListener("keyboardDidShow", () => {
            setIsVisible(true);
        });
        const originalStyle = Keyboard.addListener("keyboardDidHide", () => {
            setIsVisible(false);
        });

        return () => {
            changeStyle.remove();
            originalStyle.remove();
        }
    }, []);

    return isVisible;
}