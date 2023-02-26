import {Footer} from 'components/Footer';
import {Header} from 'components/Header';
import { MyContainer } from 'components/MyContainer';
import css from 'layout/PageLayout/PageLayout.module.scss';

import {Outlet} from 'react-router-dom';

export const PageLayout = () => {
  return (
    <div className={css.app}>
      <Header />
      <main className={css.main}>
        <MyContainer>
          <Outlet/>
        </MyContainer>
      </main>
      <Footer />
    </div>
  );
};
