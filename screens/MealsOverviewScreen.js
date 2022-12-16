// React Native
import { View, Text, FlatList } from "react-native";
// React
import React, {useLayoutEffect} from "react"


// Utilities
import { MEALS, CATEGORIES } from "../data/dummy-data";

// Custom Component
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  //const catTitle = route.params.categoryTitle;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() =>{
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

    // Important ! division
  navigation.setOptions({
      title: categoryTitle
    })
  },[catId, navigation])




  function renderMealItem(itemData) {

    const item = itemData.item

    const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability
    }

    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;
