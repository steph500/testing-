import { lazy, Suspense, ComponentProps } from 'react';

const Lazymessages = lazy(() => import('./messages'));

const messages = (props: ComponentProps<typeof Lazymessages>) => (
  <Suspense fallback={null}>
    <Lazymessages {...props} />
  </Suspense>
);

export default messages;
