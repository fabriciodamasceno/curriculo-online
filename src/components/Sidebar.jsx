import SocialNetworks from './SocialNetworks';

import FotoPerfil from '../img/foto.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={FotoPerfil} alt="Fabrício Damasceno" />
            <p className="title">Desenvolvedor Full Stack</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar
