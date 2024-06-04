const Menu = () => {
    return ( 
        <nav>
            <ul className="font-subtitle text-lg text-white-one space-y-4 lg:flex lg:items-center lg:text-primary lg:dark:text-white-one lg:space-y-0 lg:gap-8">
                <li>
                    <a className="block px-4 py-2 w-full h-full hover:underline" href="#about">Sobre</a>
                </li>
                <li>
                    <a className="block px-4 py-2 w-full h-full hover:underline" href="#team">Equipe</a>
                </li>
                <li>
                    <a className="block px-4 py-2 w-full h-full hover:underline" href="#benefits">Vantagens</a>
                </li>
                <li>
                    <a className="block px-4 py-2 w-full h-full hover:underline" href="#participants">Participantes</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Menu;