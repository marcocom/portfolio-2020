export type CounterProps = {
  count: number,
  setCount: Function,
  reset: () => void
};

export type IntersectionProps = {
  inView: boolean,
  triggered: boolean,
  entry?: IntersectionObserver
}
