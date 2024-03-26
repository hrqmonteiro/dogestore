import { Card, Text } from 'react-native-paper'

type ProductCardProps = {
  onPress: (title: string) => void
  source: string | undefined
  subtitle: string
  text: string
  title: string
}

export default function ProductCard({
  onPress,
  source,
  subtitle,
  text,
  title
}: ProductCardProps) {
  return (
    <Card onPress={() => onPress(title)}>
      <Card.Cover source={{ uri: source }} />
      <Card.Title
        titleStyle={{ fontWeight: '700' }}
        title={title}
        subtitle={subtitle}
        subtitleStyle={{ fontWeight: '400' }}
      />
      <Card.Content>
        <Text>{text}</Text>
      </Card.Content>
    </Card>
  )
}
