// src/components/FormularioGasto.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { validarGasto } from '../utils/validaciones';

export default function FormularioGasto({ onAgregar }) {
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [errores, setErrores] = useState({});

  function registrarGasto() {
    const resultado = validarGasto(categoria, valor);
    setErrores(resultado);

    if (Object.keys(resultado).length > 0) {
      return;
    }

    const nuevoGasto = {
      categoria: categoria.trim(),
      valor: Number(valor),
      fecha: new Date().toISOString().slice(0, 10),
    };

    onAgregar(nuevoGasto);
    setCategoria('');
    setValor('');
    setErrores({});
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registrar nuevo gasto</Text>
      
      <Text style={styles.etiqueta}>Categoría</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Alimentación"
        value={categoria}
        onChangeText={setCategoria}
      />
      {errores.categoria && <Text style={styles.error}>{errores.categoria}</Text>}

      <Text style={styles.etiqueta}>Valor del gasto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 50000"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      {errores.valor && <Text style={styles.error}>{errores.valor}</Text>}

      <Pressable style={styles.boton} onPress={registrarGasto}>
        <Text style={styles.textoBoton}>Registrar gasto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 12, marginBottom: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#172B4D' },
  etiqueta: { fontSize: 14, fontWeight: 'bold', marginBottom: 6, marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#D0D5DD', borderRadius: 8, padding: 12, fontSize: 16 },
  error: { color: '#D92D20', marginTop: 5 },
  boton: { backgroundColor: '#245CC5', padding: 14, borderRadius: 8, marginTop: 18, alignItems: 'center' },
  textoBoton: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});