import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from 'components/library';

describe('library button component test', () => {
  test('renders a button with no props recieved', () => {
    const { container } = render(<Button />);
    const button: HTMLElement | null = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });

  test('renders the text passed as a child', () => {
    const buttonText: string = 'Test Button';

    const { getByText } = render(<Button>{buttonText}</Button>);
    const button: HTMLElement | null = getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  test('dispatches action on click', () => {
    const buttonText: string = 'Test Button';
    const action: jest.Mock = jest.fn();

    const { getByText } = render(<Button onClick={action}>{buttonText}</Button>);
    const button: HTMLElement | null = getByText(buttonText);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(action).toHaveBeenCalledTimes(2);
  });

  test('does not dispatch action if disabled', () => {
    const buttonText: string = 'Test Button';
    const action: jest.Mock = jest.fn();

    const { getByText } = render(
      <Button disabled onClick={action}>
        {buttonText}
      </Button>
    );
    const button: HTMLElement | null = getByText(buttonText);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(action).toHaveBeenCalledTimes(0);
  });

  test('renders an icon with text if prop recieved', () => {
    const buttonText: string = 'Test Button';

    const { getByText } = render(<Button icon="test">{buttonText}</Button>);
    const button: HTMLElement | null = getByText(buttonText);

    const icon: HTMLElement | null = button.querySelector('i');

    expect(button).toContainElement(icon);
    expect(button).toBeInTheDocument();
  });

  test('renders an icon wihtout text if prop recieved', () => {
    const { container } = render(<Button icon="test" />);
    const button: HTMLElement | null = container.querySelector('button');

    const icon: HTMLElement | null = button ? button.querySelector('i') : null;

    expect(button).toContainElement(icon);
    expect(button).toBeInTheDocument();
  });

  test('outputs the type prop correctly', () => {
    const { container } = render(<Button type="submit" />);
    const button: HTMLElement | null = container.querySelector('button');

    expect(button?.getAttribute('type')).toEqual('submit');
  });
});
