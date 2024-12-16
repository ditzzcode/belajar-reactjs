import { memo  , useEffect } from 'react'

function ChildComponents({increment , count}) {
  return (
    <button onClick={increment}>button child</button>
  )
}

export default memo(ChildComponents);