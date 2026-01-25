import { useState, type FormEvent, useEffect } from "react";
import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  supply: string;
  rank: string;
  maxSupply: string;
  marketCapUsd: string;
  explorer: string;
}

interface DataProp {
  data: CoinProps[];
}

export function Home() {
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState<CoinProps[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    //fetch("https://api.coincap.oi/v3/assets?limit=10&offset=0")
    fetch(
      "https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=cd44abd9414edd577d8bc9c39d391464e40c533118cedeed86b44cecb6b34834",
    )
      .then((response) => response.json())
      .then((data: DataProp) => {
        const coinsData = data.data;

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
          };

          return formated;
        });

        console.log(formatedResult);
      });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    navigate(`/detail/${input}`);
  }

  function handleGetMore() {
    alert("Carregar mais moedas...");
  }

  return (
    <>
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome da moeda... EX bitcoin"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <BsSearch size={30} color="#FFF" />
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th scope="col">Moeda</th>
              <th scope="col">Valor mercado</th>
              <th scope="col">Preço</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudança 24h</th>
            </tr>
          </thead>

          <tbody id="tbody">
            <tr className={styles.tr}>
              <td className={styles.tdLabel} data-label="Moeda">
                <div className={styles.name}>
                  <Link to={"/detail/bitcoin"}>
                    <span>Biticoin</span> | BTC
                  </Link>
                </div>
              </td>

              <td className={styles.tdLabel} data-label="Valor mercado">
                1T
              </td>

              <td className={styles.tdLabel} data-label="Preço">
                8.000
              </td>

              <td className={styles.tdLabel} data-label="Volume">
                2B
              </td>

              <td className={styles.tdProfit} data-label="Mudança 24H">
                <span>1.20</span>
              </td>
            </tr>
          </tbody>
        </table>

        <button className={styles.buttonMore} onClick={handleGetMore}>
          Carregar mais
        </button>
      </main>
    </>
  );
}
