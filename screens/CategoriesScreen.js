// React Native
import { FlatList } from "react-native";

// Utilities
import { CATEGORIES } from "../data/dummy-data";


// Custom Component
import CategoryGridTile from "../components/CategoryGridTile";




function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title
      })
     }

    return (
      <CategoryGridTile 
          title={itemData.item.title} 
          color={itemData.item.color}
          onPress={pressHandler}
           />
    )
  }

  return (
   <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
  )
}

export default CategoriesScreen
