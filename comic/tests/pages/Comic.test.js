import '@testing-library/jest-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Comic from '../../src/components/comic';
import { Detail } from '../../src/components/detail';
import Home from '../../src/pages/index';
import { Button } from '../../src/components/button';

afterEach(cleanup);

const comicProps = {
	comic: {
		thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
		title: 'Marvel Previews (2017)',
	},
};
const detailProps = {
	creators: ['Jim Nausedas', 'Joe Mors'],
	issueNumber: 0,
	date: '2019-11-07T08:46:15-0500',
};

test('<Comic>', () => {
	const { container, debug, getByTestId } = render(<Comic {...comicProps} />);

	debug();
	expect(getByTestId('comic')).toBeTruthy();
	expect(getByTestId('title').textContent).toBe('Marvel Previews (2017)');
});
test('<Detail> #1', () => {
	const { container, debug, getByTestId } = render(<Detail {...detailProps} />);

	debug();
	expect(getByTestId('details')).toBeTruthy();
	expect(getByTestId('details').querySelector('.date').textContent).toBe('Pubulished: November 7, 2019')
});
