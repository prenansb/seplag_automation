import { createContext, useContext, useReducer } from 'react'

const FormContext = createContext({})

const initialState = {
  data: {
    id: '',
    file: '',
  },
  sendingData: false,
  openModal: false,
  missingInformation: false,
  status: {
    type: '',
    message: '',
  },
  index: 0,
  personsLength: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'missing_information': {
      return { ...state, missingInformation: true }
    }
    case 'close_modal': {
      return {
        ...state,
        openModal: false,
        status: {
          type: '',
          message: '',
        },
      }
    }
    case 'handle_data': {
      return { ...state, data: { ...state.data, [action.id]: action.payload } }
    }
    case 'submit': {
      return { ...state, missingInformation: false, openModal: true, sendingData: true }
    }
    case 'success': {
      return {
        ...state,
        sendingData: false,
        status: { type: 'success', message: action.message },
      }
    }
    case 'error': {
      const message = action.error.response
        ? `Error: ${action.error.response.statusText}`
        : 'Servidor offline'

      return { ...state, sendingData: false, status: { type: 'error', message } }
    }
    case 'increment': {
      return {
        ...state,
        index: action.payload,
      }
    }
    case 'persons_length': {
      return {
        ...state,
        personsLength: action.payload,
      }
    }
    default:
      throw new Error()
  }
}

export function FormContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>
  )
}

export function useForm() {
  return useContext(FormContext)
}
