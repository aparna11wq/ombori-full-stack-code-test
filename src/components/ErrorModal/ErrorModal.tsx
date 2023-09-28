import { useState } from "react";
import "../../styles/errorModal.css";
import { BiError } from "react-icons/bi";

export default function ErrorModal(props) {
  const { isOpen } = props;
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  return (
    <>
      {isModalOpen && (
        <div className="modalContainer">
          <div className="modal" id="modal">
            <div className="modalHeaderContainer">
              <span className="warningIcon">
                <BiError size={25} />
              </span>
              <span className="header"> Error </span>
            </div>
            <div className="modalContent">
              We cannot process your request now. Please try again later.
            </div>
            <div className="modalActions">
              <button
                className="toggle-button"
                onClick={() => setIsModalOpen(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
