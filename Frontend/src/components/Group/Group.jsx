
import './Group.css';
import group_icon from '../../assets/icons/group.svg'

const Group = () => {
  return (
    <div className="group-container">
      <div className="group-card">
        <h3>Create <br/> Group</h3>
        <div className="icons">
          <img src={group_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Group;