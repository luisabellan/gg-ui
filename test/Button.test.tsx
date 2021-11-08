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


    // normal state styles
    expect(button).toHaveStyle({
      backgroundColor: '#353434',
      color: 'white',
    });

    const buttonText = screen.getByText('send');
    //  the button has a child span and it's visible
    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toBeVisible();





  });


  it('renders a primary button without crashing', () => {

    render(
      <Button variant="primary">
        <span>send</span>
      </Button>
    );
    const button = screen.getByRole('button');
    const buttonText = screen.getByText('send');
    //  there is a button and it's visible
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    //  the button has a child span and it's visible
    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toBeVisible();

    // The button has the color we expect for a primary variant Button
    // The span element inside the button has the color we expect for a primary variant Button

    // normal state styles
    expect(button).toHaveStyle({
      backgroundColor: '#11521a',
      color: 'white',
    });




  });
  it('renders a secondary button without crashing', () => {

    render(
      <Button variant="secondary">
        <span>send</span>
      </Button>
    );
    const button = screen.getByRole('button');
    const buttonText = screen.getByText('send');
    //  there is a button and it's visible
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    //  the button has a child span and it's visible
    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toBeVisible();

    // The button has the color we expect for a primary variant Button
    // The span element inside the button has the color we expect for a primary variant Button

    // normal state styles
    expect(button).toHaveStyle({
      backgroundColor: '#101558',
      color: 'white',
    });

  });

  it('renders a tertiary button without crashing', () => {

    render(
      <Button variant="tertiary">Accept
      </Button>
    );
    const button = screen.getByRole('button');
    const buttonText = screen.getByText('Accept');
    //  there is a button and it's visible
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    //  the button has a child span and it's visible
    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toBeVisible();

    // The button has the color we expect for a primary variant Button
    // The span element inside the button has the color we expect for a primary variant Button

    // normal state styles
    expect(button).toHaveStyle({
      backgroundColor: '#663d08',
      color: 'white',
    });


  });

  it('calls "onClick" prop on click for a primary button', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();

    render(
      <Button variant="primary" onClick={onClick}>
        <span>send</span>
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
        <span>send</span>
      </Button>
    );
    const button = screen.getByRole('button');

    // before click
    expect(onClick).not.toHaveBeenCalled();
    // click
    fireEvent.click(button);
    // after click
    expect(onClick).toHaveBeenCalled();
  });

  it('calls "onClick" prop on click for a tertiary button', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    render(
      <Button variant="tertiary" onClick={onClick}>
        <span>send</span>
      </Button>
    );
    const button = screen.getByRole('button');

    // before click
    expect(onClick).not.toHaveBeenCalled();
    // click
    fireEvent.click(button);
    // after click
    expect(onClick).toHaveBeenCalled();
  });


});
