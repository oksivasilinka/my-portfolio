import { FlexWrapper } from 'components/flex-wrapper'
import styled from 'styled-components'
import { Icon } from 'components/icon/icon'
import { theme } from 'styles/theme'

type Props = {
  title: string
  idIcon: string
}

export const Skill = ({ title, idIcon }: Props) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} align={'center'}>
        <IconWrapper>
          <Icon id={idIcon} />
        </IconWrapper>
        <StyledSkillTitle>{title}</StyledSkillTitle>
      </FlexWrapper>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  padding: 0 10px;
`

const StyledSkillTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding-top: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow: ${theme.shadow.main};
`
