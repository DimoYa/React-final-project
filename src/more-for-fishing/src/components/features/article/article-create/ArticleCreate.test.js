import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ArticleCreate } from './ArticleCreate';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from '../../../../context/AuthContext';
import { toast } from 'react-toastify'
import { act } from 'react-dom/test-utils'

// example of user interaction
describe('Article create component', () => {
    it('should submit new article', async () => {

        jest.mock('react-toastify', () => ({
            toast: {
                success: jest.fn(),
            },
        }))

        act(async () => {
            const { container } = render(
                <Router>
                    <AuthProvider>
                        <ArticleCreate />
                    </AuthProvider>
                </Router>
            );
            const titleInput = container.getElementsByTagName('input')[0];
            await userEvent.type(titleInput, 'New Article');

            const contntInput = container.getElementsByTagName('textarea')[0];
            await userEvent.type(contntInput, 'New Article text');

            const submitBtn = container.getElementsByTagName('button')[1];

            await userEvent.click(submitBtn);

            expect(toast.success).toBeInTheDocument();
        })
    });
});