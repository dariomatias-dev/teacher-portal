import type { Message } from "../types";

interface ReceiptModalProps {
  msg: Message;
  onDismiss: () => void;
}

export const ReceiptModal = ({ msg, onDismiss }: ReceiptModalProps) => (
  <div className="overlay">
    <div className="modal-content">
      <h2 className="modal-title">Solicitação de Contato</h2>

      <div className="data-group">
        <span className="data-label">Estudante</span>
        <div className="data-value">{msg.author}</div>
      </div>

      <div className="data-group">
        <span className="data-label">Assunto</span>
        <div className="data-value">{msg.topic}</div>
      </div>

      <div className="data-group">
        <span className="data-label">Mensagem</span>
        <div className="data-value">{msg.body}</div>
      </div>

      <button
        className="submit-button"
        onClick={onDismiss}
        style={{ marginTop: "40px" }}
      >
        Fechar
      </button>
    </div>
  </div>
);
