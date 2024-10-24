import {Pressable, PressableProps, Text, Image} from 'react-native'
import { styles } from './style'

export type IngredientProps = {
  name: string
  image: string
  selected?: boolean
}

export  function Ingredient({name, image, selected = false, ...rest}:IngredientProps & PressableProps){
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image
        style={styles.image} 
        source={require('@/assets/images/apple.png')}
      />
      <Text style={styles.title}>Maçã</Text>
    </Pressable>
  )
}