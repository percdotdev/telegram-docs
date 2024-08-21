import Link from 'next/link';
import { TextEffect } from '@components/text-effect';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      {/* <h1 className="mb-4 text-2xl font-bold">Hello World</h1> */}
      <h1 className="mb-4 text-4xl font-bold">
        <TextEffect per='char' preset='blur'>
          Hello World
        </TextEffect>
      </h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
