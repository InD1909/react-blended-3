

export const CountryInfo = ({
flag,
capital,
countryName,
languages = [],
population,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img className={styles.img} src={flag} alt={ } />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{}</span>
        </h3>

        <h1 className={styles.title}>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{}</span>
        </p>

        <p className={styles.details}>
          Languages:{' '}
          <span className={styles.accent}>{}</span>
        </p>
      </div>
    </div>
  );
};
