// App.js
import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';

import FormularioGasto from './src/components/FormularioGasto';
import ListaGastos from './src/components/ListaGastos';
import ResumenGastos from './src/components/ResumenGastos';

export default function App() {
  const [gastos, setGastos] = useState([]);

  function agregarGasto(nuevoGasto) {
    const gastoCompleto = {
      ...nuevoGasto,
      id: Date.now(),
    };
    setGastos((anteriores) => [gastoCompleto, ...anteriores]);
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.contenido} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>MiGasto</Text>
        <Text style={styles.subtitulo}>Control de gastos personales</Text>

        <ResumenGastos gastos={gastos} />
        <FormularioGasto onAgregar={agregarGasto} />
        <ListaGastos gastos={gastos} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F4F7FB' },
  contenido: { padding: 20, paddingTop: 35 },
  titulo: { fontSize: 30, fontWeight: 'bold', color: '#172B4D' },
  subtitulo: { fontSize: 15, color: '#667085', marginBottom: 25 },
});