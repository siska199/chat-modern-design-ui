import { ModalProps } from "../lib/propsType"

const Modal : React.FC<ModalProps> = ({children}) => {
  return (
    <article>
        {children}
    </article>
  )
}

export default Modal