import { ReactComponent as AppLogo } from 'assets/vectors/logo.svg';
import { ReactComponent as SearchIcon } from 'assets/vectors/search.svg';
import Button from '../Button';
import Input from '../Input';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__search']}>
        <a href="/" className={styles['header__logo']}>
          <AppLogo />
        </a>
        <Input
          placeholder="Search"
          rightIcon={<SearchIcon />}
          containerClass={styles['header__search-input']}
        />
      </div>

      <nav className={styles['header__nav-buttons']}>
        <Button variant="outline">Request Quote</Button>
        <Button>Book Shipment</Button>
      </nav>
    </header>
  );
};

export default Header;
