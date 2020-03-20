import * as React from 'react'
import { Blob } from 'react-blob'

const ReactBlob = ({style}) =>
  <Blob size="66vh"
    style={{
        position: 'absolute',
        bottom: '-9%',
        left: '-6%',
        zIndex: -1,
        backgroundColor: '#85DBF2',
        color: 'white',
        opacity: 0.32,
        fontSize: '50vh',
        boxShadow:'0px 9px 16px 0px rgba(0,0,0,0.95)',
    }}
  />

export default ReactBlob;