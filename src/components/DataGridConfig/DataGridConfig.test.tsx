import { describe, it, expect, } from 'vitest';
import { render, screen } from '@testing-library/react'
import DataGridConfig from './DataGridConfig';
import Columns from '../Columns/Columns';

// Todo check validity of inputs. Column no > 0, url pattern, 
// TODO: Test cases 
describe('DataGridConfig', () => {

    it('renders correctly & render Columns', () => {
        render(<DataGridConfig />);
        expect(screen.getByRole('spinbutton')).toBeInTheDocument();
        expect(screen.getByTestId('api-input')).toBeInTheDocument();
        expect(screen.getByTestId('path-input')).toBeInTheDocument();
        render(<Columns />)
        screen.logTestingPlaygroundURL();
    });
});