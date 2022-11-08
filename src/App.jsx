import { Global } from '@emotion/react' // connection Global Styles
import { GlobalStyles } from './App.styled';
import Vidget from 'components/Vidget/Vidget';

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Vidget />
    </>  
  );
};