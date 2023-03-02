import { render, screen } from '@testing-library/react';
import React from 'react';
import { ArticleItem } from './ArticleItem';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// examle of rendering component test
describe('Article item component', () => {
    it('should render article item', () => {

        const articleData = {
            headline: 'test headline',
            author: 'test author',
            content: 'tst article content',
            _kmd: {
                "lmt": "2023-02-01T22:38:18.719Z",
                "ect": "2023-02-01T22:38:18.719Z"
            }
        }

        const { container } = render(
            <Router>
                <ArticleItem article={articleData} />
            </Router>
        );

        const articleTitle = container.getElementsByTagName('h4')[0];
        const articleAuthor = container.getElementsByClassName('fa fa-pencil p-1')[0];


        expect(articleTitle).toBeInTheDocument();
        expect(articleTitle).toHaveTextContent(articleData.headline);
        expect(articleAuthor).toBeInTheDocument();
        expect(articleAuthor).toHaveTextContent(articleData.author);
    });
});