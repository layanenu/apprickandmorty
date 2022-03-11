import styled from 'styled-components/native';
import theme from './theme.json';

export const Container = styled.View`
    flex: 1;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    padding: ${(props) => props.padding || 0}px;
    width: 100%;
    align-items: ${(props) => props.align || 'center'};
    max-width: ${(props) => props.width || '100%'};
    max-height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.top || 0};
    left: ${(props) => props.left || 0};
    z-index: ${(props) => props.zIndex || 1};
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    border-radius: ${(props) => (props.radius || 0)};
    borderTopRightRadius: ${(props) => props.borderTopRightRadius || 0};
    borderTopLeftRadius: ${(props) => props.borderTopLeftRadius || 0};
    borderBottomRightRadius: ${(props) => props.borderBottomRightRadius || 0};
    borderBottomLeftRadius: ${(props) => props.borderBottomLeftRadius || 0};
    paddingTop:  ${(props) => props.paddingTop || 0};
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    opacity: ${(props) => (props.disabled ? 0.5 : 10)};
    background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.primary};
    border-radius: ${(props) => (props.radius || 0)};
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.top || 0};
    flex: 1;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    z-index: ${(props) => props.zIndex || 1};
    left: ${(props) => props.left || 0};
    padding: ${(props) => (props.compact ? 5 : 15)}px;
    max-width: ${(props) => (props.width  ? props.width  + 'px' : 'auto')};
    max-height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
`;

export const ButtonText = styled.Text`
    text-align: center;
    color: ${(props) => (props.color ? theme.colors[props.color] : '#000')};
    font-size: ${(props) => (props.fontSize || 14)}px;
    margin-right:  ${(props) => props.marginRight || 0};
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${theme.colors.white};
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size: ${(props) => (props.fontSize || 14)}px;
    color: ${(props) => (props.color ? theme.colors[props.color] : '#000')};
    font-weight: ${(props) => props.weight || '400'};
`;

export const TextInput = styled.TextInput`
    flex: 1;
    background: ${(props) => props.background ? theme.colors[props.background] : 'transparent'};
    padding: ${(props) => props.compact || 0}px;
    width: 100%;
    max-width: ${(props) => (props.width || '100%')};
    max-height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
    position: ${(props) => props.position || 'relative'};
    z-index: ${(props) => props.zIndex || 1};
    border-radius: ${(props) => (props.radius || 0)};
    borderTopRightRadius: ${(props) => props.borderTopRightRadius || 0};
    borderTopLeftRadius: ${(props) => props.borderTopLeftRadius || 0};
    borderBottomRightRadius: ${(props) => props.borderBottomRightRadius || 0};
    borderBottomLeftRadius: ${(props) => props.borderBottomLeftRadius || 0};
`;

export const Image = styled.Image`
    width: ${(props) => props.width + 'px' || '100%'};
    height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
`


export const Card = styled.View`
    flex: 1;
    flex-shrink: 0;
    margin: ${(props) => props.margin || 0}px;
    width: ${(props) => props.width + 'px'  || '100%'};
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
`   