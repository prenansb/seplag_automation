import { useForm } from 'contexts'
import * as S from './modal.styles'

export default function Modal() {
  const {
    state: {
      status: { message, type },
      sendingData,
      index,
      personsLength,
    },
    dispatch,
  } = useForm()

  return (
    <S.Container>
      <S.Modal>
        <S.Close onClick={() => dispatch({ type: 'close_modal' })} />

        {sendingData && (
          <>
            <S.Spinner />
            <S.Message>Enviando dados da Planilha para Seplag</S.Message>
            <S.Message>
              {index === 0
                ? 'Aguardando envio do primeiro lote de pessoas.'
                : `O lote #${index} de #${personsLength} foi enviado.`}
            </S.Message>
          </>
        )}

        {type === 'success' && <S.Success />}
        {type === 'success' && !sendingData && <S.Message>{message}</S.Message>}
        {type === 'error' && !sendingData && <S.Message>{message}</S.Message>}
      </S.Modal>
    </S.Container>
  )
}
