import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", link: "https://www.linkedin.com/in/fabriciodamasceno/", icon: <FaLinkedinIn /> },
    { name: "github", link: "https://github.com/fabriciodamasceno", icon: <FaGithub /> },
    { name: "telegram", link: "https://t.me/FabricioDamasceno",  icon: <FaTelegram /> },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" >
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks
