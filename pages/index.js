import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;