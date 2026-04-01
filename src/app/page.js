import Image from "next/image";
import Card from "@/app/Componentes/Card/page.jsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.cabeca}>
          <h1>Restaurant</h1>
          <p>De pratos clássicos a criações surpreendentes,<br/> 
            nosso cardápio é um requinte de sabores <br/>
            refinados</p>
        </div>
      </header>
      <main>
        <Card/>
      </main>
    
    
    </>
  );
}
