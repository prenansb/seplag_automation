import { useForm } from 'contexts'
import { Modal } from '..'
import { File } from '../svgs'
import { sendData } from '../utils'
import * as S from './form.styles'

export default function Form() {
  const {
    state: {
      data: { file, id },
      openModal,
      missingInformation,
    },
    dispatch,
  } = useForm()

  async function handleSubmit(event) {
    event.preventDefault()

    if (!id || !file) {
      dispatch({ type: 'missing_information' })
      return
    }

    dispatch({ type: 'submit' })

    try {
      await sendData(file, id, dispatch)
      dispatch({ type: 'success', message: 'Planilha enviada!' })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.WrapperId>
        <S.LabelId htmlFor="id">Digite o ID da fatura</S.LabelId>
        <S.InputId
          type="number"
          id="id"
          value={id}
          placeholder="88198"
          onChange={event =>
            dispatch({ type: 'handle_data', id: 'id', payload: event.target.value })
          }
        />
      </S.WrapperId>

      <S.WrapperFile file={file}>
        <S.LabelFile htmlFor="file">Upload planilha</S.LabelFile>
        {file && (
          <S.File>
            <File />
            {file.name}
          </S.File>
        )}
        <S.InputFile
          type="file"
          id="file"
          onChange={event =>
            dispatch({ type: 'handle_data', id: 'file', payload: event.target.files[0] })
          }
        />
      </S.WrapperFile>

      <S.Buttons>
        <S.CancelButton disabled>Cancelar</S.CancelButton>
        <S.SendButton type="submit">Enviar fatura</S.SendButton>
      </S.Buttons>

      {openModal && <Modal />}
      {missingInformation && (
        <S.ErrorMessage>Preencha todas as informações do formulário!</S.ErrorMessage>
      )}
    </form>
  )
}
