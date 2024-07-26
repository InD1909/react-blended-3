import { Container, GoBackBtn, Heading, Loader, Section } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
import { CountryInfo } from 'components';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const goBackLink = useRef(location.state || '/');

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
        <GoBackBtn path={goBackLink.current} />
        {country && <CountryInfo {...country} />}
        {loading && <Loader />}
        {error && <Heading title={error} />}
      </Container>
    </Section>
  );
};
