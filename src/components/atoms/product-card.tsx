import { Card, Text } from 'react-native-paper'

type ProductCardProps = {
  source: string | undefined
  subtitle: string
  text: string
  title: string
}

export default function ProductCard({
  source,
  subtitle,
  text,
  title
}: ProductCardProps) {
  return (
    <Card>
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
