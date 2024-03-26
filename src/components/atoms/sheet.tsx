import React, { useRef, useState } from 'react'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet'
import { Button, Text, View } from 'react-native'

type SheetProps = {
  title: string
}

export default function Sheet({ title }: SheetProps) {
  const sheetRef = useRef<BottomSheetMethods>(null)

  const openSheet = () => {
    sheetRef.current?.open()
  }

  return (
    <View>
      <Button title='Open' onPress={openSheet} />
      <BottomSheet ref={sheetRef}>
        <Text>{title}</Text>
      </BottomSheet>
    </View>
  )
}
