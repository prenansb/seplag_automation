import { FormContextProvider } from 'contexts'
import { Home } from 'layout/index'

export default function Index() {
  return (
    <FormContextProvider>
      <Home />
    </FormContextProvider>
  )
}
