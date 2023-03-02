import '@testing-library/jest-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Comic from '../../src/components/comic';
import { Detail } from '../../src/components/detail';
import Home from '../../src/pages/index';
import {Button} from '../../src/components/button';

afterEach(cleanup);

const props = {
	"id": 82967,
	"thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
	"creators": [
	"Jim Nausedas",
	"Joe Mors"
	],
	"issueNumber": 0,
	"title": "Marvel Previews (2017)",
	"publishDate": "2019-11-07T08:46:15-0500"
}


test('<Comic>', () => {
	const { container, debug, getByTestId, getByText } = render(<Button />);
	
	expect(getByTestId('button-title').textContent).toBeTruthy()

	fireEvent.click(getByText("Button"))

});
