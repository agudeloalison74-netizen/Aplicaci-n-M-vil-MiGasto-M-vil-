// src/components/ListaGastos.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListaGastos({ gastos }) {
  function formatoMoneda(valor) {
    return Number(valor).toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mis gastos</Text>
      {gastos.length === 0 ? (
        <Text style={styles.vacio}>No hay gastos registrados.</Text>
      ) : (
        gastos.map((gasto) => (
          <View key={gasto.id} style={styles.tarjeta}>
            <View>
              <Text style={styles.categoria}>{gasto.categoria}</Text>
              <Text style={styles.fecha}>{gasto.fecha}</Text>
            </View>
            <Text style={styles.valor}>{formatoMoneda(gasto.valor)}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { marginBottom: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', color: '#172B4D', marginBottom: 12 },
  tarjeta: { backgroundColor: '#FFFFFF', padding: 15, borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  categoria: { fontSize: 16, fontWeight: 'bold', color: '#172B4D' },
  fecha: { fontSize: 12, color: '#667085', marginTop: 5 },
  valor: { fontSize: 15, fontWeight: 'bold', color: '#245CC5' },
  vacio: { color: '#667085', textAlign: 'center', padding: 20 },
});