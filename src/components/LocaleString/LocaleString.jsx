export const LocaleString = ({ num }) => {
    return (
      <span>
        $
        {num.toLocaleString("es-CO", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </span>
    );
  };