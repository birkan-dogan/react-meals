import { useGlobalContext } from "../context/mealsContext";

const Modal = () => {
  const { selectedMeal } = useGlobalContext();
  console.log(selectedMeal);
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <h1>modal container</h1>
      </div>
    </aside>
  );
};

export default Modal;
