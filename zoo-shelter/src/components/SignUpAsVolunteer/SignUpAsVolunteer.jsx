import styles from './SignUpAsVolunteer.module.css';
import Header from "../Header/Header";
import { useNavigate } from 'react-router-dom';

const SignUpAsVolunteer = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/catalog');
    };

    return (
        <>
            <Header />
            <div className={styles.signUpAsVolunteerContainer}>
                <h1 className={styles.title}>РЕЄСТРАЦІЯ ВОЛОНТЕРА</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="fullName">Ім'я та прізвище*</label>
                            <input type="text" id="fullName" placeholder="Введіть ім'я та прізвище" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="city">Місто*</label>
                            <select id="city">
                                <option value="" disabled selected>Оберіть місто</option>
                                <option value="lviv">Львів</option>
                                <option value="kyiv">Київ</option>
                                <option value="odesa">Одеса</option>
                                <option value="kharkiv">Харків</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Електронна пошта*</label>
                            <input type="email" id="email" placeholder="Введіть електронну пошту" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Пароль*</label>
                            <input type="password" id="password" placeholder="Введіть пароль" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Номер телефону*</label>
                            <input type="text" id="phone" placeholder="Введіть номер телефону" />
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

export default SignUpAsVolunteer;