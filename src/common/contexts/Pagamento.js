import { createContext, useState } from 'react'

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposPagamento = [
        {
            id: 1,
            nome: 'Boleto',
            juros: 1
        },
        {
            id: 2,
            nome: 'Cartão de Crédito',
            juros: 1.3
        },
        {
            id: 3,
            nome: 'PIX',
            juros: 1
        },
        {
            id: 4,
            nome: 'Crediário',
            juros: 1.5
        },
    ];
    const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);
    return (
        <PagamentoContext.Provider
            value={{
                tiposPagamento,
                formaPagamento,
                setFormaPagamento
            }}
        >
            {children}
        </PagamentoContext.Provider>
    )
}