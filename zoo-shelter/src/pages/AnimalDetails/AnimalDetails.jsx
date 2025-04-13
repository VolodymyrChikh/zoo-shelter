import React from 'react';
import styles from './AnimalDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import animalImage from '../../assets/images/animal.png'
import takenByImageLogo from '../../assets/images/domivka-logo.png';

const AnimalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // This would typically come from an API call using the ID
  const animalData = {
    id: id || '1',
    name: 'ЛАКІ',
    age: '3 місяці',
    gender: 'Самка',
    type: 'Собака',
    healthStatus: 'Стерилізована',
    location: 'Львів',
    shelter: 'Притулок "Домівка Врятованих Тварин"',
    description: 'Привіт! Мене звати Лакіса — я маленька дівчинка з яскравими очима, пухнастими вушками і гарною вдачою! Мені всього 3 місяці, але я вже чітко знаю про своє майбутнє! Я дуже грайлива, люблю бігати за мячиком і жвиндіти, голосніше псів! Тобі не буде зі мною нудно! В мене здорове серденько, хороший апетит і дивине бажання дружити! Зараз я перебуваю в притулку, але щодня мріюсь у двері, чекаючи саме свою родину. Можливо це ти? Візьми мене додому — я подарую тобі всю свою любов, довіру і хвостик, який завжди віддячить тобі.'
  };

  const handleDonate = () => {
    // Handle donation logic
    console.log('Donate to', animalData.name);
  };

  const handleAdopt = () => {
    // Handle adoption logic
    console.log('Adopt', animalData.name);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.animalDetailsCard}>
          <div className={styles.contentContainer}>
            <div className={styles.galleryContainer}>
              <div className={styles.mainImageContainer}>
                <img 
                  src={animalImage}
                  alt={animalData.name} 
                  className={styles.mainImage} 
                />
              </div>
              <div className={styles.thumbnailsContainer}>
                <img 
                  src={animalImage} 
                  alt={animalData.name} 
                  className={styles.thumbnailImage} 
                />
                <img 
                  src={animalImage} 
                  alt={animalData.name} 
                  className={styles.thumbnailImage} 
                />
              </div>
            </div>
            
            <div className={styles.infoContainer}>
              <h1 className={styles.animalName}>{animalData.name}</h1>
              
              <div className={styles.basicInfoContainer}>
                <div className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                    <path d="M4.88889 1V4.4M11.1111 1V4.4M1 7.8H15M4.88889 11.2H4.89667M8 11.2H8.00778M11.1111 11.2H11.1189M4.88889 14.6H4.89667M8 14.6H8.00778M11.1111 14.6H11.1189M2.55556 2.7H13.4444C14.3036 2.7 15 3.46112 15 4.4V16.3C15 17.2389 14.3036 18 13.4444 18H2.55556C1.69645 18 1 17.2389 1 16.3V4.4C1 3.46112 1.69645 2.7 2.55556 2.7Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{animalData.age}</span>
                </div>
                
                <div className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                    <path d="M6 11.7368V18M6 11.7368C8.76142 11.7368 11 9.33332 11 6.36842C11 3.40352 8.76142 1 6 1C3.23858 1 1 3.40352 1 6.36842C1 9.33332 3.23858 11.7368 6 11.7368ZM3.5 15.3158H8.5" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{animalData.gender}</span>
                </div>
                
                <div className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_69_2080)">
                      <path d="M7.79169 4.25001C8.5741 4.25001 9.20836 3.61574 9.20836 2.83334C9.20836 2.05094 8.5741 1.41667 7.79169 1.41667C7.00929 1.41667 6.37503 2.05094 6.37503 2.83334C6.37503 3.61574 7.00929 4.25001 7.79169 4.25001Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.75 7.08334C13.5324 7.08334 14.1667 6.44908 14.1667 5.66667C14.1667 4.88427 13.5324 4.25001 12.75 4.25001C11.9676 4.25001 11.3334 4.88427 11.3334 5.66667C11.3334 6.44908 11.9676 7.08334 12.75 7.08334Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.1667 12.75C14.9491 12.75 15.5834 12.1157 15.5834 11.3333C15.5834 10.5509 14.9491 9.91667 14.1667 9.91667C13.3843 9.91667 12.75 10.5509 12.75 11.3333C12.75 12.1157 13.3843 12.75 14.1667 12.75Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.37503 7.08334C6.84012 7.08334 7.30067 7.17495 7.73036 7.35293C8.16006 7.53092 8.55049 7.79179 8.87936 8.12067C9.20824 8.44954 9.46911 8.83997 9.6471 9.26967C9.82509 9.69936 9.91669 10.1599 9.91669 10.625V13.1042C9.9165 13.6967 9.70412 14.2695 9.31802 14.7189C8.93193 15.1683 8.39764 15.4646 7.81194 15.5541C7.22625 15.6436 6.62787 15.5203 6.12519 15.2067C5.62252 14.8931 5.24879 14.4098 5.07169 13.8444C4.76947 12.8692 4.13197 12.2306 3.15919 11.9283C2.59407 11.7513 2.11098 11.3779 1.79732 10.8756C1.48367 10.3733 1.36018 9.7753 1.4492 9.18984C1.53821 8.60437 1.83386 8.07011 2.28263 7.68373C2.73141 7.29735 3.30367 7.08437 3.89586 7.08334H6.37503Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_69_2080">
                        <rect width="17" height="17" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{animalData.type}</span>
                </div>
              </div>
              
              <div className={styles.additionalInfoContainer}>
                <div className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                    <path d="M2.159 9.5H8.125L8.6 8.55556L10.5 12.8056L12.4 6.19444L13.825 9.5H18.8315M17.15 11.3889C18.5655 10.01 20 8.35722 20 6.19444C20 4.81679 19.4495 3.49556 18.4696 2.52142C17.4898 1.54727 16.1608 1 14.775 1C13.103 1 11.925 1.47222 10.5 2.88889C9.075 1.47222 7.897 1 6.225 1C4.83924 1 3.51024 1.54727 2.53037 2.52142C1.55049 3.49556 1 4.81679 1 6.19444C1 8.36667 2.425 10.0194 3.85 11.3889L10.5 18L17.15 11.3889Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{animalData.healthStatus}</span>
                </div>
                
                <div className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                    <path d="M14 7.80009C14 12.0442 9.49956 16.4642 7.98831 17.8294C7.84753 17.9401 7.67615 18 7.5 18C7.32385 18 7.15247 17.9401 7.01169 17.8294C5.50044 16.4642 1 12.0442 1 7.80009C1 5.99659 1.68482 4.26696 2.90381 2.9917C4.12279 1.71644 5.77609 1 7.5 1C9.22391 1 10.8772 1.71644 12.0962 2.9917C13.3152 4.26696 14 5.99659 14 7.80009Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10.3501C8.84619 10.3501 9.9375 9.20843 9.9375 7.80009C9.9375 6.39174 8.84619 5.25005 7.5 5.25005C6.15381 5.25005 5.0625 6.39174 5.0625 7.80009C5.0625 9.20843 6.15381 10.3501 7.5 10.3501Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{animalData.location}</span>
                </div>
              </div>
                            
              <div className={styles.descriptionContainer}>
                <p className={styles.description}>
                  {animalData.description.split('\n').map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className={styles.shelterContainer}>
                    <img src={takenByImageLogo} alt="Domivka" className={styles.takenByImage} />
                    <span>{animalData.shelter}</span>
              </div>

              
              <div className={styles.actionsContainer}>
                <button className={styles.donateBtn} onClick={handleDonate}>
                  Задонатити
                </button>
                <button className={styles.adoptBtn} onClick={handleAdopt}>
                  Удочирити
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.otherAnimalsSection}>
          <h2 className={styles.sectionTitle}>ІНШІ ТВАРИНКИ</h2>
          <div className={styles.otherAnimalsContainer}>
            {/* Other animals would be dynamically generated here */}
            {[1, 2, 3, 4].map((item) => (
                <AnimalCard className={styles.animalCard} onClick={() => navigate(`/animal/${item}`)} animalImageLink={animalImage} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalDetails;