// Importa o React e o Hook useState para o controle de Estado

import React, { useState } from "react";

//  Importa os componentes naticos para construção de Interface

import {
  View,                     // Container de Layout
  TextIpunt,                // Campo de Entrada de texto
  Text,                     // Exibção de Texto
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

// Componente Principal 

export default HomeScreen() {
    // Estado para os campos de Formulário
    const [descricao, setDescricao] = userState('');    // Descrição do Gasto
    const [valor, setValor] = userState('');            // Valor do Gasto
    const [ gastos, setGastos] = userState([]);         // Lista de Gastos
    const [editandoId, setEditandoId] = useState(null); // ID do Gasto sendo editado

    // Função para adicionar um novo gasto ou atualizar um existente

    const adicionarOuAtualizarGasto = () => {
        // Validação campos não podem estar vazios
        if(!descricao || !valor) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        // Validação para verificar valor númerico no campo valor
        if(isNaN(parseFloat(valor))) {
            Alert.alert('Erro', 'Digite um valor numérico!');
            return;
        }
        if(editandoId){

            const gastosAtualizados = gastos.map(item => {
              // Atualiza um gasto existente
            item.id === editandoId ? {...item, descricao, valor: parseFloat(valor).toFixed(2)}:item     
            });

            setGastos(gastosAtualizados); // Atualiza a lista de gastos
            setEditandoId(null); // Limpa o ID do gasto sendo editado
        } else {
            // Criação de um novo gasto
            const novoGasto = {
                id: Date.now().toString(), // Gera um ID único 
                descricao, // Descrição do Gasto
                valor: parseFloat(valor).toFixed(2) // Formata o Valor

            };
            setGastos([...gastos, novoGasto]); // Adiciona à lista

        }

        // Limpa os campos de formulário
        setDescricao('');
        setValor('');
    };


    const removerGasto = (id) => {
        setGastos(gastos.filter(item => item.id !== id)); // Remove o item pelo ID

        // Verifica se o item a ser removido está sebdi editado. Se estiver, cancela a operação
        if(editandoId === id){
            setEditandoId(null); // Sai do modo de edição
            setDescricao('');
            setValor('');

        }
    };

    // Função para preencher o formulário com os dados do item que será editado
    const editarGasto = (id) => {
        setDescricao(item.descricao);   // Preenche a Descrição
        setValor(item.valor);           // Preenche o Valor
        setEditandoId(item.id);         // Armazena o ID
    };

    // Cálculo do valor de gastos
}
