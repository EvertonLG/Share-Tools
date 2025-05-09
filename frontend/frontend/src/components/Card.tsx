import React from "react";

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg p-6 mb-4 ${className}`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );
};

export default Card;
