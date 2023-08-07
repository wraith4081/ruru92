import { usePageContext } from 'context/PageContext';
import React from 'react';

import { useRoutes } from 'react-router-dom'
import routes from 'routes';

import ReactJoyride, { STATUS } from 'react-joyride';
import { Toaster } from 'react-hot-toast';

import { createModal, useModals } from 'utils/modal';
import Modal from 'modals/index'
import { useTranslation } from 'react-i18next';


function App() {

  const { theme, isJoyrided, setIsJoyrided } = usePageContext();
  const modals = useModals();

  const { t, i18n, ready } = useTranslation();

  const TranslateJoyride = () => ([
    {
      target: '#encoded',
      content: t('joyride.encoded'),
    },
    {
      target: '#decoded',
      content: t('joyride.decoded'),
    },
    {
      target: '#key',
      content: t('joyride.key'),
    },

    {
      target: '#joyride-ike',
      content: t('joyride.ike'),
    },
    {
      target: '#joyride-changelog',
      content: t('joyride.changelog'),
    },
    {
      target: '#joyride-language',
      content: t('joyride.language'),
    },
    {
      target: '#joyride-about',
      content: t('joyride.about'),
    },
    {
      target: '#joyride-theme',
      content: t('joyride.theme'),
    }
  ])

  const [JoyrideSteps, setJoyrideSteps] = React.useState(TranslateJoyride());

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  React.useEffect(() => {
    if (i18n.language !== localStorage.getItem('lang')) {
      localStorage.setItem('lang', i18n.language);
    }

    setJoyrideSteps(TranslateJoyride());
  }, [i18n.language]);


  React.useEffect(() => {
    setJoyrideSteps(TranslateJoyride());
  }, [ready]);

  React.useEffect(() => {
    if (modals.length > 0) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [modals]);

  React.useEffect(() => {

    const d1 = new Date();  // today
    const d2 = new Date(
      `${d1.getFullYear()}-04-01T00:00:00.000Z`
    )  // 1st of April
    const isBirthday = d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    const isCelebrated = localStorage.getItem('isCelebrated') === 'true';
    if (isBirthday && !isCelebrated) {
      localStorage.setItem('isCelebrated', 'true');
      setTimeout(() => {
        document.querySelector('.react-joyride__beacon')?.parentElement?.remove();
      }, 100)
      createModal('birthday')
    } else if (!isBirthday && isCelebrated) {
      localStorage.removeItem('isCelebrated');
    }

  }, [])

  React.useEffect(() => {
    (async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("https://ruru92.wraith.com.tr/sw.js", {
            scope: "/",
          });
          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    })();
  }, [])

  return <>
    {!isJoyrided && (
      <ReactJoyride
        locale={
          ['back', 'close', 'last', 'next', 'open', 'skip'].reduce((acc: any, key) => {
            acc[key] = t(`joyride.${key}`)
            return acc
          }, {}) as any
        }
        steps={JoyrideSteps}
        continuous={true}
        styles={{
          options: {
            primaryColor: '#6366f1',
            textColor: '#334155',
            beaconSize: 48
          }
        }}
        callback={({ status }) => {
          if (status === STATUS.FINISHED) {
            setIsJoyrided(true);
          }
        }}
      />
    )}
    <Toaster position='top-right' />
    {modals.length > 0 && <Modal />}
    {useRoutes(routes)}
  </>;
}

export default App;
