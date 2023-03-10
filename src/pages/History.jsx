import React from 'react'
import icon from '../assets/vector.svg'
import EmptyPage from '../components/EmptyPage'
const History = () => {
  return (
    <>
        <EmptyPage
            image={icon}
            title={'No history yet'}
            subtitle={'Hit the orange button down below to Create an order'}
        />
    </>
  )
}

export default History