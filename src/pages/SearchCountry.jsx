import {
  Container,
  Heading,
  Section,
  SearchForm,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [serchParams, setSearchParams] = useSearchParams();

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const region = serchParams.get('region');
    if (!region) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(`Sorry, some mistake! ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [serchParams]);

  const regionSelected = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm regionSelected={regionSelected} />
        {loading && <Loader />}
        <CountryList countries={countries} />
        {error && <Heading title={error} bottom />}
      </Container>
    </Section>
  );
};
