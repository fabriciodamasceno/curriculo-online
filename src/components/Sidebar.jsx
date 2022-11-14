import SocialNetworks from './SocialNetworks';

import FotoPerfil from '../img/foto.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={FotoPerfil} alt="Fabrício Damasceno" />
            <p className="title">Desenvolvedor Full Stack</p>
            <SocialNetworks />
            <p>Contato</p>
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar
