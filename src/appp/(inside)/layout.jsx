"use client";
import { useEffect } from "react";
import Sidebar from "../../components/sidebar";
import Toggle from "../../components/toggle";
import Topbar from "../../components/topbar";
import "../globals.css";

export default function InsideLayout({ children }) {
    useEffect(() => {
        import("preline");
    }, []);

    const brandName = "Dikerjain";

    return (
        <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
            <Topbar brandName={brandName} />
            <Toggle />
            <Sidebar brandName={brandName} />
            {/* <div>{children}</div> */}
            <div className="w-full min-h-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">{children}</div>
        </div>
    );
}
