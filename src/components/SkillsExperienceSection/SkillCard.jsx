const SkillCard = ({ icon, name }) => (
  <div className="skill-card">
    <span className="skill-icon" aria-hidden="true">{icon}</span>
    <span className="skill-name">{name}</span>
  </div>
);

export default SkillCard;
