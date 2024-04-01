// src/Countries.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://countriesapi-eric.netlify.app/api/v1/countries');
      setCountries(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.countryId}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Countries;