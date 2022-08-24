import { render } from '@testing-library/react';
import App from './App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('App', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Mock store and render app', () => {
      store = mockStore(initialState);
      const { container } = render(
          <Provider store={store}>
              <App />
          </Provider>
      );

      expect(container).not.toBeNull();
  });
});
