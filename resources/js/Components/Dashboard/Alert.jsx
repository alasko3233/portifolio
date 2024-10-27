import React, { useState, useEffect } from "react";

const Alert = ({ message, status }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return isVisible ? (
        <div className="p-10">
            <div
                className={`flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md text-green-100
          ${
              status === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : status === "error"
                  ? "bg-red-500 hover:bg-red-600"
                  : status === "message"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : ""
          }`}
            >
                <div slot="avatar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check-circle w-5 h-5 mx-2"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <div className="text-xl font-normal max-w-full flex-initial">
                    <div className="py-2">
                        {message}
                        <div className="text-sm font-base">{message}</div>
                    </div>
                </div>
                <div className="flex flex-auto flex-row-reverse">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Alert;
