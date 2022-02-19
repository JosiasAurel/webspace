
import React from "react";

const Footer: React.FC = (): JSX.Element => {
    const currentYear: number = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} Josias Aurel ⚡🚀 </p>
        </footer>
    )
}

export default Footer;