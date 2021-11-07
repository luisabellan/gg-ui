import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Primary as Button } from '../stories/Button.stories';

/* let container = null;
beforeEach(() => {
  const container = render(<Button />);

  render(<Button />, container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
}); */

describe('Button', () => {
  it('renders without crashing', () => {
    render(
      <Button variant="primary">
        <span>Send</span>
      </Button>
    );
  });

  it('renders a primary button without crashing', () => {
    render(
      <Button variant="primary">
        <span>Send</span>
      </Button>
    );
    const button = screen.getByRole('button');
    //  there is a button and it's visible
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    //  the button has a child span and it's visible
    expect(screen.getByText(/Send/i)).toBeInTheDocument();
    expect(screen.getByText(/Send/i)).toBeVisible();

    // The button has the color we expect for a primary variant Button
    expect(button).toHaveStyle({
      backgroundColor: '#11521a',
    });
    // The span inside the button has the color we expect for a primary variant Button ?
  });
});

it('renders a secondary button without crashing', () => {
  render(
    <Button variant="secondary">
      <span>Send</span>
    </Button>
  );
  const button = screen.getByRole('button');
  //  there is a button and it's visible
  expect(button).toBeInTheDocument();
  expect(button).toBeVisible();

  //  the button has a child span and it's visible
  expect(screen.getByText(/Send/i)).toBeInTheDocument();
  expect(screen.getByText(/Send/i)).toBeVisible();

  // The button has the color we expect for a primary variant Button
  expect(button).toHaveStyle({
    backgroundColor: '#101558',
  });
  // The span inside the button has the color we expect for a primary variant Button ?
});

it('calls "onClick" prop on click for a primary button', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  const { getByText } = render(
    <Button variant="primary" onClick={onClick}>
      <span>Send</span>
    </Button>
  );

  expect(onClick).not.toHaveBeenCalled();
  //fireEvent.click(screen.getByText(/Send/i));
  fireEvent.click(getByText(/Send/i));
  expect(onClick).toHaveBeenCalled();
});

it('calls "onClick" prop on click for a secondary button', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  const { getByText } = render(
    <Button variant="secondary" onClick={onClick}>
      <span>Send</span>
    </Button>
  );

  expect(onClick).not.toHaveBeenCalled();
  fireEvent.click(getByText(/Send/i));
  expect(onClick).toHaveBeenCalled();
});
