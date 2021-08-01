import './footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_container_content">
                    <p>
                        Это тестовый сайт
                        <br />
                        Связаться с разработчиком:
                    </p>
                    <div className="footer_container_content_icons">
                        <a
                            rel="noreferrer"
                            href="https://github.com/NereonNeo?tab=repositories"
                            target="_blank"
                        >
                            <GitHubIcon fontSize="large" />
                        </a>
                        <a
                            rel="noreferrer"
                            href="https://t.me/JOYCE_2105"
                            target="_blank"
                        >
                            <TelegramIcon fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
