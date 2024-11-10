/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import {colors, fonts} from '../styles/theme.json'

export const Box = styled.View`
  display: flex;
  overflow: hidden;
  flex: ${props => (props.height ? 'none' : 1)};
  width: ${props => (props.fluid ? '100%' : props.width || 'auto')};
  max-width: ${props => (props.fluid ? '100%' : props.width || 'auto')};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.height || 'auto'};
  margin: ${props => props.spacing || 0};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  background-color: ${props =>
    props.background
      ? colors[props.background] || props.background
      : 'transparent'};
`

export const Touchable = styled.TouchableOpacity`
  display: flex;
  overflow: hidden;
  flex: ${props => (props.height ? 'none' : 1)};
  width: ${props => (props.fluid ? '100%' : props.width || 'auto')};
  max-width: ${props => (props.fluid ? '100%' : props.width || 'auto')};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.height || 'auto'};
  margin: ${props => props.spacing || 0};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  background-color: ${props =>
    props.background
      ? colors[props.background] || props.background
      : 'transparent'};
`

export const Title = styled.Text`
  color: ${props => colors[props.color || 'dark']};
  font-size: ${props => fonts.title.sizes[props.variant || 'normal']};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  letter-spacing: -0.8px;
  line-height: ${props => fonts.title.sizes[props.variant || 'normal']};
  text-align: ${props => props.align || 'left'};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-weight: ${props => (props.bold ? '800' : 'normal')};
`

export const Button = styled.TouchableOpacity`
  margin: ${props => props.spacing || 0};
  border-radius: 5px;
  padding: 13px 30px;
  background: ${props => colors[props.background || 'primary']};
  width: ${props => (props.block ? '100%' : 'auto')};
  align-items: center;
`

export const Spacer = styled.View`
  width: 100%;
  height: ${props => props.size || '10px'};
`

export const Text = styled.Text.attrs(props => ({
  onPress: props.onPress
}))`
  color: ${props => colors[props.color || 'muted']};
  letter-spacing: -0.6px;
  font-size: ${props => fonts.text.sizes[props.variant || 'normal']};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  margin: ${props => props.spacing || 0};
  text-align: ${props => props.align || 'left'};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-decoration-color: ${props =>
    props.underline ? colors[props.color || 'muted'] : 'transparent'};
  padding: ${props =>
    props.hasPadding
      ? !props.removePaddingBottom
        ? '20px'
        : '20px 20px 0 20px'
      : '0px'};
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.muted
})`
  display: flex;
  width: 100%;
  padding: 13px 15px;
  font-size: 17px;
  border-radius: 5px;
  background: ${colors.light};
  border: 1px solid ${colors.muted};
  color: ${colors.dark};
`

export const ScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsverticalScrollIndicator: false
})`
  padding: ${props => (props.hasPadding ? '20px' : '0')};
  flex: ${props => (props.height ? 'none' : 1)};
  width: ${props => (props.fluid ? '100%' : 'auto')};
  height: ${props => props.height || 'auto'};
  background: ${props =>
    props.background ? colors[props.background] : 'transparent'};
`

export const Cover = styled.ImageBackground.attrs(props => ({
  source: props.image
    ? {
        uri: props.image
      }
    : props.source,
  resizeMode: 'cover'
}))`
  width: ${props => props.width || '60px'};
  height: ${props => props.height || '60px'};
  margin: ${props => props.spacing || '0px'};
  border-radius: ${props =>
    props.radius || (props.circle ? props.width || '60px' : '3px')};
  border: ${props => props.border || 'none'};
  background-color: ${props => props.background || colors.muted};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  padding: ${props => (props.hasPadding ? '20px' : '0')};
  overflow: hidden;
`
