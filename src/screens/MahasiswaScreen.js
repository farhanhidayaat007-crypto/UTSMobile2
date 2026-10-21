import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
    { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
    { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
    { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
    { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
    { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function MahasiswaScreen() {
    const [keyword, setKeyword] = useState('');

    const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
        item.nama.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Cari nama mahasiswa..."
                value={keyword}
                onChangeText={setKeyword}
            />

            <FlatList
                data={hasilFilter}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.nama}>{item.nama}</Text>
                        <Text style={styles.prodi}>{item.prodi}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.kosong}>Data tidak ditemukan!</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 8,
        marginBottom: 8,
    },
    nama: { fontSize: 16, fontWeight: 'bold' },
    prodi: { color: '#555', marginTop: 2 },
    kosong: { textAlign: 'center', marginTop: 20, color: '#888' },
});