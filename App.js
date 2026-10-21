import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

const tampilkanDetail = (pesan) => {
  if (Platform.OS === 'web') {
    window.alert(pesan);
  } else {
    Alert.alert('Detail', pesan);
  }
};

export default function App() {
  const [tab, setTab] = useState('soal1');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setTab('soal1')}
          style={[styles.tab, tab === 'soal1' && styles.tabActive]}
        >
          <Text>Soal 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab('soal2')}
          style={[styles.tab, tab === 'soal2' && styles.tabActive]}
        >
          <Text>Soal 2</Text>
        </TouchableOpacity>
      </View>

      {tab === 'soal1' ? (
        <View>
          <InfoCard
            title="Tugas Lab Pemrograman Mobile"
            status="selesai"
            onPress={() => tampilkanDetail('Tugas Lab sudah selesai')}
          />
          <InfoCard
            title="Laporan Praktikum UI"
            status="proses"
            onPress={() => tampilkanDetail('Laporan masih dikerjakan')}
          />
        </View>
      ) : (
        <MahasiswaScreen />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 48, backgroundColor: '#f2f2f2' },
  tabs: { flexDirection: 'row', marginBottom: 16, gap: 8 },
  tab: { padding: 10, borderRadius: 6, backgroundColor: '#ddd' },
  tabActive: { backgroundColor: '#90caf9' },
});