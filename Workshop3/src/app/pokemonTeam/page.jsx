import styles from "./page.module.scss";
import Link from "next/link";
import { team } from "../../data/pokemonData";

export default function PokemonPage() {
  // *Insert team type filter here!*
  // const *Insert pokemon type variable!* = *Insert .filter function here!* => pokemon.type === ["*Insert type here*"]

  return (
    <main className={styles.container}>
      <h1>Pokémon Team</h1>

      <section className={styles.section}>
        <h2>.Map Method</h2>
        <h3> Insert Map Function Here!</h3>
        <div className={styles.pokemonCards}>
          {/* {*Insert .map function here!* => ( */}

          {/* Example skeleton:
          {yourData.map((item) => (
            <div key={ *unique key* } className={styles.card}>
              <img src={ *item.image* } alt={ *item.name* } className={styles.pokemonImage} />
              <h3>{ *item.name* }</h3>
              <p>Type: { *item.type* }</p>
            </div>
			))}
        */}
        </div>
      </section>

      <section className={styles.section}>
        <h2>.Filter Method</h2>
        <h3> Insert Filter Function Here!</h3>

        <div className={styles.pokemonCards}>
          {/* {*Insert .map function for filtered pokemon type here!* => ( */}
          {/* Uncomment below when done! */}
          {/* <div key={pokemon.id} className={styles.card}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={styles.pokemonImage}
              />
              <h3>{pokemon.name}</h3>
              <p>Type: {pokemon.type}</p>
            </div>
          ))} */}
        </div>
      </section>

      <div className={styles.buttonGroup}>
        <Link href="/basics">
          <button className={styles.backButton}>Go to Basics</button>
        </Link>

        <Link href="/solution">
          <button className={styles.backButton}>Go to Solution</button>
        </Link>
      </div>
    </main>
  );
}
