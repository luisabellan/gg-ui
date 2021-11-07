import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Primary as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('renders a default button with children without crashing', () => {
    render(<Button />);

    //  there is a button and it's visible
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    expect(button).toHaveStyle({
      backgroundColor: 'grey',
      color: 'white',
    });
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
    // The span element inside the button has the color we expect for a primary variant Button

    expect(button).toHaveStyle({
      backgroundColor: '#11521a',
      color: 'white',
    });
  });
  it('renders a secondary button without crashing', () => {
    render(
      <Button variant="secondary">
        <span>Send</span>
      </Button>
    );
    const button = screen.getByRole('button');
    const span = screen.getByText(/Send/i);
    //  there is a button and it's visible
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    //  the button has a child span and it's visible
    expect(span).toBeInTheDocument();
    expect(span).toBeVisible();

    // The button has the color we expect for a secondary variant Button
    // The span element inside the button has the color we expect for a secondary variant Button
    expect(button).toHaveStyle({
      backgroundColor: '#101558',
      color: 'white',
    });
  });

  it('calls "onClick" prop on click for a primary button', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();

    render(
      <Button variant="primary" onClick={onClick}>
        <span>Send</span>
      </Button>
    );
    const button = screen.getByRole('button');

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('calls "onClick" prop on click for a secondary button', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    render(
      <Button variant="secondary" onClick={onClick}>
        <span>Send</span>
      </Button>
    );
    const button = screen.getByRole('button');

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
