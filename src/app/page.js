import Image from "next/image";
import { poppins, dancingScript } from "./layout";
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
    
    
    </>
  );
}
