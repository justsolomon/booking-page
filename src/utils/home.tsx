import { ReactComponent as Plane } from 'assets/vectors/plane.svg';
import { ReactComponent as Ship } from 'assets/vectors/ship.svg';
import { ReactComponent as Truck } from 'assets/vectors/truck.svg';
import { ReactComponent as Customs } from 'assets/vectors/clearance.svg';

export const services = [
  { title: 'Air Freight', icon: <Plane /> },
  { title: 'Sea Freight', icon: <Ship /> },
  { title: 'Inland (Truck & Barge)', icon: <Truck /> },
  { title: 'Customs Clearance', icon: <Customs /> },
];

export const additionalServices = [
  {
    title: 'Export Forwarding',
    description: 'We handle customs clearance and documentation.',
  },
  {
    title: 'Import Customs Clearance',
    description: 'We handle import customs and regulatory requirements.',
  },
  {
    title: 'Cargo Insurance',
    description:
      'Protect your cargo from logistics risks up to its full value.',
  },
  {
    title: 'Transport / Delivery',
    description: 'We deliver the cargo to your door step from the ports.',
  },
];
