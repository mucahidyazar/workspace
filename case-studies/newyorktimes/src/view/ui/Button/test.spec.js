import { render } from '@utils';
import Button from './Button';

it('renders without crashing', () => {
  const { getByText } = render(<Button>Hello Button</Button>);
  const buttonElement = getByText(/Hello Button/i);
  expect(buttonElement).toBeTruthy();
});
