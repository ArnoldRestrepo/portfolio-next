
import { FC } from 'react';
import Link from "next/link"

const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-5 py-4 flex items-center justify-between">
      <img className="rounded-lg inline flex-initial" width="80" src="/assets/images/logotipo-arnold-restrepo.svg" alt="Logotipo Arnold Restrepo" />
      <ul className="flex items-center justify-center">
        <li className="px-3">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="px-3">
          <Link href="/blog">
            Bio
          </Link>
        </li>
        <li className="px-3">
          <Link href="/blog">
            Skills
          </Link>
        </li>
        <li className="px-3">
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li className="px-3">
          <Link href="/projects">
            Proyectos
          </Link>
        </li>
      </ul>
      <form className="flex flex-col w-30items-center px-4">
        <label htmlFor="Idioma">Idioma:</label>
        <select name="Idioma" className="form-select px-5 py-1 rounded-md">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </form>
      <a href="http://bit.ly/cv-arnoldrestrepo" className="bg-blue-600 text-white py-3 px-4 rounded-md flex-initial" target="_blank">Descargar CV</a>
    </nav>
  )
}

export default Navbar;