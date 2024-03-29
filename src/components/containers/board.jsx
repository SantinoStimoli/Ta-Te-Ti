import React, { useContext, useState } from 'react'
import { TEAM_VALUE } from '../../models/inputValue.enum'
import Cell from '../pure/cell'
import Alert from '../pure/alert'

export const turnValueContext = React.createContext()
export const flipTurnValueContext = React.createContext()

const Board = () => {
  const [AA, setAA] = useState(TEAM_VALUE.NONE)
  const [AB, setAB] = useState(TEAM_VALUE.NONE)
  const [AC, setAC] = useState(TEAM_VALUE.NONE)
  const [BA, setBA] = useState(TEAM_VALUE.NONE)
  const [BB, setBB] = useState(TEAM_VALUE.NONE)
  const [BC, setBC] = useState(TEAM_VALUE.NONE)
  const [CA, setCA] = useState(TEAM_VALUE.NONE)
  const [CB, setCB] = useState(TEAM_VALUE.NONE)
  const [CC, setCC] = useState(TEAM_VALUE.NONE)
  const [turnValue, setCellValue] = useState(TEAM_VALUE.CROSS)

  let cellsEmpty = 9

  const winPosibilities =
    (AA !== TEAM_VALUE.NONE && AA === AB && AA === AC) ||
    (BA !== TEAM_VALUE.NONE && BA === BB && BA === BC) ||
    (CA !== TEAM_VALUE.NONE && CA === CB && CA === CC) ||
    (AA !== TEAM_VALUE.NONE && AA === BA && AA === CA) ||
    (AB !== TEAM_VALUE.NONE && AB === BB && AB === CB) ||
    (AC !== TEAM_VALUE.NONE && AC === BC && AC === CC) ||
    (AA !== TEAM_VALUE.NONE && AA === BB && AA === CC) ||
    (AC !== TEAM_VALUE.NONE && AC === BB && AC === CA)

  const FLIP_VALUES = {
    NONE: TEAM_VALUE.CROSS,
    CIRCLE: TEAM_VALUE.CROSS,
    CROSS: TEAM_VALUE.CIRCLE
  }

  let cells = [
    {
      id: 'AA',
      value: AA,
      setValue: [setAA]
    },
    {
      id: 'AB',
      value: AB,
      setValue: [setAB]
    },
    {
      id: 'AC',
      value: AC,
      setValue: [setAC]
    },
    {
      id: 'BA',
      value: BA,
      setValue: [setBA]
    },
    {
      id: 'BB',
      value: BB,
      setValue: [setBB]
    },
    {
      id: 'BC',
      value: BC,
      setValue: [setBC]
    },
    {
      id: 'CA',
      value: CA,
      setValue: [setCA]
    },
    {
      id: 'CB',
      value: CB,
      setValue: [setCB]
    },
    {
      id: 'CC',
      value: CC,
      setValue: [setCC]
    }
  ]

  const flipCellValue = () => {
    setCellValue(FLIP_VALUES[turnValue])
  }

  const restartMatch = () => {
    cells.forEach(cell => {
      cell.setValue[0](TEAM_VALUE.NONE)
    })
  }

  cells.forEach(cell => {
    if (cell.value !== TEAM_VALUE.NONE) {
      cellsEmpty = cellsEmpty - 1
    }
    console.log(cellsEmpty, cellsEmpty === 0)
  })

  return (
    <turnValueContext.Provider value={turnValue}>
      <flipTurnValueContext.Provider value={flipCellValue}>
        <div className='flex justify-center items-center h-screen flex-col'>
          <div className='grid grid-cols-3 grid-rows-3 bg-black rounded-2xl'>
            {cells.map(cell => {
              return <Cell key={cell.id} cell={cell} />
            })}
          </div>

          {(cellsEmpty === 0 || winPosibilities) && (
            <Alert
              winner={FLIP_VALUES[turnValue]}
              restartMacth={restartMatch}
              draw={!winPosibilities && cellsEmpty === 0}
            />
          )}

          {/* <button onClick={restartMatch} className='relative overflow-hidden text-xl rounded-2xl py-2.5 px-3.5 mt-5 z-10 font-bold before:bg-black before:-z-10 before:rounded-2xl before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:hover:w-full hover:text-white'>Restart match</button> */}
        </div>
      </flipTurnValueContext.Provider>
    </turnValueContext.Provider>
  )
}

export default Board
