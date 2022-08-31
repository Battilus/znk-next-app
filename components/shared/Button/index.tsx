import React, {FC, ReactNode} from 'react';

interface IButtonProps {
    children: ReactNode | ReactNode[] | string | string[]
    className?: string
    onClick?: () => void
}

const Button: FC<IButtonProps> = ({children, className="", onClick}) => {
    return (
        <>
            <button
                className={`flex items-center justify-center outline-0 hover:bg-matterhorn transition-colors duration-400
                            ${className ? className : "border"} border-matterhorn border-opacity-20`}
                onClick={onClick}
            >
                <div className="rounded-full bg-whiteSmoke w-full h-full flex items-center justify-center">
                    {children}
                </div>
            </button>
        </>
    );
};

export default Button;