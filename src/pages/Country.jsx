import { Container, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
import { CountryInfo } from 'components';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId)
      .then(data => setCountry(data))
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        {country && <CountryInfo {...country} />}
        {loading && <Loader />}
        {error && <Heading title={error} />}
      </Container>
    </Section>
  );
};
