import Button from 'components/global/Button';
import { ReactComponent as BackArrow } from 'assets/vectors/arrow-back.svg';
import { ReactComponent as InfoIcon } from 'assets/vectors/info.svg';
import { ReactComponent as LocationPin } from 'assets/vectors/location-pin.svg';
import { ReactComponent as DateIcon } from 'assets/vectors/calendar.svg';
import styles from './homeContent.module.scss';
import ContentCard from 'components/ContentCard';
import ServiceCard from 'components/ServiceCard';
import { useState } from 'react';
import TradeSelect from 'components/TradeSelect';
import Input from 'components/global/Input';
import Select from 'components/global/Select';
import Toggle from 'components/global/Toggle';
import CargoDetailsSelect from 'components/CargoDetailsSelect';
import LabelledInput from 'components/global/LabelledInput';
import AdditionalService from 'components/AdditionalService';
import { additionalServices, services } from 'utils/home';

const HomeContent = () => {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className={styles['home']}>
      <Button variant="icon">
        <BackArrow />
      </Button>
      <div className={styles['home__content']}>
        <h1 className={styles['home__header']}>New Booking</h1>
        <p className={styles['home__description']}>
          Fill in the information below to get a quote or create a new booking
        </p>

        <ContentCard headerTitle="Select a service">
          <div className={styles['home__service-list']}>
            {services.map((service, index) => (
              <ServiceCard
                {...service}
                key={index}
                selected={selectedService === service.title}
                updateSelected={() => setSelectedService(service.title)}
              />
            ))}
          </div>
        </ContentCard>

        <ContentCard>
          <Button variant="icon">
            <InfoIcon />
          </Button>
          <div
            className={`${styles['home__input-list']} ${styles['home__input-list--first']}`}
          >
            <TradeSelect />
            <div>
              <Input
                placeholder="City or port"
                leftIcon={
                  <>
                    <LocationPin />
                    <span>From</span>
                  </>
                }
              />
              <Input
                placeholder="City or port"
                leftIcon={
                  <>
                    <LocationPin /> <span>To</span>
                  </>
                }
              />
            </div>
          </div>
          <div className={styles['home__input-list']}>
            <Input placeholder="Ready Date" leftIcon={<DateIcon />} />
            <Select>
              <option value="Incoterms">Incoterms</option>
            </Select>
            <Input placeholder="Total Cargo Value" />
          </div>
        </ContentCard>

        <ContentCard
          headerTitle="Cargo Details"
          headerChildren={
            <div className={styles['home__cargo-details']}>
              <Toggle label="Select Dangerous Cargo option" />
              <p className={styles['home__cargo-details__description']}>
                <span>Dangerous Cargo</span> (ex. Chemicals, Battery)
              </p>
            </div>
          }
        >
          <CargoDetailsSelect />

          <div className={styles['home__cargo-details__input-list']}>
            <LabelledInput type="number" metric="cbm" label="Total Volume" />
            <LabelledInput type="number" metric="Kg" label="Total Weight" />
          </div>
        </ContentCard>

        <ContentCard headerTitle="Additional Services">
          <div className={styles['home__additional-services']}>
            {additionalServices.map((service, index) => (
              <AdditionalService {...service} key={index} />
            ))}
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default HomeContent;
