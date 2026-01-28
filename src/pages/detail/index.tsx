import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { type CoinProps } from "../home";

interface ResponseData {
  data: CoinProps;
}

interface ErroData {
  error: string;
}

type DataProp = ResponseData | ErroData;

export function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState<CoinProps>();

  useEffect(() => {
    async function getCoin() {
      try {
        fetch(
          `https://rest.coincap.io/v3/assets/${cripto}?apiKey=cd44abd9414edd577d8bc9c39d391464e40c533118cedeed86b44cecb6b34834`,
        )
          .then((Response) => Response.json())
          .then((data: DataProp) => {
            if ("error" in data) {
              navigate("/");
              return;
            }

            const price = Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            });

            const priceCompact = Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              notation: "compact",
            });

            const resultData = {
              ...data.data,
              formatedPrice: price.format(Number(data.data.priceUsd)),
              formatedMarket: priceCompact.format(
                Number(data.data.marketCapUsd),
              ),
              formatedVolume: priceCompact.format(
                Number(data.data.volumeUsd24Hr),
              ),
            };

            setCoin(resultData);
          });
      } catch (erro) {
        console.log(erro);
        navigate("/");
      }
    }

    getCoin();
  }, [cripto]);
  return (
    <>
      <div>
        <h1>Página Detalhe da moeda {cripto}</h1>
      </div>
    </>
  );
}
