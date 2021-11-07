import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./redux/store/store";

test('renders Robots', () => {
  let store=configureStore();

  render(
  <Provider store={store}>
    <App />
  </Provider>
  );
  
  const linkElement = screen.getByText(/Robots/i);
  expect(linkElement).toBeInTheDocument();
});
