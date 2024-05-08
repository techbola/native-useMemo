import { useState, useMemo, useCallback } from 'react'

function SortedList({ list, sortFunc }) {
  const sortedList = useMemo(() => {
    return [...list].sort(sortFunc)
  }, [list, sortFunc])

  return <div>{sortedList.join(', ')}</div>
}

function App() {
  const [numbers] = useState([10, 20, 30])

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0), 
    [numbers])

  const [names] = useState(['John', 'Paul', 'George', 'Ringo'])

  // const sortedNames = useMemo(() => [...names].sort(), [names])

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const totalCount = count + count2;

  const sortFunc = useCallback((a, b) => a.localeCompare(b), []);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(', ')}</div>
      {/* <div>SortedNames: {sortedNames.join(', ')}</div> */}
      <div>
        <SortedList list={names} sortFunc={sortFunc} />
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      </div>
      <div>Total: {totalCount}</div>
    </>
  )
}

export default App
