import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [imt, setImt] = useState(null);
  const [kategori, setKategori] = useState('');

  const hitungIMT = () => {
    const b = parseFloat(berat);
    const t = parseFloat(tinggi) / 100; // ubah cm ke meter

    if (!b || !t) {
      setImt(null);
      setKategori('Masukkan berat dan tinggi yang valid!');
      return;
    }

    const hasil = b / (t * t);
    setImt(hasil.toFixed(2));

    if (hasil < 18.5) setKategori('Kurus');
    else if (hasil < 25) setKategori('Normal');
    else if (hasil < 30) setKategori('Berat badan berlebih');
    else setKategori('Obesitas');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.judul}>Kalkulator Indeks Massa Tubuh (IMT)</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Masukkan berat badan (kg)"
          keyboardType="numeric"
          value={berat}
          onChangeText={setBerat}
          style={styles.input}
        />
        <TextInput
          placeholder="Masukkan tinggi badan (cm)"
          keyboardType="numeric"
          value={tinggi}
          onChangeText={setTinggi}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.tombol} onPress={hitungIMT}>
        <Text style={styles.teksTombol}>Hitung IMT</Text>
      </TouchableOpacity>

      {imt && (
        <View style={styles.hasilContainer}>
          <Text style={styles.hasil}>IMT: {imt}</Text>
          <Text style={styles.kategori}>Kategori: {kategori}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tombol: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 15,
  },
  teksTombol: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  hasilContainer: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  hasil: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  kategori: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default App;