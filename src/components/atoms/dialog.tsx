import { Modal, Portal } from 'react-native-paper'

type DialogProps = {
  children: React.ReactNode
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  visible: boolean
}

export default function Dialog({ children, setVisible, visible }: DialogProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={{
          backgroundColor: 'white',
          minHeight: '90%',
          padding: 10
        }}
      >
        {children}
      </Modal>
    </Portal>
  )
}
