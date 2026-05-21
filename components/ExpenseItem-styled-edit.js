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
            // Atualiza um gasto existente
            
        }
    }

}
