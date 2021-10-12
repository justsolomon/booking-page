import styles from './contentCard.module.scss';

interface ContentCardProps {
  headerTitle?: string;
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
}

const ContentCard = ({
  headerTitle,
  headerChildren,
  children,
}: ContentCardProps) => {
  return (
    <div className={styles['content-card']}>
      {headerTitle ? (
        <div className={styles['content-card__header']}>
          <h2 className={styles['content-card__title']}>{headerTitle}</h2>
          {headerChildren ? headerChildren : null}
        </div>
      ) : null}
      <div className={styles['content-card__content']}>{children}</div>
    </div>
  );
};

export default ContentCard;
