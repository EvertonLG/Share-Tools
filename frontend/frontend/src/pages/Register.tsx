import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Wrench, UserPlus, Lock, Mail, User } from 'lucide-react';
import api from '../api/axios';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newUser = { name, email, password };
            await api.post('/users/register', newUser);
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-metal-light to-metal-dark flex items-center justify-center p-4">
            {/* Card com estilo de "placa de identificação de ferramentas" */}
            <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-2xl border-t-4 border-toolbox-blue overflow-hidden">
                {/* Cabeçalho com tema de oficina */}
                <div className="bg-metal-dark py-4 px-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <Wrench className="text-rust mr-3" size={24} />
                        <h1 className="text-2xl font-tool text-white">
                            NOVO <span className="text-toolbox-blue">MEMBRO</span>
                        </h1>
                    </div>
                    <UserPlus className="text-metal-light" size={24} />
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit}>
                        {/* Input de nome */}
                        <div className="mb-6">
                            <label className="block text-sm font-tool uppercase text-metal-dark mb-2">
                                <User className="inline mr-2" size={16} />
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-3 border-2 border-metal-light rounded-lg bg-gray-50 focus:outline-none focus:border-toolbox-blue font-tool placeholder-gray-400"
                                placeholder="Seu nome"
                            />
                        </div>

                        {/* Input de email */}
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
                                className="w-full p-3 border-2 border-metal-light rounded-lg bg-gray-50 focus:outline-none focus:border-toolbox-blue font-tool placeholder-gray-400"
                                placeholder="seu@email.com"
                            />
                        </div>

                        {/* Input de senha */}
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
                                className="w-full p-3 border-2 border-metal-light rounded-lg bg-gray-50 focus:outline-none focus:border-toolbox-blue font-tool placeholder-gray-400"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Botão de cadastro */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-toolbox-blue hover:bg-opacity-90 text-white rounded-lg font-tool uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <UserPlus size={18} />
                            CADASTRAR MEMBRO
                        </button>
                    </form>

                    {/* Link para login */}
                    <div className="mt-6 pt-6 border-t border-metal-light text-center">
                        <p className="text-sm text-metal-dark font-tool">
                            Já possui cadastro?{' '}
                            <Link
                                to="/login"
                                className="text-rust hover:text-toolbox-blue font-bold underline underline-offset-4"
                            >
                                ACESSE SUA CONTA
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Detalhe decorativo - Chave de boca no canto */}
            <div className="hidden md:block absolute bottom-10 left-10 opacity-20">
                <Wrench size={120} className="text-metal-dark" />
            </div>
        </div>
    );
};

export default Register;