import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
       <ul className={styles.header}>
        <li><Link href="/games">Games</Link></li>
        <li><Link href="/addgame"> Add Games</Link></li>
       </ul>
      </header>
      <h1 style={{color:"skyblue"}}>Welcome to Home Page</h1>

      <p style={{color:"skyblue"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta officiis deserunt qui sequi eius tempore expedita consequuntur, saepe ratione voluptatem possimus quos quisquam repellat iusto porro odio. Asperiores laudantium est dolor. Est repellendus, magnam eum corporis quod totam? Cupiditate perspiciatis inventore error magni doloremque ipsum, at necessitatibus ratione commodi.
      </p>

      <footer className={styles.footer}>
<h1>Footer here</h1>
      </footer>
    </main>
  );
}
