import React, { useEffect, useState } from 'react';
import { Wrench, Briefcase, Calendar, User, Phone, CheckCircle, XCircle } from 'lucide-react';
import api from '../api/axios';
import Navbar from '../components/Navbar';

interface Tool {
    id: number;
    name: string;
    available: boolean;
    returnDate: string;
    ownerName: string;
    ownerContact: string;
    imageUrl?: string;
}

const Dashboard: React.FC = () => {
    const [userTools, setUserTools] = useState<Tool[]>([]);

    useEffect(() => {
        api.get('/user/tools')
            .then((response) => setUserTools(response.data))
            .catch((error) => console.error('Erro ao buscar ferramentas do usuário:', error));
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    return (
        <div className="min-h-screen bg-metal-light">
            <Navbar />

            <main className="container mx-auto px-4 py-8">
                {/* Cabeçalho do Dashboard */}
                <div className="flex items-center mb-8 border-b-2 border-rust pb-4">
                    <Briefcase className="text-rust mr-3" size={32} />
                    <h1 className="text-3xl md:text-4xl font-tool text-metal-dark">
                        PAINEL DA <span className="text-toolbox-blue">OFICINA</span>
                    </h1>
                </div>

                {/* Seção de Ferramentas */}
                <div className="bg-white bg-opacity-90 rounded-xl shadow-xl overflow-hidden border-l-4 border-rust">
                    <div className="bg-metal-dark px-6 py-3 flex items-center">
                        <Wrench className="text-rust mr-2" size={20} />
                        <h2 className="text-xl font-tool text-white">FERRAMENTAS EM CIRCULAÇÃO</h2>
                    </div>

                    <div className="p-6">
                        {userTools.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userTools.map((tool) => (
                                    <div
                                        key={tool.id}
                                        className="border-2 border-metal-light rounded-lg p-4 bg-gray-50 hover:shadow-lg hover:border-rust transition-all transform hover:-translate-y-1"
                                    >
                                        <div className="flex items-start mb-3">
                                            {tool.imageUrl ? (
                                                <img
                                                    src={tool.imageUrl}
                                                    alt={tool.name}
                                                    className="w-16 h-16 object-cover rounded-lg mr-4 border border-metal-light"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 bg-metal-light rounded-lg mr-4 flex items-center justify-center">
                                                    <Briefcase className="text-metal-dark" size={24} />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-lg font-tool font-bold text-metal-dark">
                                                    {tool.name}
                                                </h3>
                                                <div className={`flex items-center mt-1 ${tool.available ? 'text-green-600' : 'text-red-600'}`}>
                                                    {tool.available ? (
                                                        <CheckCircle className="mr-1" size={16} />
                                                    ) : (
                                                        <XCircle className="mr-1" size={16} />
                                                    )}
                                                    <span className="text-sm">
                                                        {tool.available ? 'Disponível' : 'Indisponível'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mt-3">
                                            <div className="flex items-center text-sm">
                                                <Calendar className="text-rust mr-2" size={16} />
                                                <span>Devolução: {formatDate(tool.returnDate)}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <User className="text-toolbox-blue mr-2" size={16} />
                                                <span>{tool.ownerName}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Phone className="text-metal-dark mr-2" size={16} />
                                                <span>{tool.ownerContact}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <Briefcase className="mx-auto text-metal-dark mb-4" size={48} />
                                <p className="font-tool text-metal-dark text-lg">
                                    Nenhuma ferramenta em circulação ainda.
                                </p>
                                <button className="mt-4 bg-rust hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-tool transition-all">
                                    Adicionar Ferramenta
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
