import { ReactNode, useEffect } from "react";
import './style.css';

interface CustomButtonProps {
    children: ReactNode;
    varient: 'primary' | 'secondary';
    onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, varient, onClick }) => {
    useEffect(() => {
        console.log(varient);
    }, []);

    return (
        <button onClick={onClick} className={`button text-lg ${varient === 'primary' ? 'primary-button' : 'secondary-button'}`}>{children}</button>
    )
}

export default CustomButton;