import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { LOGO_URL, WS_URL_PRICES } from './Config/config'
import { useDataContext } from './Contexts/dataContext'
import useWebSocket from './Hooks/useWebSocket'
import Container from './Layouts/Container'

export default function App() {
  const { data } = useDataContext()
  return (
    <Container>
    <main>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map(e => <Row item={e} key={e.id} />)}
      </div>
    </main>
    </Container>
  )
}

const Row = ({ item }) => {
  const [lp, setLp] = useState(Number(item?.priceUsd))
  const chg = Number(item?.changePercent24Hr)
  const defaultPriceStyle = 'border py-2 text-center rounded-lg'
  const [priceClass, setPriceClass] = useState(chg < 0 ? 'text-red-500' : 'text-green-500')
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  const { receivedMessage } = useWebSocket(WS_URL_PRICES(item.id))
  useEffect(() => {
    if (receivedMessage) {
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

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

  return useMemo(() => 
        <div 
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 
            shadow-sm focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400
            hover:shadow-md"
          >
          <div className="w-1/4 space-y-2">
            <img
              className="h-8 w-8 rounded-full bg-gray-50 mx-auto"
              src={LOGO_URL(item?.symbol)}
              alt="logo"
            />
            <div className="border py-2 text-center rounded-md">{item?.symbol}</div>
          </div>
          <div className="w-3/4 space-y-2">
            <div className='h-8'>
              <p className="text-sm font-medium text-gray-900">{item?.name}</p>
              <p className="truncate text-sm text-gray-500">{item?.explorer}</p>
            </div>
              <div className={priceStyle}>{USDollar.format(Number(lp))}</div>
          </div>
        </div>
    , [lp, priceStyle])
}
