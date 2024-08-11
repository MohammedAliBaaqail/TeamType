import { Editor } from '@/components/editor/Editor'
import Header from '@/components/header'
import React from 'react'

const Documents = () => {
  return (
    <div>
      <Header>
        <h1 className='text-3xl font-bold'>Documents</h1>
      </Header>
      <Editor/>
    </div>
  )
}

export default Documents