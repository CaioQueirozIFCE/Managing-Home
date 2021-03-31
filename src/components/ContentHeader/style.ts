import styled from 'styled-components';

interface ITitleControllerProps{
    lineColor: string | undefined;
}

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    padding: 30px 30px 10px 30px;

`;
export const TitleController = styled.div<ITitleControllerProps>`

    margin-bottom: 25px;
    h1{
        color: ${props => props.theme.colors.white}
    }

    &::after{
        content: '';
        display: block;
        width: 40px;
        border-bottom: 5px solid ${props => props.lineColor}
    }
`;
export const Controllers = styled.div`
    display: flex;
`;
