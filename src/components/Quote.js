import React from 'react';
import styled from '@emotion/styled';

const ContainerQuote = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 10rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-top: 2rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -2rem;
            top: -100px;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`;

const Quote = ({quote}) => {

    return ( 
        <ContainerQuote>
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        </ContainerQuote>
     );
}
 
export default Quote;