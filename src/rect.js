import { Observable } from 'rxjs';

export default function rect(node, sampler = Observable.just(null)) {
  return sampler.map(() => node.getBoundingClientRect());
}
