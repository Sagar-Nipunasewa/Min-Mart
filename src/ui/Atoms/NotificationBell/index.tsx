import {useState} from "react";


function NotificationBell() {
    const [unreadNotifications, setUnreadNotifications] = useState(0);
    return (
        <button className="hover:bg-slate-100 transition-all rounded-full flex items-center p-2.5 mx-3.5 relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-5 w-5 stroke-gray-900"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
            </svg>
            {unreadNotifications > 0 && (
                <p className="absolute top-[-3px] left-6 text-white bg-red-400 rounded-full text-xs h-5 flex items-center justify-center aspect-square">
                    {unreadNotifications}
                </p>
            )}
        </button>
    );
}

export default NotificationBell;