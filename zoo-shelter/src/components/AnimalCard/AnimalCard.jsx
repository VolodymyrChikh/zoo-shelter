import styles from "./AnimalCard.module.css";
import PropTypes from 'prop-types';
import takenByImageLogo from '../../assets/images/domivka-logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AnimalCard = (props) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(props.isLiked || false);

    const handleMoreClick = () => {
        // Navigate to the animal details page with the animal's ID
        // Using a default ID of 1 for now, ideally would use props.animalId
        navigate(`/animal/${props.animalId || 1}`);
    };

    const handleLikeClick = () => {
        // Toggle the liked state
        setIsLiked(!isLiked);
        console.log('Like button clicked!');
    }

    return (
        <div className={styles.animalCardContainer}>
            <div className={styles.card}>
                <div className={styles.cardInContainer}>
                    <div className={styles.likeAndImageContainer}>
                        <div className={styles.imageContainer}>
                            <img src={props.animalImageLink} alt="Animal" className={styles.image} />
                        </div>
                        <div 
                            className={styles.likeContainer} 
                            onClick={handleLikeClick}
                            style={{ cursor: 'pointer' }}
                        >
                            <div 
                                className={styles.likeBackground}
                                style={{ backgroundColor: isLiked ? 'rgb(42, 128, 107, 1)' : '' }}
                            ></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
                                <path style={{fill: isLiked ? 'rgba(42, 128, 107, 1)' : ''}}
                                 d="M24.9852 3.01477C24.3468 2.37603 23.5887 1.86933 22.7544 1.52363C21.9201 1.17793 21.0258 0.999992 20.1227 0.999992C19.2196 0.999992 18.3253 1.17793 17.491 1.52363C16.6567 1.86933 15.8987 2.37603 15.2602 3.01477L13.9352 4.33977L12.6102 3.01477C11.3206 1.72516 9.5715 1.00066 7.74771 1.00066C5.92392 1.00066 4.17482 1.72516 2.88521 3.01477C1.59559 4.30439 0.871094 6.05348 0.871094 7.87727C0.871094 9.70107 1.59559 11.4502 2.88521 12.7398L4.21021 14.0648L13.9352 23.7898L23.6602 14.0648L24.9852 12.7398C25.624 12.1013 26.1306 11.3433 26.4764 10.509C26.8221 9.67464 27 8.78038 27 7.87727C27 6.97416 26.8221 6.0799 26.4764 5.24558C26.1306 4.41126 25.624 3.65322 24.9852 3.01477Z" fill="white" fill-opacity="0.65" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>Laki</h2>
                    </div>
                    <div className={styles.aboutAnimalInfo}>
                        <ul className={styles.aboutAnimalInfoFirstRow}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                    <path d="M4.88889 1V4.4M11.1111 1V4.4M1 7.8H15M4.88889 11.2H4.89667M8 11.2H8.00778M11.1111 11.2H11.1189M4.88889 14.6H4.89667M8 14.6H8.00778M11.1111 14.6H11.1189M2.55556 2.7H13.4444C14.3036 2.7 15 3.46112 15 4.4V16.3C15 17.2389 14.3036 18 13.4444 18H2.55556C1.69645 18 1 17.2389 1 16.3V4.4C1 3.46112 1.69645 2.7 2.55556 2.7Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className={styles.aboutAnimalInfoFirstRowText}> 3 місяці</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                                    <path d="M6 11.7368V18M6 11.7368C8.76142 11.7368 11 9.33332 11 6.36842C11 3.40352 8.76142 1 6 1C3.23858 1 1 3.40352 1 6.36842C1 9.33332 3.23858 11.7368 6 11.7368ZM3.5 15.3158H8.5" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                        
                                <span className={styles.aboutAnimalInfoFirstRowText}> Самка</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <g clip-path="url(#clip0_69_2080)">
                                        <path d="M7.79169 4.25001C8.5741 4.25001 9.20836 3.61574 9.20836 2.83334C9.20836 2.05094 8.5741 1.41667 7.79169 1.41667C7.00929 1.41667 6.37503 2.05094 6.37503 2.83334C6.37503 3.61574 7.00929 4.25001 7.79169 4.25001Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.75 7.08334C13.5324 7.08334 14.1667 6.44908 14.1667 5.66667C14.1667 4.88427 13.5324 4.25001 12.75 4.25001C11.9676 4.25001 11.3334 4.88427 11.3334 5.66667C11.3334 6.44908 11.9676 7.08334 12.75 7.08334Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.1667 12.75C14.9491 12.75 15.5834 12.1157 15.5834 11.3333C15.5834 10.5509 14.9491 9.91667 14.1667 9.91667C13.3843 9.91667 12.75 10.5509 12.75 11.3333C12.75 12.1157 13.3843 12.75 14.1667 12.75Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.37503 7.08334C6.84012 7.08334 7.30067 7.17495 7.73036 7.35293C8.16006 7.53092 8.55049 7.79179 8.87936 8.12067C9.20824 8.44954 9.46911 8.83997 9.6471 9.26967C9.82509 9.69936 9.91669 10.1599 9.91669 10.625V13.1042C9.9165 13.6967 9.70412 14.2695 9.31802 14.7189C8.93193 15.1683 8.39764 15.4646 7.81194 15.5541C7.22625 15.6436 6.62787 15.5203 6.12519 15.2067C5.62252 14.8931 5.24879 14.4098 5.07169 13.8444C4.76947 12.8692 4.13197 12.2306 3.15919 11.9283C2.59407 11.7513 2.11098 11.3779 1.79732 10.8756C1.48367 10.3733 1.36018 9.7753 1.4492 9.18984C1.53821 8.60437 1.83386 8.07011 2.28263 7.68373C2.73141 7.29735 3.30367 7.08437 3.89586 7.08334H6.37503Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_69_2080">
                                        <rect width="17" height="17" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className={styles.aboutAnimalInfoFirstRowText}> Собака</span>
                            </li>
                        </ul>
                        <ul className={styles.aboutAnimalInfoSecondRow}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M2.159 9.5H8.125L8.6 8.55556L10.5 12.8056L12.4 6.19444L13.825 9.5H18.8315M17.15 11.3889C18.5655 10.01 20 8.35722 20 6.19444C20 4.81679 19.4495 3.49556 18.4696 2.52142C17.4898 1.54727 16.1608 1 14.775 1C13.103 1 11.925 1.47222 10.5 2.88889C9.075 1.47222 7.897 1 6.225 1C4.83924 1 3.51024 1.54727 2.53037 2.52142C1.55049 3.49556 1 4.81679 1 6.19444C1 8.36667 2.425 10.0194 3.85 11.3889L10.5 18L17.15 11.3889Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className={styles.aboutAnimalInfoSecondRowText}> Стерилізована</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                                    <path d="M14 7.80009C14 12.0442 9.49956 16.4642 7.98831 17.8294C7.84753 17.9401 7.67615 18 7.5 18C7.32385 18 7.15247 17.9401 7.01169 17.8294C5.50044 16.4642 1 12.0442 1 7.80009C1 5.99659 1.68482 4.26696 2.90381 2.9917C4.12279 1.71644 5.77609 1 7.5 1C9.22391 1 10.8772 1.71644 12.0962 2.9917C13.3152 4.26696 14 5.99659 14 7.80009Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.3501C8.84619 10.3501 9.9375 9.20843 9.9375 7.80009C9.9375 6.39174 8.84619 5.25005 7.5 5.25005C6.15381 5.25005 5.0625 6.39174 5.0625 7.80009C5.0625 9.20843 6.15381 10.3501 7.5 10.3501Z" stroke="#3E3E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className={styles.aboutAnimalInfoSecondRowText}> Львів</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.takenByContainer}>
                        <img src={takenByImageLogo} alt="Domivka" className={styles.takenByImage} />
                        <span className={styles.takenByText}> Притулок "Домівка Врятованих Тварин"</span>
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.button1} onClick={handleMoreClick}>Більше</button>
                <button className={styles.button2}>Задонатити</button>
                <button className={styles.button3}>Удочирити</button>
            </div>
        </div>
    );
}

AnimalCard.propTypes = {
    animalImageLink: PropTypes.string.isRequired,
    animalId: PropTypes.string,
    isLiked: PropTypes.bool
};

export default AnimalCard;