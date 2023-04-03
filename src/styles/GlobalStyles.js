import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

    body{
    margin: 0;
    }
    h2{
        margin-bottom: 0;
	    margin-top: 0;
    }
    ul{
        display: flex;
        flex-direction: column;
	    padding: 0;

    }
    li{
        list-style: none;
        display: flex;
        margin: 0;

    }
    button{
        background-color: transparent;
        color: white;
        border: transparent;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

`;

export { GlobalStyles };
