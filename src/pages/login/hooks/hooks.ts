import { useEffect, useState } from 'react'
import { LoginContextConfig } from '../type/contextType'

export default (): LoginContextConfig => {
  const [data, setData] = useState<string>('')

  useEffect(() => {
    setData('1')
  }, [])

  const loginConfig = {
    data,
  }

  return {
    loginConfig,
  }
}
