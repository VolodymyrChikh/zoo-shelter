import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ShelterProfile.module.css';
import Header from '../../components/Header/Header';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import animalImage from '../../assets/images/animal.png';
import profileImage from '../../assets/images/domivka-img.png';

const ShelterProfile = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const volunteerData = {
    name: 'Домівка Врятованих Тварин',
    role: 'Притулок',
    location: 'Львів',
    imageUrl: profileImage,
    description: `Мене звати Іван, я волонтерю з Києва. З перших днів повномасштабної війни моя місія — допомогати безпритульним тваринам шукати й для них омріяних домівок,
     евакувати поранених тварин із прифронтових територій і забезпечую кормами та медикаментами тих, хто цього найбільше потребує. За час моєї діяльності мені вдалося 
     допомогти десяткам собак і котів знайти нові родини або потрапити до безпечного притулку. Я співпрацюю з благодійними організаціями, притулками та клініками.`
  };

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleCreateAnnouncement = () => {
    navigate('/send-announcment');
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImageContainer}>
            <img src={volunteerData.imageUrl} alt={volunteerData.name} className={styles.profileImage} />
          </div>
  
          <div className={styles.profileInfo}>
            <h1 className={styles.name}>{volunteerData.name}</h1>
            <p className={styles.role}>{volunteerData.role}</p>
            
            <div className={styles.locationAndContact}>
                <div className={styles.location}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                        <path d="M14 7.80009C14 12.0442 9.49956 16.4642 7.98831 17.8294C7.84753 17.9401 7.67615 18 7.5 18C7.32385 18 7.15247 17.9401 7.01169 17.8294C5.50044 16.4642 1 12.0442 1 7.80009C1 5.99659 1.68482 4.26696 2.90381 2.9917C4.12279 1.71644 5.77609 1 7.5 1C9.22391 1 10.8772 1.71644 12.0962 2.9917C13.3152 4.26696 14 5.99659 14 7.80009Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 10.3501C8.84619 10.3501 9.9375 9.20843 9.9375 7.80009C9.9375 6.39174 8.84619 5.25005 7.5 5.25005C6.15381 5.25005 5.0625 6.39174 5.0625 7.80009C5.0625 9.20843 6.15381 10.3501 7.5 10.3501Z" stroke="#3E3E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
              <span>{volunteerData.location}</span>
              </div>
              <div className={styles.contactIcons}>
              <a href="mailto:volunteer@example.com" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="tel:+380123456789" aria-label="Phone">
                <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8329 20.7294C21.7216 20.9845 21.5585 21.2136 21.3546 21.4019C21.1507 21.5901 20.9105 21.7335 20.6482 21.8227C20.3858 21.9119 20.1069 21.9451 19.83 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.17001C2.09501 3.89388 2.12788 3.6157 2.2165 3.35424C2.30513 3.09278 2.44757 2.85352 2.63476 2.65007C2.82196 2.44662 3.04981 2.28354 3.30379 2.17201C3.55778 2.06048 3.83234 2.00286 4.11 2.00001H7.11C7.59531 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04208 3.23945 9.11 3.72001C9.23662 4.68007 9.47144 5.62273 9.81 6.53001C9.94455 6.88793 9.97366 7.27692 9.89391 7.65089C9.81415 8.02485 9.62886 8.36812 9.36 8.64001L8.09 9.91001C9.51356 12.4136 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            </div>
                        
            <p className={styles.description}>{volunteerData.description}</p>
            
            <div className={styles.actionButtons}>
              <button className={styles.writeButton}>
                Написати
              </button>
              <button className={styles.donateButton}>
                Задонатити
              </button>
              <button className={styles.askFormButton} onClick={() => navigate('/ask-form')}>
                Форма запиту
              </button>
              <button className={styles.giveAnimalButton} onClick={() => navigate('/send-announcment')}>
                {isMobile ? "Передати тварину" : "Передати тваринку"}
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.otherAnimalsSection}>
          <h2 className={styles.sectionTitle}>ОГОЛОШЕННЯ</h2>
          <div className={styles.otherAnimalsContainer}>
            {/* Other animals would be dynamically generated here */}
            {[1, 2, 3, 4].map((item) => (
                <AnimalCard 
                  key={item}
                  className={styles.animalCard} 
                  onClick={() => navigate(`/animal/${item}`)} 
                  animalImageLink={animalImage} 
                />
            ))}
          </div>
          {isMobile && 
            <button 
              onClick={() => navigate('/catalog')} 
              className={styles.showMoreButton}
              style={{
                display: 'block',
                margin: '1.5rem auto 0',
                padding: '0.6rem 1rem',
                background: 'transparent',
                border: '1px solid #2A806B',
                color: '#2A806B',
                borderRadius: '5px',
                fontWeight: '500'
              }}
            >
              Показати більше
            </button>
          }
        </div>
      </div>
    </>
  );
};

export default ShelterProfile;