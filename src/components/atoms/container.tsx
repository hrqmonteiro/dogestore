import { SafeAreaView, StyleSheet } from 'react-native'

export default function Container({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 16
  }
})
