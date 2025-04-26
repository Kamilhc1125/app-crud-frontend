import { useRef } from "react";
import Button from "./Button";

const Modal = ({ isOpen, onClose, onClick }) => {

  const ref = useRef(null);

  isOpen ? ref.current?.showModal() : ref.current?.close();

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-6">Please confirm</h3>
        <div className="flex justify-between">
          <Button 
            onClick={onClose} 
            title="Cancel" 
            brandColor="btn-neutral-content"/>
          <Button 
            onClick={onClick} 
            title="Delete" 
          />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose}>
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Modal;
