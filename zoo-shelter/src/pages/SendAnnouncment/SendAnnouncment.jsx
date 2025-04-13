import React, { useState } from 'react';
import styles from './SendAnnouncment.module.css';
import Header from '../../components/Header/Header';

const SendAnnouncment = () => {
  const [formData, setFormData] = useState({
    photo: null,
    nickname: '',
    description: '',
    age: '',
    size: '',
    gender: '',
    location: '',
    breed: '',
    healthStatus: ''
  });

  const handlePhotoUpload = (e) => {
    // Handle photo upload logic here
    console.log('Photo selected');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Submit logic here
  };

  return (
    <>
        <Header />
        <div className={styles.container}>
        <h1 className={styles.title}>ПОДАТИ ОГОЛОШЕННЯ</h1>
        
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formContent}>
            <div className={styles.leftColumn}>
                <div className={styles.photoUpload}>
                <label htmlFor="photo-upload" className={styles.photoLabel}>
                    <div className={styles.photoPlaceholder}>
                    <span className={styles.plusIcon}>+</span>
                    </div>
                    <span className={styles.uploadText}>Завантажити фото</span>
                    <input 
                    type="file" 
                    id="photo-upload" 
                    onChange={handlePhotoUpload} 
                    className={styles.photoInput}
                    />
                </label>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="nickname" className={styles.label}>Кличка*</label>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    placeholder="Введіть кличка"
                    className={styles.input}
                    value={formData.nickname}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="description" className={styles.label}>Опис*</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Напишіть кілька слів про тварину"
                    className={styles.textarea}
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                />
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.inputGroup}>
                <label htmlFor="age" className={styles.label}>Вік</label>
                <div className={styles.selectWrapper}>
                    <select
                    id="age"
                    name="age"
                    className={styles.select}
                    value={formData.age}
                    onChange={handleInputChange}
                    >
                    <option value="" disabled>Оберіть вік тварини</option>
                    <option value="0-6months">До 6 місяців</option>
                    <option value="6-12months">6-12 місяців</option>
                    <option value="1-3years">1-3 роки</option>
                    <option value="3-7years">3-7 років</option>
                    <option value="7+years">Старше 7 років</option>
                    </select>
                </div>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="size" className={styles.label}>Розмір</label>
                <div className={styles.selectWrapper}>
                    <select
                    id="size"
                    name="size"
                    className={styles.select}
                    value={formData.size}
                    onChange={handleInputChange}
                    >
                    <option value="" disabled>Оберіть розмір тварини</option>
                    <option value="small">Маленький</option>
                    <option value="medium">Середній</option>
                    <option value="large">Великий</option>
                    </select>
                </div>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="gender" className={styles.label}>Стать</label>
                <div className={styles.selectWrapper}>
                    <select
                    id="gender"
                    name="gender"
                    className={styles.select}
                    value={formData.gender}
                    onChange={handleInputChange}
                    >
                    <option value="" disabled>Оберіть стать тварини</option>
                    <option value="male">Самець</option>
                    <option value="female">Самка</option>
                    </select>
                </div>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="location" className={styles.label}>Місто*</label>
                <div className={styles.selectWrapper}>
                    <select
                    id="location"
                    name="location"
                    className={styles.select}
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="" disabled>Оберіть місто</option>
                    <option value="lviv">Львів</option>
                    <option value="kyiv">Київ</option>
                    <option value="odesa">Одеса</option>
                    <option value="kharkiv">Харків</option>
                    </select>
                </div>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="breed" className={styles.label}>Порода*</label>
                <div className={styles.selectWrapper}>
                    <select
                    id="breed"
                    name="breed"
                    className={styles.select}
                    value={formData.breed}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="" disabled>Оберіть породу тварини</option>
                    <option value="dog">Собака</option>
                    <option value="cat">Кішка</option>
                    <option value="rodent">Гризун</option>
                    <option value="bird">Птах</option>
                    <option value="reptile">Рептилія</option>
                    <option value="other">Інше</option>
                    </select>
                </div>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="healthStatus" className={styles.label}>Стан здоров'я</label>
                <div className={styles.selectWrapper}>
                    <select
                    id="healthStatus"
                    name="healthStatus"
                    className={styles.select}
                    value={formData.healthStatus}
                    onChange={handleInputChange}
                    >
                    <option value="" disabled>Оберіть стан здоров'я</option>
                    <option value="healthy">Здоровий</option>
                    <option value="needs-treatment">Потребує лікування</option>
                    <option value="needs-special-care">Потребує особливого догляду</option>
                    <option value="sterilized">Стерилізований</option>
                    <option value="vaccinated">Вакцинований</option>
                    </select>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
                Надіслати оголошення
            </button>
            </div>
        </form>
        </div>
    </>
  );
};

export default SendAnnouncment;