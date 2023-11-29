import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventsRootsPage = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventsRootsPage;