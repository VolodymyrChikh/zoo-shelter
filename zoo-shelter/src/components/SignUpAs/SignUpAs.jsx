import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./SignUpAs.module.css";
import Header from "../Header/Header";

const SignUpAs = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();

    const handleNext = () => {
        if (selectedRole === 'shelter') {
            navigate('/signup-as/shelter');
        } else if (selectedRole === 'volunteer') {
            navigate('/signup-as/volunteer');
        } else if (selectedRole === 'user') {
            navigate('/signup-as/user');
        }
    };

    return (
        <>
            <Header />
            <div className={styles.signUpAsContainer}>
                <div className={styles.signUpAsTitleContainer}>
                    <h2 className={styles.signUpAsTitle}>Зареєструватися як</h2>
                </div>
                <div className={styles.signUpAsButtonsAndNextContainer}>
                    <div className={styles.signUpAsButtonsContainer}>
                        <div className={styles.signUpAsButtonContainer}>
                            <button 
                                className={styles.signUpAsButton} 
                                onClick={() => setSelectedRole('shelter')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="64" viewBox="0 0 68 64" fill="none">
                                    <path d="M62.3337 60.6667H5.66699C4.50533 60.6667 3.54199 59.76 3.54199 58.6667C3.54199 57.5733 4.50533 56.6667 5.66699 56.6667H62.3337C63.4953 56.6667 64.4587 57.5733 64.4587 58.6667C64.4587 59.76 63.4953 60.6667 62.3337 60.6667Z" fill="#292D32"/>
                                    <path d="M10.4844 58.6666H6.23438L6.37604 26.5865C6.37604 24.3199 7.48104 22.2133 9.37938 20.8266L29.2127 6.29325C32.0177 4.23992 35.956 4.23992 38.7894 6.29325L58.6227 20.7999C60.4927 22.1866 61.626 24.3465 61.626 26.5865V58.6666H57.376V26.6132C57.376 25.5999 56.866 24.6133 56.016 23.9733L36.1827 9.46659C34.9077 8.53326 33.1227 8.53326 31.8194 9.46659L11.986 24C11.136 24.6133 10.626 25.5999 10.626 26.6132L10.4844 58.6666Z" fill="#292D32"/>
                                    <path d="M41.0837 60.6667H26.917C25.7553 60.6667 24.792 59.76 24.792 58.6667V49.3333C24.792 46.0267 27.6537 43.3333 31.167 43.3333H36.8337C40.347 43.3333 43.2087 46.0267 43.2087 49.3333V58.6667C43.2087 59.76 42.2453 60.6667 41.0837 60.6667ZM29.042 56.6667H38.9587V49.3333C38.9587 48.24 37.9953 47.3333 36.8337 47.3333H31.167C30.0053 47.3333 29.042 48.24 29.042 49.3333V56.6667Z" fill="#292D32"/>
                                    <path d="M26.917 38.6667H21.2503C18.5303 38.6667 16.292 36.56 16.292 34V30C16.292 27.44 18.5303 25.3333 21.2503 25.3333H26.917C29.637 25.3333 31.8753 27.44 31.8753 30V34C31.8753 36.56 29.637 38.6667 26.917 38.6667ZM21.2503 29.3333C20.8537 29.3333 20.542 29.6267 20.542 30V34C20.542 34.3733 20.8537 34.6667 21.2503 34.6667H26.917C27.3137 34.6667 27.6253 34.3733 27.6253 34V30C27.6253 29.6267 27.3137 29.3333 26.917 29.3333H21.2503Z" fill="#292D32"/>
                                    <path d="M46.75 38.6667H41.0833C38.3633 38.6667 36.125 36.56 36.125 34V30C36.125 27.44 38.3633 25.3333 41.0833 25.3333H46.75C49.47 25.3333 51.7083 27.44 51.7083 30V34C51.7083 36.56 49.47 38.6667 46.75 38.6667ZM41.0833 29.3333C40.6867 29.3333 40.375 29.6267 40.375 30V34C40.375 34.3733 40.6867 34.6667 41.0833 34.6667H46.75C47.1467 34.6667 47.4583 34.3733 47.4583 34V30C47.4583 29.6267 47.1467 29.3333 46.75 29.3333H41.0833Z" fill="#292D32"/>
                                    <path d="M53.8339 20.6667C52.6722 20.6667 51.7089 19.7867 51.7089 18.6934L51.6522 12.6667H41.3105C40.1489 12.6667 39.1855 11.76 39.1855 10.6667C39.1855 9.57334 40.1489 8.66667 41.3105 8.66667H53.7772C54.9389 8.66667 55.9022 9.54665 55.9022 10.64L55.9872 18.64C55.9589 19.76 55.0239 20.6667 53.8339 20.6667C53.8622 20.6667 53.8339 20.6667 53.8339 20.6667Z" fill="#292D32"/>
                                </svg>
                            </button>
                            <span className={styles.signUpAsButtonText}>Притулок</span>
                        </div>
                        <div className={styles.signUpAsButtonContainer}>
                            <button className={styles.signUpAsButton} onClick={() => setSelectedRole('volunteer')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="70" viewBox="0 0 72 70" fill="none">
                                    <path d="M71 58.5385L61.0559 50.1169C59.5118 48.8092 57.4118 48.0769 55.2294 48.0769H52.4706L48.3529 49.8205H40.1176C37.8529 49.8205 36 51.3897 36 53.3077V56.7949" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M58.6469 69L54.5292 65.5128H29.8234L11.2939 49.8205L14.5263 49.1405C17.6763 48.478 21.0322 49.0882 23.5645 50.8144L31.8822 56.7949H48.3528" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 11.4615L10.9441 19.8831C12.4882 21.1908 14.5882 21.9231 16.7706 21.9231H19.5294L23.6471 20.1795H31.8824C34.1471 20.1795 36 18.6102 36 16.6923V13.2051" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.3525 1L17.4702 4.48718H42.1761L60.7055 20.1795L57.4731 20.8595C54.3231 21.522 50.9672 20.9118 48.4349 19.1856L40.1172 13.2051H23.6467" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M36.0004 28.4092C37.2151 26.439 39.7886 25.1487 42.6504 25.4626C45.9445 25.8113 48.3533 28.322 48.3533 31.1292C48.3533 34.1631 46.9328 37.0749 44.4004 39.2195L36.0004 46.3333L27.6004 39.2195C25.068 37.0749 23.6475 34.1631 23.6475 31.1292C23.6475 28.1651 26.3239 25.5846 29.8239 25.4277C32.5004 25.3056 34.868 26.5436 36.0004 28.4267V28.4092Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <span className={styles.signUpAsButtonText}>Волонтер</span>
                        </div>
                        <div className={styles.signUpAsButtonContainer}>
                            <button className={styles.signUpAsButton} onClick={() => setSelectedRole('user')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="64" viewBox="0 0 30 30" fill="none">
                                    <path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <span className={styles.signUpAsButtonText}>Користувач</span>
                        </div>
                    </div>
                    <div className={styles.nextButtonContainer}>
                        <button className={styles.nextButton} onClick={handleNext}>Далі</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SignUpAs;