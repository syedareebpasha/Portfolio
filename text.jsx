// app.jsx code

import React from 'react'
import { OrderContext } from './Shared/ContextApi';
import Kitchen from './Shared/Kitchen';

const App = () => {

  const order = "Biryani";
  return (
       <OrderContext.Provider value={order}>
        <Kitchen />
       </OrderContext.Provider>
  )
}
export default App

// kithen ka code

import React, { useContext } from 'react'
import React from 'react'
import { OrderContext } from './Shared/ContextApi';
import Kitchen from './Shared/Kitchen';

const App = () => {

  const order = "Biryani";
  return (
       <OrderContext.Provider value={order}>
        <Kitchen />
       </OrderContext.Provider>
  )
}

export default App
Contectapi
import {createcontex} from "react"
export const ordercontext = reateContext()