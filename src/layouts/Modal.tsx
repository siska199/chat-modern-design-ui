import { TModalProps } from "../lib/types"

const Modal : React.FC<TModalProps> = ({children}) => {
  return (
    <article>
        {children}
    </article>
  )
}

export default Modal