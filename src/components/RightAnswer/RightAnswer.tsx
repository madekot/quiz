import {MyContainer} from "../MyContainer";
import {Flex} from "@chakra-ui/react";
import {MyLogo} from "../MyLogo";
import {MyAvatar} from "../MyAvatar";
import {TextGroup} from "../TextGroup";
import {MyButton} from "../MyButton";

const TEXT_INFO = `На двадцатом съезде партии прозвучало поразительное заявление: реализация намеченных плановых заданий сделала своё дело`

interface RightAnswerProps {
}

export const RightAnswer = ({}: RightAnswerProps) => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px'/>
        <MyAvatar justifyContent={'flex-end'} />
        <Flex gap={'30'} marginBottom={'91px'} justifyContent={'center'}>
          <TextGroup text={TEXT_INFO} heading={'Правильный ответ'} maxWidth={'730px'} />
        </Flex>
        <Flex display='flex' flexWrap={'wrap'}
              gap='30px'
              justifyContent={'center'}>
          <MyButton flexGrow={1} maxWidth={'350px'}>Молодец, что знаешь</MyButton>
          <MyButton flexGrow={1} maxWidth={'350px'} variant='outline'>Тут у тебя пробел в знаниях</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
