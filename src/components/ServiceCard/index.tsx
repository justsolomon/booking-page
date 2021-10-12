import styles from './serviceCard.module.scss';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  updateSelected: () => void;
}

const ServiceCard = ({
  title,
  icon,
  selected,
  updateSelected,
}: ServiceCardProps) => {
  return (
    <button
      className={`${styles['service-card']} ${
        selected ? styles['service-card--selected'] : ''
      }`}
      onClick={updateSelected}
    >
      <span>{title}</span>
      {icon}
    </button>
  );
};

export default ServiceCard;
