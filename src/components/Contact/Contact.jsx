import React, { useState } from 'react';
import './Contact.css';

export function Contact() {
    // Estado único para gerir todo o formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // Função genérica para atualizar qualquer campo
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const whatsappMessage = `Olá Eduardo! 👋\n\n*Meu Nome:* ${formData.name}\n*Meu E-mail:* ${formData.email}\n*Mensagem:* ${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const phoneNumber = '5561996241337'; 
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            setIsSending(false);
            setIsSent(true);
            setFormData({ name: '', email: '', message: '' }); 

            // Remove a mensagem de sucesso após 5 segundos
            setTimeout(() => setIsSent(false), 5000);
        }, 800);
    };

    return (
        <section className="contact-section" id="contato">
            <div className="contact-container">
                <h2 className="btnClass2">FALE COMIGO</h2>
                <p className="contact-subtitle">Vamos transformar a sua ideia num projeto real?</p>

                {isSent ? (
                    <div className="success-message">
                        <h3>🚀 Preparando a viagem!</h3>
                        <p>O teu WhatsApp foi aberto para finalizarmos o envio da mensagem.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Como é o seu nome?"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Qual seu email?"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                name="message"
                                placeholder="Em que posso ajudar o teu projeto? (Descreve um pouco a tua ideia...)"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-send" disabled={isSending}>
                            {isSending ? 'A PROCESSAR...' : 'ENVIAR MENSAGEM'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}