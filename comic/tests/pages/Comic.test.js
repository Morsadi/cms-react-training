import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Comic from '../../src/components/comics/detail';
import { Detail } from '../../src/components/comics/comps/detail';

afterEach(cleanup);

const comicProps = {
	comic: {
		thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
		title: 'Marvel Previews (2017)',
	},
};
const detailProps = {
	creators: 'Smith, Mors',
	issue: 3,
	date: '2019-11-07T08:46:15-0500',
};
const undefinedDetailProps = {
	creators: '',
	date: '',
};

describe('<Comic>', () => {
	it('Render & Debug', ()=>{
		const { debug, getByTestId } = render(<Comic {...comicProps} />);

		debug();
		expect(getByTestId('comic')).toBeTruthy();
		expect(getByTestId('title').textContent).toBe('Marvel Previews (2017)');
	});
	it('Title', ()=>{
		const { getByTestId } = render(<Comic {...comicProps} />);

		expect(getByTestId('title').textContent).toBe('Marvel Previews (2017)');
	});
	it('Image alt & url', ()=>{
		const { getByTestId } = render(<Comic {...comicProps} />);
		const img = getByTestId('image');

		expect(img).toHaveAttribute('alt', 'Marvel Previews (2017)')
	});
});

describe('<Detail>', () => {
	it('Render & Debug', ()=>{
		const { debug, getByTestId } = render(<Detail {...detailProps} />);

		debug();
		expect(getByTestId('details')).toBeTruthy();	
	})
	it('Date & issue & creators', ()=>{
		const { getByTestId } = render(<Detail {...detailProps} />);
		
		expect(getByTestId('date').textContent).toBe('Pubulished: November 7, 2019');
		expect(getByTestId('issue').textContent).toBe('Issue: 3');
		expect(getByTestId('creators').textContent).toBe('Creators: Smith, Mors');
	})
	
	it('Test undefined Date & issue & creators', ()=>{
		const { getByTestId } = render(<Detail {...undefinedDetailProps} />);
		
		expect(getByTestId('details').querySelector('[data-testid="date"]')).not.toBeInTheDocument();
		expect(getByTestId('details').querySelector('[data-testid="creators"]')).not.toBeInTheDocument();
	})
});
