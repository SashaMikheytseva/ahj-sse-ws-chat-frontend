import ModalForm from './ModalForm';

const chatContainer = document.querySelector('.chat-container');
const modalForm = new ModalForm(chatContainer);

modalForm.init();
