import { useContext, useEffect, useMemo } from 'react'
import { useState } from 'react'
import './App.css'
import { BASE_URL, WS_URL_PRICES } from './Config/config'
import useWebSocket from './Hooks/useWebSocket'
import DataProvider from './Contexts/DataProvider'
import { DataContext, useDataContext } from './Contexts/dataContext'

export default function App() {
  const { data } = useDataContext()
  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 w-1/4">Name</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(e => <Row item={e} key={e.id} />)
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}

const Row = ({ item }) => {
  const [lp, setLp] = useState(Number(item?.priceUsd))
  const chg = Number(item?.changePercent24Hr)
  const defaultPriceStyle = 'border px-4 py-2'
  const [priceClass, setPriceClass] = useState(chg < 0 ? 'text-red-500' : 'text-green-500')
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  const { receivedMessage } = useWebSocket(WS_URL_PRICES(item.id))
  useEffect(() => {
    if (receivedMessage) {

      // console.log(receivedMessage[item.id])
      setLp((prev) => {
        if (prev < Number(receivedMessage[item.id])) {
          setBackgroundColor('bg-green-500')
          setPriceClass('text-white')
          setTimeout(() => {
            setBackgroundColor('bg-white');
            setPriceClass(chg < 0 ? 'text-red-500' : 'text-green-500')
          }, 500);
        }
        else {
          setBackgroundColor('bg-red-500')
          setPriceClass('text-white')
          setTimeout(() => {
            setBackgroundColor('bg-white');
            setPriceClass(chg < 0 ? 'text-red-500' : 'text-green-500')
          }, 500);
        }
        return receivedMessage[item.id]
      })
    }
  }, [receivedMessage])

  const priceStyle = `${defaultPriceStyle} ${priceClass} ${backgroundColor} transition-all duration-500 ease-in-out`

  return useMemo(() => <tr>
    <td className="border px-4 py-2">{item?.name}</td>
    <td className={priceStyle}>{lp}</td>
  </tr>
    , [lp, priceStyle])
}