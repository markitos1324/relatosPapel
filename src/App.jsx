import { useState } from 'react'
import './App.css'
import { CarShoppingContext } from './components/CarShoppingContext'
import RelatosRouter from './route/relatosRouter';
import {TYPE_CAR_MODIFY_ADD, TYPE_CAR_MODIFY_REMOVE, TYPE_CAR_MODIFY_UPDATE } from './Helpers/Constanst'

function App() {
  const [addToCar, setAddToCar] = useState([])

  const addCarItem = (type ,item) => {
    console.log("🚀 ~ addCarItem ~ item:", type)
    switch (type) {
      case TYPE_CAR_MODIFY_ADD:
        setAddToCar([...addToCar, item])
        console.log("🚀 ~ addCarItem ~ addToCar:", addToCar)
        break;
      case TYPE_CAR_MODIFY_REMOVE:
        const indexToRemove = addToCar.findIndex((carItem) => carItem.ISBN === item.ISBN);

        setAddToCar([
          ...addToCar.slice(0, indexToRemove),
          ...addToCar.slice(indexToRemove + 1)
        ]);
        break;
      case TYPE_CAR_MODIFY_UPDATE:
        setAddToCar(addToCar.map((carItem) => { carItem.ISBN === item.ISBN ? item : carItem}))        
        break;
    }
  }

  return (
    <>
    <CarShoppingContext.Provider value={{addToCar, addCarItem}}>
      <RelatosRouter />
    </CarShoppingContext.Provider>
    </>
  )
}

export default App
