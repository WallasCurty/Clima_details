//Pergunta: Adicionar uma cidade nos favoritos usando TypeScript




// Definindo a interface para uma cidade
interface City {
  name: string;
  country: string;
}

// Classe para gerenciar os favoritos
class FavoritesManager {
  private favorites: City[];

  constructor() {
    this.favorites = [];
  }

  // Adicionar uma cidade aos favoritos
  addFavorite(city: City): void {
    this.favorites.push(city);
  }

  // Listar todas as cidades favoritas
  listFavorites(): void {
    this.favorites.forEach((city, index) => {
      console.log(`${index + 1}. ${city.name}, ${city.country}`);
    });
  }
}

// Uso da classe FavoritesManager
const manager = new FavoritesManager();

// Criando uma cidade
const newCity: City = {
  name: "São Paulo",
  country: "Brasil",
};

// Adicionando a cidade aos favoritos
manager.addFavorite(newCity);

// Listando as cidades favoritas
manager.listFavorites();

//Pergunta: criar uma animação de clima utilizando a biblioteca animatable do react native em typescript

//npm install react-native-animatable
import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const WeatherAnimation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeIn"
        style={styles.weatherIconContainer}
      >
        <Animatable.Image
          source={require('./assets/weather_icon.png')}
          style={styles.weatherIcon}
          animation="swing"
          iterationCount="infinite"
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherIconContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
  },
  weatherIcon: {
    width: 200,
    height: 200,
  },
});

export default WeatherAnimation;
