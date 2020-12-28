import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, theme, useColorMode } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Faq } from './Faq';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';

export const App = () => {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [toggleFlag, setToggleFlag] = useState(false);
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          'eadbbd1f27a4bba4544cee3df97499fd2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-button-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
            setIndex(commandData.faqId - 1);
          } else if (commandData.command === 'toggleColorMode') {
            setToggleFlag(flag => !flag);
          }
        },
      });
    }
  }, []);

  useEffect(() => {
    toggleColorMode();
  }, [toggleFlag]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
};
