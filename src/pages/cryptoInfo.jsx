import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Chart,
} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CryptoInfo = () => {
    const [cryptos, setCryptos] = useState([]);
    const [selected, setSelected] = useState([]);
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        const url =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        axios.get(url).then((response) => {
            setCryptos(response.data);
        });
    }, []);

    useEffect(() => {
        setSelected(temp);
    }, [temp]);

    function updateOwned(crypto, amount) {
        const updatedSelected = selected.map((s) => {
            if (s.id === crypto.id) {
                return { ...s, owned: amount };
            }
            return s;
        });
        setTemp(updatedSelected);
    }

    return (
        <>
            <div className="App">
                <select
                    onChange={(e) => {
                        const c = cryptos.find((x) => x.id === e.target.value);
                        if (c) {
                            setSelected([...selected, c]);
                        }
                    }}
                    defaultValue="default"
                >
                    <option value="default">Choose an option</option>
                    {cryptos.map((crypto) => (
                        <option key={crypto.id} value={crypto.id}>
                            {crypto.name}
                        </option>
                    ))}
                </select>
            </div>

            {selected.map((s) => (
                <CryptoSummary key={s.id} crypto={s} updateOwned={updateOwned} />
            ))}

            {selected.length > 0 ? (
                <div style={{ width: 600 }}>
                    <Line
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false,
                                },
                                title: {
                                    display: true,
                                    text: 'Chart.js Line Chart',
                                },
                            },
                        }}
                        data={{
                            labels: selected.map((s) => s.name),
                            datasets: [
                                {
                                    label: 'Crypto Prices',
                                    data: selected.map((s) => s.current_price),
                                    fill: false,
                                    borderColor: 'rgba(75,192,192,1)',
                                },
                            ],
                        }}
                    />
                </div>
            ) : null}

            {selected.length > 0 ? (
                <p>
                    Your portfolio is worth: $
                    {selected
                        .map((s) => {
                            if (isNaN(s.owned)) {
                                return 0;
                            }
                            return s.current_price * (s.owned || 0);
                        })
                        .reduce((prev, current) => prev + current, 0)
                        .toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                </p>
            ) : null}
        </>
    );
};

const CryptoSummary = ({ crypto, updateOwned }) => {
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h3>{crypto?.name}</h3>
            <p>Current Price: ${crypto?.current_price}</p>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button onClick={() => updateOwned(crypto, amount)}>
                Update Owned
            </button>
        </div>
    );
};

export default CryptoInfo;
