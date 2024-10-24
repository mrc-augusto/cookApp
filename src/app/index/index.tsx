import {View, Text, ScrollView} from 'react-native'
import {styles} from './styles'
// import { Ingredients } from '@/components/Ingredients'
import { Selected } from '@/components/Selected'
import { Ingredient } from '@/components/Ingredient'
import { useState } from 'react'


export default function Index(){
  const [selected, setSelected] = useState<string[]>([])
  
  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos {'\n'}
        <Text>produtos que você escolheu</Text>
      </Text>

      <ScrollView 
        contentContainerStyle={styles.ingredients}
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

      {/* <Ingredients/> */}

      <Selected quantity={selected.length}/>
    </View>
  )
}