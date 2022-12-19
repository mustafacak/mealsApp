// React
import React, { useLayoutEffect } from "react";

// React Native
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";

// Utilities
import { MEALS } from "../data/dummy-data";

// Custom Component
import List from "../components/MealDetail/List"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import IconButton from "../components/IconButton";


function MealDetailScreen({ route, navigation }) {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("PRESS!")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color={"white"} onPress={headerButtonPressHandler} />
      }
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>

        <View style={styles.listContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>

      </View>

    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },

  listOuterContainer:{
    alignItems: "center"
  },
  listContainer: {
    width: "80%",
  }
});
