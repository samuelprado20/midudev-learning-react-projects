import { Link } from '../Link.jsx'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='This is fine dog meme' />
      </div>
      <Link to='/'>Go to homepage</Link>
    </>
  )
}
