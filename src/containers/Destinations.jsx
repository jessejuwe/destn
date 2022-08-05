import DestinationCard from '../components/DestinationCard';
import { POPULAR_DESTINATION } from '../helpers/data';

const Destinations = () => {
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-xl text-gray-900 md:motion-safe:focus:hover:-translate-y-4">
        Popular destinations
      </h2>
      <p className="mt-2 text-gray-600 selection:bg-white selection:text-sky-500 first-letter:text-2xl first-letter:font-semibold first-letter:text-gray-100">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {POPULAR_DESTINATION.map(destination => (
          <DestinationCard destination={destination} key={destination.city} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
