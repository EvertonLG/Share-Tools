import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Wrench, Lock, Mail } from 'lucide-react';
import api from '../api/axios';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = { email, password };
            await api.post('/users/login', user);
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-metal-light to-metal-dark flex items-center justify-center p-4">
            {/* Card de login com estilo de "placa de oficina" */}
            <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-2xl border-t-4 border-rust overflow-hidden">
                {/* Cabeçalho com detalhe metálico */}
                <div className="bg-metal-dark py-4 px-6 flex items-center">
                    <Wrench className="text-rust mr-3" size={24} />
                    <h1 className="text-2xl font-tool text-white">
                        ACESSO À <span className="text-rust">OFICINA</span>
                    </h1>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit}>
                        {/* Input de email com ícone */}
                        <div className="mb-6">
                            <label className="block text-sm font-tool uppercase text-metal-dark mb-2">
                                <Mail className="inline mr-2" size={16} />
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border-2 border-metal-light rounded-lg bg-gray-50 focus:outline-none focus:border-rust font-tool placeholder-gray-400"
                                placeholder="seu@email.com"
                            />
                        </div>

                        {/* Input de senha com ícone */}
                        <div className="mb-8">
                            <label className="block text-sm font-tool uppercase text-metal-dark mb-2">
                                <Lock className="inline mr-2" size={16} />
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border-2 border-metal-light rounded-lg bg-gray-50 focus:outline-none focus:border-rust font-tool placeholder-gray-400"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Botão com efeito de ferrugem */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-rust hover:bg-opacity-90 text-white rounded-lg font-tool uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <Wrench size={18} />
                            ENTRAR NA OFICINA
                        </button>
                    </form>

                    {/* Link para cadastro */}
                    <div className="mt-6 pt-6 border-t border-metal-light text-center">
                        <p className="text-sm text-metal-dark font-tool">
                            Não tem acesso?{' '}
                            <Link
                                to="/register"
                                className="text-toolbox-blue hover:text-rust font-bold underline underline-offset-4"
                            >
                                SOLICITE SUA CHAVE
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Detalhe decorativo - Chave inglesa no canto */}
            <div className="hidden md:block absolute bottom-10 right-10 opacity-20">
                <Wrench size={120} className="text-metal-dark transform rotate-45" />
            </div>
        </div>
    );
};

export default Login;