import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from 'components/library';

describe('library input component test', () => {
  test('renders an input with no props recieved', () => {
    const { container } = render(<Input />);
    const button: HTMLElement | null = container.querySelector('input');

    expect(button).toBeInTheDocument();
  });

  test('outputs the placeholder prop correctly', () => {
    const placeholder = 'Test placeholder text';

    const { container } = render(<Input placeholder={placeholder} />);
    const input: HTMLElement | null = container.querySelector('input');

    expect(input?.getAttribute('placeholder')).toEqual(placeholder);
  });

  test('renders an icon with if prop recieved', () => {
    const { container } = render(<Input icon="test" />);
    const icon: HTMLElement | null = container.querySelector('i');

    expect(icon).toBeInTheDocument();
  });

  test('dispatches action on change', () => {
    const action: jest.Mock = jest.fn();

    const { container } = render(<Input onChange={action} />);
    const input: HTMLElement | null = container.querySelector('input');

    if (input) fireEvent.change(input, { target: { value: '23' } });
    if (input) fireEvent.change(input, { target: { value: '234' } });

    expect(action).toHaveBeenCalledTimes(2);
  });
});
