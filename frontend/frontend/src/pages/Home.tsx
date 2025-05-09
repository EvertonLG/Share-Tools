import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Hammer, UserPlus, LogIn } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-metal-light to-metal-dark text-white">
            {/* Background com efeito de "textura de metal" */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
                {/* Título com ícone de ferramenta */}
                <div className="flex items-center mb-6">
                    <Wrench className="text-rust mr-3" size={48} />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-tool font-bold">
                        <span className="text-toolbox-blue">Share</span>
                        <span className="text-rust">Tools</span>
                    </h1>
                </div>

                {/* Subtítulo com divisor estilizado */}
                <div className="w-full max-w-2xl mb-8">
                    <p className="text-lg sm:text-xl text-center text-metal-light mb-6">
                        Compartilhe e encontre ferramentas entre vizinhos
                    </p>
                    <div className="flex justify-center">
                        <div className="h-1 w-20 bg-rust rounded-full"></div>
                    </div>
                </div>

                {/* Botões com estilo de "botão de ferramenta" */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <Link
                        to="/register"
                        className="flex items-center justify-center gap-2 bg-rust hover:bg-opacity-90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-tool uppercase tracking-wider"
                    >
                        <UserPlus size={20} /> Cadastrar
                    </Link>
                    <Link
                        to="/login"
                        className="flex items-center justify-center gap-2 bg-toolbox-blue hover:bg-opacity-90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-tool uppercase tracking-wider"
                    >
                        <LogIn size={20} /> Acessar
                    </Link>
                </div>

                {/* Elementos decorativos de ferramentas no canto */}
                <div className="hidden md:block absolute bottom-8 left-8 opacity-30">
                    <Hammer size={80} className="text-metal-dark" />
                </div>
                <div className="hidden md:block absolute top-12 right-8 opacity-30">
                    <Wrench size={80} className="text-metal-dark transform rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default Home;