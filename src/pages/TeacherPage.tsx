import { useState } from "react";
import { useParams } from "react-router-dom";

import { ReceiptModal } from "../components/ReceiptModal";
import { REPOSITORY } from "../data/repository";
import type { Message } from "../types";

export const TeacherPage = () => {
  const { uid } = useParams();

  const teacher = REPOSITORY.find((t) => t.uid === uid);

  const [form, setForm] = useState<Message>({
    author: "",
    topic: "",
    body: "",
  });

  const [viewModal, setViewModal] = useState<Message | null>(null);

  if (!teacher) {
    return <div className="app-container">Docente não encontrado.</div>;
  }

  const dispatch = (e: React.SubmitEvent) => {
    e.preventDefault();

    setViewModal(form);
    setForm({ author: "", topic: "", body: "" });
  };

  return (
    <div className="app-container">
      <section className="hero-section">
        <span className="section-label">{teacher.dept}</span>
        <h1 className="hero-title">{teacher.name}</h1>
      </section>

      <section className="full-width-section">
        <span className="section-label">Grade Curricular</span>

        <div className="subjects-grid">
          {teacher.curriculum.map((s, idx) => (
            <div key={idx} className="subject-card">
              <h4>{s.name}</h4>
              <p>
                {s.major} / {s.term}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <span className="section-label">Contato Direto</span>
          <h2 style={{ fontSize: "32px", fontWeight: "400" }}>
            Envie uma mensagem formal para o docente.
          </h2>
        </div>

        <div className="contact-form">
          <form onSubmit={dispatch}>
            <input
              required
              className="form-input"
              placeholder="Nome Completo"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />

            <input
              required
              className="form-input"
              placeholder="Assunto da Mensagem"
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            />

            <textarea
              required
              className="form-input"
              placeholder="Conteúdo da Mensagem"
              rows={1}
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              style={{ overflow: "hidden" }}
            />

            <button type="submit" className="submit-button">
              Confirmar Envio
            </button>
          </form>
        </div>
      </section>

      {viewModal && (
        <ReceiptModal msg={viewModal} onDismiss={() => setViewModal(null)} />
      )}
    </div>
  );
};
