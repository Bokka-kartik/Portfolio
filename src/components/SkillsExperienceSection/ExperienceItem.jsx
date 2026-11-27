const ExperienceItem = ({
  title,
  company,
  companyUrl,
  companyLogo,
  companyContext,
  companyContextUrl,
  years,
  description,
}) => (
  <article className="experience-item">
    <p className="experience-period">{years}</p>
    <h4 className="experience-title">{title}</h4>
    <div className="experience-company-row">
      {companyLogo && <img className="experience-logo" src={companyLogo} alt={`${company} logo`} />}
      <div>
        <p className="experience-company">
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noreferrer">{company}</a>
          ) : company}
        </p>
        {companyContext && (
          <a
            className="experience-company-context"
            href={companyContextUrl}
            target="_blank"
            rel="noreferrer"
          >
            {companyContext}
          </a>
        )}
      </div>
    </div>
    <p className="experience-description">{description}</p>
  </article>
);

export default ExperienceItem;
