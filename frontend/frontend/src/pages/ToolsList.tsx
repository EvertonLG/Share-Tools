import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Wrench } from 'lucide-react';

interface Tool {
    id: number;
    name: string;
    owner: string;
    available: boolean;
    returnDate: string;
}

const ToolsList: React.FC = () => {
    const [tools, setTools] = useState<Tool[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await axios.get('/tools');
                setTools(response.data);
            } catch (err) {
                console.error('Erro ao buscar ferramentas:', err);
                setError('Erro ao carregar ferramentas. Tente novamente mais tarde.');
            }
        };
        fetchTools();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-metal-light to-metal-dark flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-xl shadow-2xl border-t-4 border-rust overflow-hidden">
                <div className="bg-metal-dark py-4 px-6 flex items-center">
                    <Wrench className="text-rust mr-3" size={24} />
                    <h1 className="text-2xl font-tool text-white">
                        LISTA DE <span className="text-rust">FERRAMENTAS</span>
                    </h1>
                </div>

                <div className="p-8">
                    {error ? (
                        <p className="text-center text-red-600 font-tool mb-6">{error}</p>
                    ) : (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tools.map((tool) => (
                                <li key={tool.id} className="border-2 border-metal-light rounded-lg p-4 bg-gray-50">
                                    <h2 className="text-lg font-tool text-metal-dark mb-2">
                                        {tool.name}
                                    </h2>
                                    <p className="text-sm text-metal-dark font-tool">
                                        Proprietário: {tool.owner}
                                    </p>
                                    <p className="text-sm text-metal-dark font-tool">
                                        Disponível: {tool.available ? 'Sim' : 'Não'}
                                    </p>
                                    <p className="text-sm text-metal-dark font-tool">
                                        Devolução: {tool.returnDate || 'Sem data definida'}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToolsList;
