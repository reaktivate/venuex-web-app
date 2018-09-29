import coreReducers, { setVenueId } from '../core';


describe('reducers', () => {

    describe('venueId', () => {
        it('action', () => {
            expect(setVenueId('testVenue')).toEqual({
                type: 'SET_VENUE_ID',
                payload: 'testVenue'
            });
        });

        it('reducer', () => {
            expect(coreReducers.venueId({}, setVenueId('testVenue'))).toEqual('testVenue');
        });
    });

});
