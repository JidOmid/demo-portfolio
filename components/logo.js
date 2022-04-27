import Link from 'next/link'
import { Icon, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FaBicycle } from 'react-icons/fa'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  .rotate-parent {
    transition: transform 0.5s;
  }

  &:hover .rotate-parent {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <div className="rotate-parent">
            <Icon
              as={FaBicycle}
              width={8}
              height={8}
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            />
          </div>

          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1p"
            fontWeight="bold"
            ml={3}
          >
            Majid Omid
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}
export default Logo
