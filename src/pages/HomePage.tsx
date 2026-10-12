import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Location } from '../components/Location';

export function HomePage() {
  return (
    <main
      id="home-snap"
      className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory"
    >
      <div className="h-screen snap-start snap-always shrink-0">
        <Hero />
      </div>
      <div className="h-screen snap-start snap-always shrink-0 overflow-y-auto">
        <About />
      </div>
      <div className="h-screen snap-start snap-always shrink-0 overflow-y-auto">
        <Location />
      </div>
    </main>
  );
};
