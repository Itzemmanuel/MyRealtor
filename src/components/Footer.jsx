import Logo from "../assets/myRealtor-Logo.png"

export default function Footer() {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return(
        <footer className="main-footer">
            <div className="footer-logo-box">
                <img className="footer-logo" src={Logo} alt="Be My Guest Logo" />
            </div>
            <div className="sub-footer">
                <div className="footer-info-container">
                    <div className="footer-navigation">
                        <ul className="footer-list">
                            <li className="footer-item"><a className="footer-link" href="#">
                                Terms & Conditions</a>
                            </li>
                            <li className="footer-item"><a className="footer-link" href="#">Privacy policy</a>
                            </li>
                            <li className="footer-item"><a className="footer-link" href="#">
                                Help</a>
                            </li>
                            <li className="footer-item"><a className="footer-link" href="#">
                                Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-container">
                        <p className="footer-copyright">
                            myRealtor a real estate front-end website for renting houses built by <a className="footer-link" href="https://www.github.com/Itzemmanuel" target="_blank" rel="noreferrer">Emmanuel Phanuel</a> for his own educational purposes and to show as part of his projects in his <a className="footer-link" href="#">Portfolio</a>. Copyright &copy; by Emmanuel Phanuel {currentYear}
                        </p>
                </div>
            </div>
        </footer>
    )
}