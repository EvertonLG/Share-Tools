// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { Home, Wrench, User, LogIn } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="w-full bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <Wrench className="text-yellow-400" size={24} />
                    <span>ShareTools</span>
                </Link>
                <nav className="flex gap-6">
                    <Link to="/" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Home size={18} /> Home
                    </Link>
                    <Link to="/tools" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Wrench size={18} /> Ferramentas
                    </Link>
                    <Link to="/login" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <LogIn size={18} /> Login
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;