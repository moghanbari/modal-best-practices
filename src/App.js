import Modal from './Modal'
import useModal from './useModal';
import './App.css';

function App() {
  const [isShowingModal, toggleModal] = useModal();

  return (
    <div className="App">
      <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />
      <div className="button" onClick={toggleModal}>Open Modal</div>
      <div className="button button-smaller" onClick={toggleModal}>Another Button</div>
    </div>
  );
}

export default App;
