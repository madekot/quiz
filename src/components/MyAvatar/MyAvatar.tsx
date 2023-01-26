import {Avatar, AvatarBadge, Flex} from "@chakra-ui/react";

interface MyAvatarProps {
  justifyContent: 'center' | 'flex-end'
}

export const MyAvatar = ({justifyContent}: MyAvatarProps) => {
  return (
    <Flex justifyContent={justifyContent}>
      <Avatar size='xl' marginBottom='40px'>
        <AvatarBadge boxSize='1.25em' bg='green.500'/>
      </Avatar>
    </Flex>
  )
}
