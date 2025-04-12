import styles from './Header.module.css'
import chatImage from '../../assets/images/chat.jpg'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <h1 className={styles.headerTitle}>
                    <span className={styles.zoo}>зоо</span>
                    <br/>
                    <span className={styles.domivka}>{"Домівка".toUpperCase()}</span>
                </h1>
                <div className={styles.headerNavLinks}>
                    <ul className={styles.headerNavLinksText}>
                        <li><a href="#">Головна</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Подати оголошення</a></li>
                        <li><a href="#">Форма запиту</a></li>
                    </ul>
                    <ul className={styles.headerNavLinksIcons}>
                        <li><a id='find' href="#">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="#3E3E3E" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M26.2505 26.2505L20.813 20.813" stroke="#3E3E3E" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li><a id='ask' href="#">
                                <img src={chatImage} alt="chat" className={styles.chatIcon} />
                            </a>
                        </li>
                        <li><a id='like' href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M26.05 5.76249C25.4116 5.12375 24.6535 4.61705 23.8192 4.27135C22.9849 3.92565 22.0906 3.74771 21.1875 3.74771C20.2844 3.74771 19.3902 3.92565 18.5558 4.27135C17.7215 4.61705 16.9635 5.12375 16.325 5.76249L15 7.08749L13.675 5.76249C12.3854 4.47288 10.6363 3.74838 8.81253 3.74838C6.98874 3.74838 5.23964 4.47288 3.95003 5.76249C2.66041 7.05211 1.93591 8.8012 1.93591 10.625C1.93591 12.4488 2.66041 14.1979 3.95003 15.4875L5.27503 16.8125L15 26.5375L24.725 16.8125L26.05 15.4875C26.6888 14.849 27.1955 14.091 27.5412 13.2567C27.8869 12.4224 28.0648 11.5281 28.0648 10.625C28.0648 9.72188 27.8869 8.82762 27.5412 7.9933C27.1955 7.15897 26.6888 6.40094 26.05 5.76249Z" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a></li>
                        <li><a id='profile' href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
    }

    export default Header;