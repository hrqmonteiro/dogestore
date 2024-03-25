import { useEffect, useState } from 'react'
import {
  useAuthenticator,
  withAuthenticator
} from '@aws-amplify/ui-react-native'
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import { StatusBar } from 'expo-status-bar'
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import amplifyconfig from './src/amplifyconfiguration.json'
import { createTodo } from './src/graphql/mutations'
import { listTodos } from './src/graphql/queries'

const userSelector = (context) => [context.user]

function SignOutButton() {
  const { user, signOut } = useAuthenticator(userSelector)

  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  )
}

Amplify.configure(amplifyconfig)

const initialState = { name: '', description: '' }
const client = generateClient()

function App() {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos
      })

      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) {
      console.log(`Error fetching todos`, err)
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return

      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)

      await client.graphql({
        query: createTodo,
        variables: {
          input: todo
        }
      })
    } catch (err) {
      console.log(`Error creating todo:`, err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignOutButton />
      </View>
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => setInput('name', value)}
          style={styles.input}
          value={formState.name}
          placeholder='Name'
        />
        <TextInput
          onChangeText={(value) => setInput('description', value)}
          style={styles.input}
          value={formState.description}
          placeholder='Description'
        />
        <Pressable onPress={addTodo} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create todo</Text>
        </Pressable>
        {todos.map((todo, index) => (
          <View key={todo.id || index} style={styles.todo}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <Text style={styles.todoDescription}>{todo.description}</Text>
          </View>
        ))}
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 }
})

export default withAuthenticator(App)
