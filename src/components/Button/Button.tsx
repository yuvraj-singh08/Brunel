import { ReactNode, useEffect } from "react";
import './style.css';

interface CustomButtonProps {
    children: ReactNode;
    varient: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, varient }) => {
    useEffect(() => {
        console.log(varient);
    },[]);
    
    return (
        <button className={`button text-lg ${varient === 'primary' ? 'primary-button' : 'secondary-button'}`}>{children}</button>
    )
}

export default CustomButton;