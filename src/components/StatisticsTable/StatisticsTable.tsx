import {MyContainer} from "../MyContainer";
import {Center, Flex} from "@chakra-ui/react";
import {MyLogo} from "../MyLogo";
import {TextGroup} from "../TextGroup";
import {MyButton} from "../MyButton";
import {MyTable} from "../MyTable";

interface StatisticsTableProps {}

export const StatisticsTable = ({}: StatisticsTableProps) => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='50px'/>
        <Center marginBottom={'20px'}>
          <TextGroup heading={'Таблица статистики игрока'}/>
        </Center>
        <MyTable marginBottom={'92px'}/>
        <Flex display='flex' flexWrap={'wrap'}
              gap='30px'
              justifyContent={'center'}>
          <MyButton flexGrow={1} maxWidth={'350px'}>Начать игру</MyButton>
          <MyButton flexGrow={1} maxWidth={'350px'} variant='outline'>Вернуться в главное меню</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
