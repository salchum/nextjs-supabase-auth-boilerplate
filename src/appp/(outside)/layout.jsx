"use client";
import "../globals.css";
import { useEffect } from "react";

export default function OutsideLayout({ children }) {
    useEffect(() => {
        import("preline");
    }, []);

    return <>{children}</>;
}
