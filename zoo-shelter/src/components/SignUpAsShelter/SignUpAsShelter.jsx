import styles from './SignUpAsShelter.module.css';
import Header from "../Header/Header";
import { useNavigate } from 'react-router-dom';

const SignUpAsShelter = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/catalog');
    };

    return (
        <>
            <Header />
            <div className={styles.signUpAsShelterContainer}>
                <h1 className={styles.title}>РЕЄСТРАЦІЯ ПРИТУЛКУ</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="shelterName">Назва закладу*</label>
                            <input type="text" id="shelterName" placeholder="Введіть назву" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="address">Адреса*</label>
                            <input type="text" id="address" placeholder="Введіть адресу" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Електронна пошта*</label>
                            <input type="email" id="email" placeholder="Введіть електронну пошту" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="website">Веб-сайт</label>
                            <input type="text" id="website" placeholder="Посилання на веб-сайт, якщо такий є" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Номер телефону*</label>
                            <input type="text" id="phone" placeholder="Введіть номер телефону" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Пароль*</label>
                            <input type="password" id="password" placeholder="Введіть пароль" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="shelterType">Тип закладу*</label>
                            <select id="shelterType">
                                <option value="" disabled selected>Оберіть тип закладу</option>
                                <option value="shelter">Притулок</option>
                                <option value="rescue">Рятувальна організація</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="confirmPassword">Підтвердити пароль*</label>
                            <input type="password" id="confirmPassword" placeholder="Введіть пароль повторно" />
                        </div>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="agreement" />
                        <label htmlFor="agreement">Я підтверджую, що ознайомлений(-а) з Політикою конфіденційності та даю згоду на збирання, зберігання та обробку моїх персональних даних відповідно до чинного законодавства.</label>
                    </div>
                    <button type="submit" className={styles.submitButton}>Зареєструватись</button>
                </form>
            </div>
        </>
    );
}

export default SignUpAsShelter;