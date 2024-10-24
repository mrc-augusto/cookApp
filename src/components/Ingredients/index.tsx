import { ScrollView } from "react-native";
import { Ingredient } from "../Ingredient";
import { styles } from "./style";
import { useState } from "react";

export function Ingredients(){
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string){
    if(selected.includes(value)){
      return setSelected((state)=> state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({length: 100}).map((item, index)=>(
        <Ingredient 
          key={index} 
          name='Tomate' 
          image='' 
          selected = {selected.includes(String(index))}
          onPress={() => handleToggleSelected(String(index))}
        />
      ))}
    </ScrollView>
  )
}