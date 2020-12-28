import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ_LIST from './faq.json';

export const Faq = ({ index, setIndex }) => {
  return (
    <Flex direction="column" p={4}>
      <Box mb="8">
        <Heading size="md">Frequently Asked Questions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {FAQ_LIST.map(faq => (
          <AccordionItem key={faq.id} name={`accordion-button-${faq.id}`}>
            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">{faq.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
