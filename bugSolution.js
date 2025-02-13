```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/" key="home">
        <a>Home</a>
      </Link>
      <Link href="/about" key="about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```