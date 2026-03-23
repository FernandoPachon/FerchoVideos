import React from 'react'

const BotonWhatsapp = ({ oscuro }) => {
  return (
    <a
      href="https://wa.me/3204049949"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={
          oscuro
            ? "src/assets/imgs/whatsapp--v2.png"
            : "src/assets/imgs/WhatsApp.svg.webp"
        }
        alt="WhatsApp"
        width="50"
        height="50"
      />
    </a>
  )
}

export default BotonWhatsapp