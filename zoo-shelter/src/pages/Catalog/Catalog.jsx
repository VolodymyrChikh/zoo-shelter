import { useState } from 'react'
import styles from './Catalog.module.css'
import Header from '../../components/Header/Header'
import arrowDown from '../../assets/images/arrow-down.svg'
import arrowUp from '../../assets/images/arrow-up.svg'
import AnimalCard from '../../components/AnimalCard/AnimalCard'
import animalImage from '../../assets/images/animal.png'

const Catalog = () => {
    const [openFilter, setOpenFilter] = useState({
        city: false,
        breed: false,
        size: false,
        age: false,
        health: false,
        gender: false,
        institution: false
    });
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const toggleFilter = (filter) => {
        setOpenFilter(prev => ({
            ...prev,
            [filter]: !prev[filter]
        }));
    };

    const toggleMobileFilters = () => {
        setShowMobileFilters(prev => !prev);
    };

    return (
        <div className={styles.mainPageContainer}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.filtersAndCardsContainer}>
                    <div className={styles.filtersSideContainer}>
                        <div className={styles.titleContainer}>
                            <h1 className={styles.title}>Каталог</h1>
                            <button 
                                className={styles.mobileFilterToggle}
                                onClick={toggleMobileFilters}
                            >
                                {showMobileFilters ? 'Сховати фільтри' : 'Показати фільтри'}
                            </button>
                            <div className={styles.filtersContainer} style={{ display: window.innerWidth <= 768 && !showMobileFilters ? 'none' : 'block' }}>
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('city')}>
                                        <h2>МІСТО</h2>
                                        <img 
                                            src={openFilter.city ? arrowUp : arrowDown} 
                                            alt={openFilter.city ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.city && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.selectContainer}>
                                                <select className={styles.citySelect}>
                                                    <option value="" disabled selected>Оберіть місто</option>
                                                    <option value="lviv">Львів</option>
                                                    <option value="kyiv">Київ</option>
                                                    <option value="odesa">Одеса</option>
                                                    <option value="kharkiv">Харків</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('breed')}>
                                        <h2>ПОРОДА</h2>
                                        <img 
                                            src={openFilter.breed ? arrowUp : arrowDown} 
                                            alt={openFilter.breed ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.breed && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.checkboxContainer}>
                                                <label>
                                                    <input type="checkbox" defaultChecked /> Собака
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Кішка
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Гризун
                                                </label>
                                                <label>
                                                    <input type="checkbox" defaultChecked /> Птах
                                                </label>
                                                <label>
                                                    <input type="checkbox" defaultChecked /> Рептилія
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Інше
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('size')}>
                                        <h2>РОЗМІР</h2>
                                        <img 
                                            src={openFilter.size ? arrowUp : arrowDown} 
                                            alt={openFilter.size ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.size && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.checkboxContainer}>
                                                <label>
                                                    <input type="checkbox" defaultChecked /> Маленький
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Середній
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Великий
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('age')}>
                                        <h2>ВІК</h2>
                                        <img 
                                            src={openFilter.age ? arrowUp : arrowDown} 
                                            alt={openFilter.age ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.age && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.checkboxContainer}>
                                                <label>
                                                    <input type="checkbox" /> До 6 місяців
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> 6-12 місяців
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> 1-3 роки
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> 3-7 років
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Старше 7 років
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('health')}>
                                        <h2>СТАН ЗДОРОВ'Я</h2>
                                        <img 
                                            src={openFilter.health ? arrowUp : arrowDown} 
                                            alt={openFilter.health ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.health && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.checkboxContainer}>
                                                <label>
                                                    <input type="checkbox" /> Здоровий
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Потребує лікування
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Потребує особливого догляду
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Стерилізований
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Вакцинований
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('gender')}>
                                        <h2>СТАТЬ</h2>
                                        <img 
                                            src={openFilter.gender ? arrowUp : arrowDown} 
                                            alt={openFilter.gender ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.gender && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.checkboxContainer}>
                                                <label>
                                                    <input type="checkbox" /> Самець
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Самка
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={styles.filterSection}>
                                    <div className={styles.filterHeader} onClick={() => toggleFilter('institution')}>
                                        <h2>ЗАКЛАД</h2>
                                        <img 
                                            src={openFilter.institution ? arrowUp : arrowDown} 
                                            alt={openFilter.institution ? "Collapse" : "Expand"} 
                                            className={styles.arrowIcon} 
                                        />
                                    </div>
                                    {openFilter.institution && (
                                        <div className={styles.filterContent}>
                                            <div className={styles.checkboxContainer}>
                                                <label>
                                                    <input type="checkbox" /> Домівка врятованих тварин
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Барбос
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> ЛКП "Лев"
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Спільнота порятунку тварин
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardsContainer}>
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                        <AnimalCard animalImageLink={animalImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;