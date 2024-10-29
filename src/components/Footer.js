import React from 'react'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <a
      href="https://github.com/vpeinado263"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="./github.svg"
        alt="Github icon"
        width={16}
        height={16}
      />
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/victor-peinado1739/?trk=opento_sprofile_details"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/linkedin.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
      Linkedin
    </a>
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/file.svg"
        alt="Globe icon"
        width={16}
        height={16}
      />
      Descargar CV ↓
    </a>
  </footer>
  )
}

export default Footer
