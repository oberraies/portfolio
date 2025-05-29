import React, { useState, useRef } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaUser, FaTimes } from 'react-icons/fa';
import { FiMapPin } from "react-icons/fi";
import { AiOutlineRollback } from "react-icons/ai";
import '../styles/Contact.css';

const Contact = () => {
    const [files, setFiles] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    };

    const handleRemoveFile = (fileName) => {
        setFiles(files.filter(file => file.name !== fileName));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);
        setSubmissionMessage('');

        // Validations
        if (!formData.name.trim()) {
            setErrorMessage("Veuillez renseigner votre nom ou votre nom d'entreprise !");
            nameInputRef.current.focus();
            resetError();
            return;
        }

        if (!formData.email.trim()) {
            setErrorMessage("Veuillez renseigner votre adresse email !");
            emailInputRef.current.focus();
            resetError();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Veuillez saisir une adresse email valide !");
            emailInputRef.current.focus();
            resetError();
            return;
        }

        if (!formData.message.trim()) {
            setErrorMessage("Veuillez rédiger un message");
            messageInputRef.current.focus();
            resetError();
            return;
        }

        // Construction FormData
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('message', formData.message);
        files.forEach(file => {
            formDataToSend.append('files', file);
        });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/submit-form/`, {
                method: 'POST',
                body: formDataToSend,
            });

            let data;
            try {
                data = await response.json();
            } catch {
                throw new Error('Erreur serveur, réponse non valide.');
            }

            if (response.ok && data.status === 'success') {
                setSubmissionStatus('success');
                setSubmissionMessage(data.message || 'Formulaire envoyé avec succès !');
                setFormData({ name: '', phone: '', email: '', message: '' });
                setFiles([]);
            } else {
                setSubmissionStatus('error');
                setSubmissionMessage(data.message || 'Erreur lors de l\'envoi du formulaire.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setSubmissionStatus('error');
            setSubmissionMessage("Une erreur réseau s'est produite. Veuillez réessayer plus tard.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetError = () => {
        setTimeout(() => setErrorMessage(''), 2500);
        setIsSubmitting(false);
    };

    return (
        <div className='contact-container'>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {submissionStatus === 'success' && <div className="success-message">{submissionMessage}</div>}
            {submissionStatus === 'error' && <div className="error-message">{submissionMessage}</div>}

            <div className='contact-info'>
                <p>
                    Besoin de conseils, d'optimisations ou simplement une envie de collaborer, <br />
                    N'hésitez pas à me contacter
                </p>
                <div className='contact-name-block'>
                    <FaUser className="contact-user-icon" />
                    <span className="contact-name">Oussama Berraies</span>
                </div>
                <hr className="left-divider" />
                <div className='contact-address-block'>
                    <FiMapPin className="contact-map-icon" />
                    <span className="contact-address">Bloc 23 App 1-3 Cité Romana 2062 Tunis</span>
                </div>
                <hr className="left-divider" />
                <div className='contact-tel-block'>
                    <FaWhatsapp className="contact-whatsapp-icon" />
                    <span className='contact-tel'>(+216) 99 44 28 79</span>
                </div>
                <hr className="left-divider" />
                <div className='contact-mail-block'>
                    <FaEnvelope className="contact-envelope-icon" />
                    <span className='contact-mail'>oberraies@gmail.com</span>
                </div>
                <hr className="left-divider" />
                <div className='contact-linkedin-block'>
                    <FaLinkedin className="contact-linkedin-icon" />
                    <a href='https://www.linkedin.com/in/oussama-berraies' className='contact-linkedin' target='_blank' rel='noopener noreferrer'>
                        Oussama Berraies
                    </a>
                </div>
                <hr className="left-divider" />
            </div>

            <form className='contact-form-container' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom & prénom ou raison sociale *"
                    className="contact-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    ref={nameInputRef}
                />
                <hr className='right-divider' />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    className="contact-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <hr className='right-divider' />

                <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse email *"
                    className="contact-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    ref={emailInputRef}
                />
                <hr className='right-divider' />

                <textarea
                    name="message"
                    placeholder="Votre message *"
                    className="contact-input contact-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    ref={messageInputRef}
                />
                <hr className='right-divider' />

                <div className="file-upload-row">
                    <input
                        type="file"
                        name="files"
                        multiple
                        className="contact-input"
                        onChange={handleFileChange}
                    />
                    <span className="file-count-text">
                        {files.length > 0 ? `${files.length} fichier(s)` : "Aucun fichier sélectionné"}
                    </span>
                    {files.length > 0 && (
                        <AiOutlineRollback
                            className="reset-files-icon"
                            onClick={() => setFiles([])}
                            title="Réinitialiser"
                        />
                    )}
                </div>

                {files.length > 0 && (
                    <div className="uploaded-files">
                        <ul>
                            {files.map((file, index) => (
                                <li key={index} className="file-item">
                                    {file.name}
                                    <FaTimes
                                        className="file-remove-icon"
                                        onClick={() => handleRemoveFile(file.name)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <hr className='right-divider' />

                <div className='submit-button-container'>
                    <button type="submit" className='submit-button' disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
