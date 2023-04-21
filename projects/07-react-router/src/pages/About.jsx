import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'Hola! esto es un clon de React Router'
  },
  en: {
    title: 'About us',
    button: 'Go to homepage',
    description: 'Hey this is a React Router Clone'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://cdn.pixabay.com/photo/2016/10/11/16/14/capybara-1732020_1280.jpg' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
