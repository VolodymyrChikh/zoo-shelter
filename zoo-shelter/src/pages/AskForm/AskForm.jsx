import styles from './AskForm.module.css';
import Header from "../../components/Header/Header";

const AskForm = () => {
    return (
        <>
            <Header />
            <div className={styles.askFormContainer}>
                <h1 className={styles.title}>ФОРМА ЗАПИТУ</h1>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="name">Ваше Ім'я*</label>
                            <input type="text" id="name" placeholder="Введіть ім'я" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="size">Розмір</label>
                            <select id="size">
                                <option value="" disabled selected>Оберіть розмір тваринки</option>
                                <option value="small">Маленький</option>
                                <option value="medium">Середній</option>
                                <option value="large">Великий</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Ваш контактний номер телефону*</label>
                            <input type="text" id="phone" placeholder="Введіть номер телефону" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="age">Вік</label>
                            <select id="age">
                                <option value="" disabled selected>Оберіть вік тваринки</option>
                                <option value="puppy">Щеня</option>
                                <option value="adult">Дорослий</option>
                                <option value="senior">Старший</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.row}>
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
                        <div className={styles.inputContainer}>
                            <label htmlFor="gender">Стать</label>
                            <select id="gender">
                                <option value="" disabled selected>Оберіть стать тваринки</option>
                                <option value="male">Самець</option>
                                <option value="female">Самка</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="breed">Порода*</label>
                            <select id="breed">
                                <option value="" disabled selected>Оберіть породу тваринки</option>
                                <option value="dog">Собака</option>
                                <option value="cat">Кішка</option>
                                <option value="rodent">Гризун</option>
                                <option value="bird">Птах</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="health">Стан здоров'я</label>
                            <select id="health">
                                <option value="" disabled selected>Оберіть стан здоров'я</option>
                                <option value="healthy">Здоровий</option>
                                <option value="needs-care">Потребує догляду</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>Надіслати форму</button>
                </form>
            </div>
        </>
    );
}

export default AskForm;