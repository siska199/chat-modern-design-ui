import { TModalProps } from "../lib/types"

const Modal : React.FC<TModalProps> = ({children, styles}) => {
  return (
    <article className={`fixed w-full h-full bg-black/80  z-[99] ${styles}`}>
        {children}
    </article>
  )
}

export default Modal