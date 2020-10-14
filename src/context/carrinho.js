import React, { createContext, useState, useContext, useEffect } from 'react'

const carrinhoContexto = createContext();


export default function carrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])
    const [valorTotal, setValorTotal] = useState()

    function add(item) {
        const novocarrinho = carrinho
        newcarrinho.push(item)
        setCarrinho([...novocarrinho])
    }

    useEffect(() =>
        console.log(carrinho)
        , [carrinho])

    
    const store = {
        add,
        carrinho,
        valorTotal
    }
    return (
        <carrinhoContexto.Provider value={store}>
            {children}
        </carrinhoContexto.Provider>
    )
}

export function usecarrinho() {
    const  contexto = useContext(carrinhoContexto);

    const {
        carrinho,
        add,
        valorTotal,

    } = contexto

    return {
        carrinho,
        add,
        valorTotal

    }
}