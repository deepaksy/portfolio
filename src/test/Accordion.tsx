import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const AccordionBanner = ({title,content}:{title:string,content:any}) => {
  return (
    <Accordion defaultIndex={[0]} allowToggle   >
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex={'1'} textAlign='left'>
                        {title}
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {content}
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  )
}

export default AccordionBanner